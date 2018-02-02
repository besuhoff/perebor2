import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LanguageService} from "../language.service";

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  private languageChangedSubscription: Subscription;
  public currentLanguage: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageChangedSubscription = this.languageService.languageChanged.subscribe(() => {
      this.currentLanguage = this.languageService.getCurrentLanguage();
    });
  }

  ngOnDestroy() {
    this.languageChangedSubscription.unsubscribe();
  }

}
