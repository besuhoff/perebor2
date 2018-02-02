import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LanguageService} from '../../language.service';

@Component({
  selector: 'portfolio-justprivat',
  templateUrl: './justprivat.component.html',
  styleUrls: ['./justprivat.component.css']
})
export class ProjectJustprivatComponent implements OnInit, OnDestroy {

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
