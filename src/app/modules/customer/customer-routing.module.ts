import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CusstomerDashboardComponent } from './components/cusstomer-dashboard/cusstomer-dashboard.component';
import { BookCarComponent } from './components/book-car/book-car.component';

const routes: Routes = [
  {path:"dashboard",component:CusstomerDashboardComponent},
  {path:"book/:id",component:BookCarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
