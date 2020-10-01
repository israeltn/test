import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppraisalchangeapprovalstageComponent } from './appraisalchangeapprovalstage/appraisalchangeapprovalstage.component'

const routes: Routes = [
 { path:"appraisalchangeapprovalstage", component:AppraisalchangeapprovalstageComponent }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalsetupRoutingModule { }
