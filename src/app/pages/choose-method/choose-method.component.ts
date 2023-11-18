import { Component } from '@angular/core';
import { PATHS } from 'src/app/constants/paths';

@Component({
  selector: 'app-choose-method',
  templateUrl: './choose-method.component.html',
  styleUrls: ['./choose-method.component.css']
})
export class ChooseMethodComponent {
  fill_the_blanks_title: string = 'Fill the blanks';
  fill_the_blanks_description: string = `   Lorem _____ is simply dummy text of the printing and ________ industry. Lorem Ipsum has been the industry's standard _____ text ever since ____ 1500s.`;

  reorder_title: string = 'Reorder';
  reorder_description: string = `text`;

  right_answer_title: string = 'Choose the right answer';
  right_answer_description: string = `text`;

  paths = PATHS;
}
