import { Component } from '@angular/core';
import { PATHS } from 'src/app/constants/paths';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  paths = PATHS;
  data = [1, 2, 3, 4];
}
