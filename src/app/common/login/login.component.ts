import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){

  }

  username : string = '';
  pswd : string = '';
  msg : string = '';

  validateLogin(){
    if(this.username.trim()=='trip' && this.pswd.trim()=='trip'){
      sessionStorage.setItem('user', this.username);
      this.redirectToHome();
    }else{
      this.msg = "Failed";
    }
  }

  redirectToHome(){

    this.router.navigate(['/home']);

  }
}
