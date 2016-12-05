import { Injectable } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {ReplaySubject} from 'rxjs/ReplaySubject'
import {CookieService} from 'angular2-cookie/services/cookies.service';

@Injectable()
export class LanguageService {

  private _languageChanged: ReplaySubject<string> = new ReplaySubject<string>(1);

  getAvailableLanguages() {
    return ["en", "ru", "ua"];
  }

  get languageChanged() {
    return this._languageChanged;
  }

  getCurrentLanguage() {
    let browserLang = this.translate.getBrowserLang();
    return this.cookies.get('lang') || browserLang.match(new RegExp(this.getAvailableLanguages().join('|'))) ? browserLang : 'ua';
  }

  initLanguage() {
    var lang = this.getCurrentLanguage();
    this.translate.addLangs(this.getAvailableLanguages());
    this.translate.setDefaultLang('ua');
    this.translate.use(lang);
    this.cookies.put('lang', lang);
    this._languageChanged.next(lang);
  }

  changeLanguage(lang: string) {
    this.cookies.put('lang', lang);
    this.initLanguage();
  }

  constructor(private translate: TranslateService, private cookies: CookieService) {}

}
