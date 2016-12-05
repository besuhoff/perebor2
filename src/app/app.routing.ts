import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {PortfolioWhoshoeComponent} from "./portfolio/whoshoe/whoshoe.component";
import {PortfolioFmgComponent} from "./portfolio/fmg/fmg.component";
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
      { path: 'whoshoe', component: PortfolioWhoshoeComponent },
      { path: 'fmg', component: PortfolioFmgComponent },
    ]
  },
  { path: '**', component: PortfolioComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
