import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ProjectWhoshoeComponent} from "./project/whoshoe/whoshoe.component";
import {ProjectFmgComponent} from "./project/fmg/fmg.component";
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
    ]
  },
  { path: '**', component: PortfolioComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
