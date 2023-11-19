import { Component, Input } from '@angular/core';
import { MultipleChoice } from 'src/app/types/multiple-choice.type';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/constants/paths';
import { OpenAIService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css'],
})
export class MultipleChoiceComponent {
  questions: MultipleChoice[] = [];
  quizForm: FormGroup;
  question!: MultipleChoice;
  index = 0;
  submitted = false;
  selectedAnswer = '';
  numbers = [0, 1, 2, 3];
  loading = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private gptService: OpenAIService
  ) {
    this.quizForm = new FormGroup({
      answer0: new FormControl(''),
      answer1: new FormControl(''),
      answer2: new FormControl(''),
      answer3: new FormControl(''),
    });
    this.createMultipleChoice();
    this.gptService.generateMultipleChoiceQuestion().subscribe((response) => {
      this.questions = JSON.parse(response.choices[0].message.content);
      console.log(this.questions);
      this.loading = false;
      this.createMultipleChoice();
    });
  }
  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.createMultipleChoice();
    }, 2000);
  }

  createMultipleChoice() {
    this.question = this.questions[this.index];
    if (this.index == 6) {
      this.index = 0;
      this.router.navigate([PATHS.HOMEPAGE]);
    }
    this.index++;
    this.submitted = false;
  }
}
