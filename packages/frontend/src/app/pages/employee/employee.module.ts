import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [EmployeeComponent, CreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
    ]),
  ],
})
export class EmployeeModule {}
