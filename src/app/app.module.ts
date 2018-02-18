import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { LangSwitcherComponent } from './lang-switcher/lang-switcher.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArchiveDirective } from './archive.directive';

import { routing, appRoutingProviders } from './app.routing';
import { LanguageService } from './language.service' ;
import { BreadcrumbService } from './breadcrumb.service';
import { LocaleService } from './locale.service';
import { ProjectComponent } from './project/project.component';
import { ProjectFmgComponent } from './project/fmg/fmg.component';
import { ProjectWhoshoeComponent } from './project/whoshoe/whoshoe.component';
import { ProjectJustprivatComponent } from './project/justprivat/justprivat.component';
import { ProjectPeopleInBusinessComponent } from './project/people-in-business/people-in-business.component';
import { LocaleKeyDirective } from './locale-key.directive';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizePipe } from './localize.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    LocaleKeyDirective,
    LocalizePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TranslateModule.forRoot(),
    CookieModule.forRoot(),
    routing
  ],
  providers: [
    appRoutingProviders,
    BreadcrumbService,
    LanguageService,
    LocaleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
