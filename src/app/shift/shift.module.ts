
import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { ShiftRoutingModule } from './shift-routing.module';
import { ShiftsComponent } from './shifts/shifts.component'
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { NgSelectModule } from '@ng-select/ng-select';
import {
	DxSelectBoxModule,
	DxTextAreaModule,
	DxDateBoxModule,
	DxFormModule,
	DxDataGridModule,
	DxSpeedDialActionModule
} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    ShiftRoutingModule,
    FormsModule,
	NgSelectModule,
    MatStepperModule,
    MatIconModule,
	DxSelectBoxModule,
	DxTextAreaModule,
	DxDateBoxModule,
	DxFormModule,
	DxDataGridModule,
	DxSpeedDialActionModule
  ],
  declarations: [ShiftsComponent,Shift_categoryComponent,Shift_configComponent,Shift_daysComponent,Shift_excludeComponent,Shift_schedulesComponent,Shift_schedule_detailsComponent,Shift_schedule_employeesComponent,Shift_statusComponent,Shift_status_categoryComponent,Shift_templatesComponent,Shift_template_detailsComponent,Shift_transactionsComponent,Shift_typesComponent]
})
export class ShiftModule { }
