import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CusstomerDashboardComponent } from './components/cusstomer-dashboard/cusstomer-dashboard.component';


@NgModule({
  declarations: [
    CusstomerDashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
