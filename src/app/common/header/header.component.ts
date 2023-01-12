import { Component } from '@angular/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [NgbNavModule, NgbDropdownModule],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
export class NgbdDropdownBasic{}