import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  redirectToPayment: any;

  ngOnInit(): void {
    
  }
  fname : string = '';
  lname : string = '';
  mobno : string = '';
  email : string = '';
  treatment : string = '';

  fnameMsg : string = '';
  lnameMsg : string = '';
  mobnoMsg : string = '';
  emailMsg : string = '';
  treatMsg : string = '';

  isValidfname : boolean = false;
  isValidlname : boolean = false;
  isValidmobno : boolean = false;
  isValidemail : boolean = false;
  isValidtreat : boolean = false;
  Validatesummit(){
    this.fnameMsg = '';
    this.isValidfname = false;
    if(this.fname.trim()==""){
      this.fnameMsg = "Inavalid";
    }
    else{
      this.isValidfname = true;
    }

    this.lnameMsg = '';
    this.isValidlname = false;
    if(this.lname.trim()==""){
      this.lnameMsg = "Inavalid";
    }
    else{
      this.isValidlname = true;
    }

    let mobPt = "^[6-9]+[0-9]{9}$";
    let mobRgEx = new RegExp(mobPt);
  
    this.mobnoMsg = '';
    this.isValidmobno = false;
    if(this.mobno !='' && mobRgEx.test(this.mobno)){
        this.isValidmobno = true;
    }
    else{
        this.mobnoMsg = "Invalid Mobile";
    }

    let emailPt = "^[a-z]+[a-z0-9]+@[a-z]+[.]+[a-z]{2,3}$";
    let emailRgEx = new RegExp(emailPt);

    this.emailMsg = '';
    this.isValidemail = false;

    if(this.email !='' && emailRgEx.test(this.email)){
      this.isValidemail = true;
    }else{
      this.emailMsg = "Invalid Email";
    }

    this.treatMsg = '';
    this.isValidtreat = false;
    if (this.treatment != 'Open this select menu' && this.treatment != ''){
      this.isValidtreat = true;
    }
    else{
      this.treatMsg = "Invalid";
    }
    if(this.isValidfname && this.isValidlname && this.isValidmobno && this.isValidemail && this.isValidtreat == true){
      this.redirectToPayment;
    }
  }

}
