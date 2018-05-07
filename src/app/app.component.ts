import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { style, animate, state, transition, trigger } from '@angular/animations';

import {LanguageService} from './language.service';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('shrinkOut', [
      transition('* => void', [
        style({height: '*', padding: '0 0 .35em'}),
        animate('200ms ease-out', style({height: 0, padding: 0}))
      ]),
      transition('void => *', [
        style({height: 0, padding: 0}),
        animate('200ms ease-in', style({height: '*', padding: '0 0 .35em'}))
      ])

    ])
  ]

})
export class AppComponent implements OnInit {
  public breadcrumb$: Observable<string>;

  public constructor(private languageService: LanguageService, private breadcrumbService: BreadcrumbService) {

  }

  public ngOnInit(): void {
    this.languageService.initLanguage();
    this.breadcrumb$ = this.breadcrumbService.breadcrumb$;
  }
}
