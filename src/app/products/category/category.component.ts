import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {


  isCountryShow : boolean = false;
  countries = ["IND", "USA", "CHINA"];
  indStates = ["TN", "KL", "AP", "TL", "KA", "DL"];
  usStates = ["LA", "TEX", "HRZ", "WSDC"];
  tnCities = ["CH", "THY", "MDU", "TVL"];
  klCities = ["TVDRM", "TRSR", "EKLM", "KCH"];
  states : any = [];
  cities : any = [];

  selectedCountry : string = '';
  selectedState : string = '';
  selectedCity : string = '';

  loadStates(){
    this.states = [];
    if(this.selectedCountry == 'IND')
      this.states = this.indStates;
    else if(this.selectedCountry == 'USA')
      this.states = this.usStates;
    else
      this.states = [];
  }

  loadCities(){
    this.cities = [];
    if(this.selectedState == 'TN')
      this.cities = this.tnCities;
    else if(this.selectedState == 'KL')
      this.cities = this.klCities;
    else
      this.cities = [];
  }

}
