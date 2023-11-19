import { Component, Input } from '@angular/core';
import { PATHS } from 'src/app/constants/paths';

@Component({
  selector: 'app-choose-method',
  templateUrl: './choose-method.component.html',
  styleUrls: ['./choose-method.component.css'],
})
export class ChooseMethodComponent {
  fill_the_blanks_title: string = 'Fill the blanks';
  fill_the_blanks_description: string = `A learning method where key words are removed from a text, creating gaps for you to fill in.`;

  right_answer_title: string = 'Choose the right answer';
  right_answer_description: string = `A learning method where questions with a single correct answer are generated from your text.`;

  paths = PATHS;
}
