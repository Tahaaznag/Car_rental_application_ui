import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CusstomerDashboardComponent } from './components/cusstomer-dashboard/cusstomer-dashboard.component';

const routes: Routes = [
  {path:"dashboard",component:CusstomerDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
