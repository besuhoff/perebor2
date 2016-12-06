import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LanguageService} from "../../language.service.ts";

@Component({
  selector: 'portfolio-whoshoe',
  templateUrl: './whoshoe.component.html',
  styleUrls: ['./whoshoe.component.css']
})
export class ProjectWhoshoeComponent implements OnInit, OnDestroy {

  private languageChangedSubscription: Subscription;
  private currentLanguage: string;

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
