import { Component, OnInit, OnDestroy } from '@angular/core';
import {LanguageService} from "../language.service";

@Component({
  selector: 'lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.css']
})
export class LangSwitcherComponent implements OnInit, OnDestroy {

  private langPopupVisible: boolean;
  private currentLanguage: string;
  private availableLanguages: string[];

  constructor(private languageService: LanguageService) {
    this.langPopupVisible = false;
    this.availableLanguages = this.languageService.getAvailableLanguages();


    this.languageService.languageChanged.subscribe(() => {
      this.currentLanguage = this.languageService.getCurrentLanguage();
    });
  }

  switchLanguage(lang: string, $event) {
    $event.stopPropagation();
    this.languageService.changeLanguage(lang);
    this.langPopupVisible = false;
  };

  ngOnInit() {
  }

  ngOnDestroy() {
    this.languageService.languageChanged.unsubscribe();
  }

}
