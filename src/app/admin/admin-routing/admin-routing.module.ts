import { AdminControlStatutoryComponent } from './../admin-control-statutory/admin-control-statutory.component';
import { AdminControlFinanceComponent } from './../admin-control-finance/admin-control-finance.component';
import { AdminControlInfrastructureComponent } from './../admin-control-infrastructure/admin-control-infrastructure.component';
import { AdminRiskComponent } from './../admin-risk/admin-risk.component';
import { AdminAlignmentComponent } from './../admin-alignment/admin-alignment.component';
import { AdminIndustriesComponent } from './../admin-industries/admin-industries.component';
import { AdminCultureComponent } from './../admin-culture/admin-culture.component';
import { AdminTalentComponent } from './../admin-talent/admin-talent.component';
import { AdminInnovationComponent } from './../admin-innovation/admin-innovation.component';
import { MarketingDataComponent } from './../marketing/marketing-data/marketing-data.component';
import { MarketingHighlightsComponent } from './../marketing/marketing-highlights/marketing-highlights.component';
import { MarketingComponent } from './../marketing/marketing.component';
import { AdminProcessProjectComponent } from './../../admin-process-project/admin-process-project.component';
import { AdminProcessQualitySummaryComponent } from './../../admin-process-quality-summary/admin-process-quality-summary.component';
import { AdminProcessQualityComponent } from './../admin-process-quality/admin-process-quality.component';
import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { SetupComponent } from '../setup/setup.component';
import { AdminSolutionComponent } from '../admin-solution/admin-solution.component';
import{AdminManageusersComponent} from '../admin-manageusers/admin-manageusers.component'
import {AdminStructureComponent} from '../admin-structure/admin-structure.component';
import { AdminPreferencesTwilioComponent } from '../admin-preferences-twilio/admin-preferences-twilio.component';
import { AdminPreferencesSendgridComponent } from '../admin-preferences-sendgrid/admin-preferences-sendgrid.component';
import { AdminPreferencesPreferencesComponent } from '../admin-preferences-preferences/admin-preferences-preferences.component';
import { AdminPreferencesComponent } from '../admin-preferences/admin-preferences.component';
import { AdminPreferencesCmsComponent } from '../admin-preferences-cms/admin-preferences-cms.component';
import { AdminProgressComponent } from '../admin-progress/admin-progress.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'setup', component: SetupComponent },
 {path: 'marketing', component: MarketingComponent, children:[
  {path:'', redirectTo: 'highlights', pathMatch: 'full'}, 
  { path: 'highlights', component: MarketingHighlightsComponent },
  { path: 'data', component: MarketingDataComponent }
 ]
},
  { path: 'technology', component: AdminDashboard2Component },
  { path: 'solutions', component: AdminSolutionComponent },
  { path: 'progress', component: AdminProgressComponent },
  { path: 'innovation', component: AdminInnovationComponent },
  { path: 'talent', component: AdminTalentComponent },
  { path: 'culture', component: AdminCultureComponent },
  { path: 'industries', component: AdminIndustriesComponent },
  { path: 'alignment', component: AdminAlignmentComponent },
  { path: 'risk', component: AdminRiskComponent },

  { path: 'infrastructure', component: AdminControlInfrastructureComponent },
  { path: 'finance', component: AdminControlFinanceComponent },
  { path: 'statutory', component: AdminControlStatutoryComponent },




  { path: 'manageusers', component: AdminManageusersComponent },
  { path: 'preferences', component: AdminPreferencesComponent , children: [
   {path:'', redirectTo: 'cms', pathMatch: 'full'}, 
    { path: 'cms', component: AdminPreferencesCmsComponent },
    { path: 'twilio', component: AdminPreferencesTwilioComponent },
    { path: 'sendgrid', component: AdminPreferencesSendgridComponent },
    { path: 'preference', component: AdminPreferencesPreferencesComponent}
  ] },
  { path: 'quality', component:  AdminProcessQualityComponent },
  { path: 'structure', component: AdminStructureComponent },
  { path: 'projects', component: AdminProcessProjectComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
