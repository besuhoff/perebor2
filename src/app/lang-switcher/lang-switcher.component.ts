import { Component, OnInit, OnDestroy } from '@angular/core';
import {LanguageService} from '../language.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.css']
})
export class LangSwitcherComponent implements OnInit, OnDestroy {

  public langPopupVisible: boolean;
  public currentLanguage: string;
  public availableLanguages: string[];
  public languageChangedSubscription: Subscription;

  constructor(private languageService: LanguageService) {
    this.langPopupVisible = false;
    this.availableLanguages = this.languageService.getAvailableLanguages();
  }

  switchLanguage(lang: string, $event) {
    $event.stopPropagation();
    this.languageService.changeLanguage(lang);
    this.langPopupVisible = false;
  };

  ngOnInit() {
    this.languageChangedSubscription = this.languageService.language$.subscribe(() => {
      this.currentLanguage = this.languageService.getCurrentLanguage();
    });
  }

  ngOnDestroy() {
    this.languageChangedSubscription.unsubscribe();
  }

}
