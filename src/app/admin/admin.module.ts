import { MarketingComponent } from './marketing/marketing.component';
import { AdminProcessQualitySummaryComponent } from './../admin-process-quality-summary/admin-process-quality-summary.component';
import { AdminProcessQualityComponent } from './admin-process-quality/admin-process-quality.component';
import { AdminPreferencesPreferencesComponent } from './admin-preferences-preferences/admin-preferences-preferences.component';
import { AdminPreferencesSendgridComponent } from './admin-preferences-sendgrid/admin-preferences-sendgrid.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';

import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { SetupComponent } from './setup/setup.component';
import { TreeModule } from 'ng2-tree';
import { AdminSolutionComponent } from './admin-solution/admin-solution.component';
import { AdminManageusersComponent } from './admin-manageusers/admin-manageusers.component';
import { AdminPreferencesComponent } from './admin-preferences/admin-preferences.component';
import { AdminStructureComponent } from './admin-structure/admin-structure.component';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule }   from '@angular/forms';
import { AdminPreferencesTwilioComponent } from './admin-preferences-twilio/admin-preferences-twilio.component';
import { AdminPreferencesCmsComponent } from './admin-preferences-cms/admin-preferences-cms.component';
import { AdminProcessProjectComponent } from '../admin-process-project/admin-process-project.component';
import { ChartModule } from 'angular-highcharts';
import { MarketingHighlightsComponent } from './marketing/marketing-highlights/marketing-highlights.component';
import { MarketingDataComponent } from './marketing/marketing-data/marketing-data.component';
import { AdminProgressComponent } from './admin-progress/admin-progress.component';
import { AdminInnovationComponent } from './admin-innovation/admin-innovation.component';
import { AdminTalentComponent } from './admin-talent/admin-talent.component';
import { AdminCultureComponent } from './admin-culture/admin-culture.component';
import { AdminIndustriesComponent } from './admin-industries/admin-industries.component';
import { AdminAlignmentComponent } from './admin-alignment/admin-alignment.component';
import { AdminRiskComponent } from './admin-risk/admin-risk.component';
import { AdminControlInfrastructureComponent } from './admin-control-infrastructure/admin-control-infrastructure.component';
import { AdminControlFinanceComponent } from './admin-control-finance/admin-control-finance.component';
import { AdminControlStatutoryComponent } from './admin-control-statutory/admin-control-statutory.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    Daterangepicker,
    TreeModule,
    ModalModule,
    FormsModule,
    ChartModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
   MarketingComponent,
    AdminDashboard2Component,
    AdminDashboardComponent,
    SetupComponent,
    AdminSolutionComponent,
    AdminManageusersComponent,
    AdminPreferencesComponent,
    AdminStructureComponent,
    AdminPreferencesSendgridComponent,
    AdminPreferencesTwilioComponent,
    AdminPreferencesCmsComponent,
    AdminPreferencesPreferencesComponent,
    AdminProcessQualityComponent,
    AdminProcessQualitySummaryComponent,
    AdminProcessProjectComponent,
    MarketingHighlightsComponent,
    MarketingDataComponent,
    AdminProgressComponent,
    AdminInnovationComponent,
    AdminTalentComponent,
    AdminCultureComponent,
    AdminIndustriesComponent,
    AdminAlignmentComponent,
    AdminRiskComponent,
    AdminControlInfrastructureComponent,
    AdminControlFinanceComponent,
    AdminControlStatutoryComponent

  ],
  exports: [AdminComponent]
})
export class AdminModule { }
