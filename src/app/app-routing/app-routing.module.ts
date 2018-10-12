import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
// import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Route } from '@angular/compiler/src/core';

const routes:Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent,loadChildren: './../admin/admin.module#AdminModule' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
