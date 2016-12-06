import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { LangSwitcherComponent } from './lang-switcher/lang-switcher.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArchiveDirective } from './archive.directive';

import { routing, appRoutingProviders } from './app.routing';
import {LanguageService} from "./language.service";
import { ProjectComponent } from './project/project.component';
import { ProjectFmgComponent } from './project/fmg/fmg.component';
import { ProjectWhoshoeComponent } from './project/whoshoe/whoshoe.component';

@NgModule({
  declarations: [
    AppComponent,
    LangSwitcherComponent,
    BreadcrumbsComponent,
    PortfolioComponent,
    ArchiveDirective,
    ProjectComponent,
    ProjectFmgComponent,
    ProjectWhoshoeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http:Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
      deps: [Http]
    }),
    routing
  ],
  providers: [
    appRoutingProviders,
    CookieService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
