import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'header-comp', 
  templateUrl: './header.component.html',
  standalone: true,
  imports: [NgbNavModule, NgbDropdownModule],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  user: string = '';
  userMob : string = '';
  userEmail : string = '';

  ngOnInit(): void {
    
    this.user = sessionStorage.getItem('user') || '';
    this.userEmail = sessionStorage.getItem('userEmail') || '';
    this.userMob = sessionStorage.getItem('userMob') || '';

  }

}
export class NgbdDropdownBasic
{

}
