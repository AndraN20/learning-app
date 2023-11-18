import { Component } from '@angular/core';
import { PATHS } from 'src/app/constants/paths';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  paths=PATHS;
}
