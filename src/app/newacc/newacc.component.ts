import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newacc',
  templateUrl: './newacc.component.html',
  styleUrls: ['./newacc.component.scss']
})
export class NewaccComponent implements OnInit{

  password : string = '';
  cfPassword : string = '';
  mobno : string = '';
  email : string = '';

  passMsg : string = '';
  cfpassMsg : string = '';
  mobnoMsg : string = '';
  emailMsg : string = '';

  isValidPassword : boolean = false;
  isValidmobno : boolean = false;
  isValidemail : boolean = false;
  redirectTologin: any;

  ngOnInit(): void {
    
  }

  validateMob(){
    let mobPt = "^[6-9]+[0-9]{9}$";
    let mobRgEx = new RegExp(mobPt);

    this.mobnoMsg = '';
    this.isValidmobno = false;

    if(this.mobno !='' && mobRgEx.test(this.mobno)){
      this.isValidmobno = true;
    }else{
      this.mobnoMsg = "Invalid Mobile";
    }
  }

  validateEmail(){
    let emailPt = "^[a-z]+[a-z0-9]+@[a-z]+[.]+[a-z]{2,3}$";
    let emailRgEx = new RegExp(emailPt);

    this.emailMsg = '';
    this.isValidemail = false;

    if(this.email !='' && emailRgEx.test(this.email)){
      this.isValidemail = true;
    }else{
      this.emailMsg = "Invalid Email";
    }
  }

  validatePassword(){

    let pswdPtn = "(?=^.{6,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).*";
    let pswdRegEx = new RegExp(pswdPtn);

    this.passMsg = '';
    this.isValidPassword = false;

    if(this.password != null){
      this.password = this.password.trim();
      if(this.password != '' && pswdRegEx.test(this.password)){
        this.isValidPassword = true;
      }else{
        this.passMsg = "Invalid Password";
      }
    }
    }

    validatecpass(){
      
      this.cfpassMsg = '';
      
      if(this.password != '' && this.isValidPassword && this.password == this.cfPassword){

        this.cfpassMsg = "Valid Password";
      }
      else{
        this.cfpassMsg = "Invalid Password";
      }
    }
  
    validateregister(){
      if(this.isValidmobno && this.isValidemail && this.isValidPassword == true){
        this.redirectTologin();
      }
    }
  
  }

