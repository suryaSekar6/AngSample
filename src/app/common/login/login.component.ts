import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  ngOnInit(): void {
    this.getLgDetails();
  }
  constructor(private router: Router, private http: HttpClient){

  }

  username : string = '';
  pswd : string = '';
  msg : string = '';

  users : any;


  getLgDetails(){

    this.http.get('https://retoolapi.dev/z10JwY/skyhospLg').subscribe( data => {
      this.users = data;
    },
    err => { console.log(err);});
  }

  validateLogin(){

    for(let user of this.users){
      if(user.username == this.username && user.password == this.pswd){
        sessionStorage.setItem('user', this.username);
        sessionStorage.setItem('userMob', user.mobile);
        sessionStorage.setItem('userEmail', user.email)
        this.redirectToHome();
      }else{
        this.msg = "Failed";
      }
    }
  }

  redirectToHome(){

    this.router.navigate(['/home']);

  }
}
