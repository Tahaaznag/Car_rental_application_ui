import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-cusstomer-dashboard',
  templateUrl: './cusstomer-dashboard.component.html',
  styleUrl: './cusstomer-dashboard.component.scss'
})
export class CusstomerDashboardComponent {
    cars:any=[];
   constructor(private service:CustomerService){

   }
   ngOnInit(){
    this.getAllCars();
   }
   getAllCars(){
    this.service.getAllCars().subscribe((res)=>{
      console.log(res);
      res.forEach((element:any) => {
        element.processingImg='data:image/jpeg;base64,'+element.returnedImage;
        this.cars.push(element);
      });
    })
   }
}
