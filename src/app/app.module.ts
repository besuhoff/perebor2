import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {TranslateModule} from 'ng2-translate';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { LangSwitcherComponent } from './lang-switcher/lang-switcher.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArchiveDirective } from './archive.directive';

import { routing, appRoutingProviders } from './app.routing';
import {LanguageService} from "./language.service";
import { ProjectComponent } from './project/project.component';
import { PortfolioFmgComponent } from './portfolio/fmg/fmg.component';
import { PortfolioWhoshoeComponent } from './portfolio/whoshoe/whoshoe.component';

@NgModule({
  declarations: [
    AppComponent,
    LangSwitcherComponent,
    BreadcrumbsComponent,
    PortfolioComponent,
    ArchiveDirective,
    ProjectComponent,
    PortfolioFmgComponent,
    PortfolioWhoshoeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
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
