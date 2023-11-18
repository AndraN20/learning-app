import { Component } from '@angular/core';
import { PATHS } from '../../constants/paths';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  paths = PATHS;
}
