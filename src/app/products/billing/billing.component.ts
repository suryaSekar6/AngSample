import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
  constructor(private router : Router){
  }

  calculateTotal(){

  }

  addProduct(){}
}
