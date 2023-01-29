import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products : any= [];


  constructor(private router : Router){ 
  }

  ngOnInit(): void {
    
    let sessUser = sessionStorage.getItem('user') || '';
    if(sessUser == ''){
      this.router.navigate(['/login']);
    }

    this.products = ["Mobiles", "Food", "Laptops", "Bikes", "Cars"];
  }
}
