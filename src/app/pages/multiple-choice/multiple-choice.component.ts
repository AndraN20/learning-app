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

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css'],
})
export class MultipleChoiceComponent {
  questions: MultipleChoice[] = [
    {
      question: 'Cine dormea în cavou?',
      answers: [
        { sentence: 'Amorul meu de plumb', value: true },
        { sentence: 'Funerar vestmint', value: false },
        { sentence: 'Coroanele de plumb', value: false },
        { sentence: 'Flori de plumb', value: false },
      ],
    },
    {
      question: 'Ce atirnau de persoana care dormea în cavou?',
      answers: [
        { sentence: 'Amorul meu de plumb', value: false },
        { sentence: 'Funerar vestmint', value: false },
        { sentence: 'Aripile de plumb', value: true },
        { sentence: 'Coroanele de plumb', value: false },
      ],
    },
    {
      question: 'Ce se afla în jurul persoanei care dormea în cavou?',
      answers: [
        { sentence: 'Amorul meu de plumb', value: false },
        { sentence: 'Funerar vestmint', value: true },
        { sentence: 'Coroanele de plumb', value: false },
        { sentence: 'Flori de plumb', value: false },
      ],
    },
    {
      question: 'Ce era în jurul persoanei care dormea în cavou?',
      answers: [
        { sentence: 'Amorul meu de plumb', value: false },
        { sentence: 'Funerar vestmint', value: true },
        { sentence: 'Coroanele de plumb', value: false },
        { sentence: 'Flori de plumb', value: false },
      ],
    },
    {
      question: 'Cine a inceput să strige amorul de plumb?',
      answers: [
        { sentence: 'Eu', value: false },
        { sentence: 'Amorul meu de plumb', value: true },
        { sentence: 'Altă persoană', value: false },
        { sentence: 'Nimeni, a fost liniște', value: false },
      ],
    },
    {
      question: 'Ce temperatura era în cavou?',
      answers: [
        { sentence: 'Frig', value: true },
        { sentence: 'Cald', value: false },
        { sentence: 'Moderată', value: false },
        { sentence: 'Era variabilă', value: false },
      ],
    },
  ];
  quizForm: FormGroup;
  question!: MultipleChoice;
  index = 0;
  submitted = false;
  selectedAnswer = '';
  numbers = [0, 1, 2, 3];

  constructor(private fb: FormBuilder, private router: Router) {
    this.quizForm = new FormGroup({
      answer0: new FormControl(''),
      answer1: new FormControl(''),
      answer2: new FormControl(''),
      answer3: new FormControl(''),
    });
    this.createMultipleChoice();
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
