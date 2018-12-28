import { Routes, RouterModule } from '@angular/router';
import { InterpolationExComponent } from './interpolation-ex/interpolation-ex.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'interpolation', component: InterpolationExComponent }
];
export const appRouting = RouterModule.forRoot(routes);
