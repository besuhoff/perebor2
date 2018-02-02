import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CookieModule } from 'ngx-cookie';

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
import { ProjectJustprivatComponent } from './project/justprivat/justprivat.component';
import { ProjectPeopleInBusinessComponent } from './project/people-in-business/people-in-business.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LangSwitcherComponent,
    BreadcrumbsComponent,
    PortfolioComponent,
    ArchiveDirective,
    ProjectComponent,
    ProjectFmgComponent,
    ProjectWhoshoeComponent,
    ProjectJustprivatComponent,
    ProjectPeopleInBusinessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CookieModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    routing
  ],
  providers: [
    appRoutingProviders,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
