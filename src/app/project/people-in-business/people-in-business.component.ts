import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LanguageService} from '../../language.service';

@Component({
  selector: 'portfolio-people-in-business',
  templateUrl: './people-in-business.component.html',
  styleUrls: ['./people-in-business.component.css']
})
export class ProjectPeopleInBusinessComponent implements OnInit, OnDestroy {

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
