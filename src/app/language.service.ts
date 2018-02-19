import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {ReplaySubject} from 'rxjs/ReplaySubject'
import {CookieService} from 'ngx-cookie';
const { en } = require('../locale/en');
const { ru } = require('../locale/ru');
const { ua } = require('../locale/ua');

const locales = {
  ru,
  en,
  ua
};

@Injectable()
export class LanguageService {

  private _language$$: ReplaySubject<string> = new ReplaySubject<string>(1);
  private _locale$$: ReplaySubject<Locale> = new ReplaySubject<Locale>(1);
  private _defaultLang: string = 'ua';

  getAvailableLanguages() {
    return ["en", "ru", "ua"];
  }

  get language$() {
    return this._language$$.asObservable();
  }

  get locale$() {
    return this._locale$$.asObservable();
  }

  getCurrentLanguage() {
    let browserLang = this.translate.getBrowserLang();
    return this.cookies.get('lang') || (browserLang.match(new RegExp(this.getAvailableLanguages().join('|'))) ? browserLang : this._defaultLang);
  }

  initLanguage() {
    let lang = this.getCurrentLanguage();
    this._locale$$.next(locales[lang]);
    this.cookies.put('lang', lang);
    this._language$$.next(lang);
  }

  changeLanguage(lang: string) {
    this.cookies.put('lang', lang);
    this.initLanguage();
  }

  constructor(private translate: TranslateService, private cookies: CookieService) { }

}
