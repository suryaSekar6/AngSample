import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {



  ParaCount: number = 0;
  BenyCount: number = 0;
  RexallCount: number = 0;
  TyleCount: number = 0;
  EquCount: number = 0;
  MortCount: number = 0;
  RelifCount: number = 0;
  PeptCount: number = 0;
  VicksCount: number = 0;
  InjectCount: number = 0;
  PampCount: number = 0;
  SanitaryCount: number = 0;
  BabyCount: number = 0;
  MeterCount: number = 0;
  GrapeCount: number = 0;
  MothershCount: number = 0;
  HerbsCount: number = 0;
  EnormalCount: number = 0;
  BoostCount: number = 0;
  HorlicksCount: number = 0;
  
  products = [{ name: 'paracetomol', count: 0 }, { name: 'Benylin', count: 0 }, { name: 'Rexall', count: 0 }, { name: 'Tylenol', count: 0 },
  { name: 'Equate', count: 0 }, { name: 'Mortin', count: 0 }, { name: 'Relif', count: 0 }, { name: 'Pepto', count: 0 },
  { name: 'Vicks', count: 0 }, { name: 'Injection', count: 0 }, { name: 'Pampers', count: 0 }, { name: 'Sanitary', count: 0 },
  { name: 'Babykit', count: 0 }, { name: 'Meter', count: 0 }, { name: 'Grape', count: 0 }, { name: 'Mothers', count: 0 },
  { name: 'Herbskin', count: 0 }, { name: 'Enormal', count: 0 }, { name: 'Boost', count: 0 }, { name: 'Horlicks', count: 0 },];




  paracetomalCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.ParaCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.ParaCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  benylinCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.BenyCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.BenyCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  rexallCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.RexallCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.RexallCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  tylenolCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.TyleCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.TyleCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  equateCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.EquCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.EquCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  mortinCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.MortCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.MortCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  relifCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.RelifCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.RelifCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  peptoCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.PeptCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.PeptCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  vicksCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.VicksCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.VicksCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  injectionCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.InjectCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.InjectCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  pampersCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.PampCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.PampCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  sanitaryCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.SanitaryCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.SanitaryCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  babyCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.BabyCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.BabyCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  meterCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.MeterCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.MeterCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  grapeCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.GrapeCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.GrapeCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  mothershCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.MothershCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.MothershCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  herbCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.HerbsCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.HerbsCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  enormalCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.EnormalCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.EnormalCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  boostCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.BoostCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.BoostCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }
  horlickCount(sign: string, cProduct: string) {
    let product = this.products.filter(prod => { return prod.name == cProduct });
    let extProduct = product;
    if (sign == '-') {
      if (product[0].count > 0) {
        product[0].count = product[0].count - 1;
        this.HorlicksCount = product[0].count;
      }
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
    else if (sign == '+') {
      product[0].count = product[0].count + 1;
      this.HorlicksCount = product[0].count;
      let prodInx = this.products.indexOf(extProduct[0]);
      this.products[prodInx] = product[0];
    }
  }




}
