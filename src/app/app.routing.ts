import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ProjectWhoshoeComponent} from "./project/whoshoe/whoshoe.component";
import {ProjectFmgComponent} from "./project/fmg/fmg.component";
import {ProjectJustprivatComponent} from "./project/justprivat/justprivat.component";
import {ProjectPeopleInBusinessComponent} from "./project/people-in-business/people-in-business.component";
import {ProjectComponent} from "./project/project.component";



const appRoutes: Routes = [
  {
      path: '',
      component: PortfolioComponent
  },
  {
    path: 'projects',
    component: ProjectComponent,
    children: [
      { path: 'whoshoe', component: ProjectWhoshoeComponent },
      { path: 'fmg', component: ProjectFmgComponent },
      { path: 'justprivat', component: ProjectJustprivatComponent },
      { path: 'peopleinbusiness', component: ProjectPeopleInBusinessComponent },
    ]
  },
  { path: '**', component: PortfolioComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
