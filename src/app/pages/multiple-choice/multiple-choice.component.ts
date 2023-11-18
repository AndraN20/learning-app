import { Component, Input } from '@angular/core';
import { MultipleChoice } from 'src/app/types/multiple-choice.type';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent {
  quizForm: FormGroup;
  multiplechoice: MultipleChoice[] = [{
    question: "Cine a scris Moara cu Noroc?",
    answers: [{ sentence: "Ioan Slavici", value: true }, { sentence: "Mihai Eminescu", value: false }, { sentence: "Vasile Alecsandri", value: false }, { sentence: "George Bacovia", value: false }]
  },
  {
    question: "Cine a scris Moara cu Noroc?",
    answers: [{ sentence: "Ioan Slavici", value: true }, { sentence: "Mihai Eminescu", value: false }, { sentence: "Vasile Alecsandri", value: false }, { sentence: "George Bacovia", value: false }]
  },
  {
    question: "Cine a scris Moara cu Noroc?",
    answers: [{ sentence: "Ioan Slavici", value: true }, { sentence: "Mihai Eminescu", value: false }, { sentence: "Vasile Alecsandri", value: false }, { sentence: "George Bacovia", value: false }]
  },
  {
    question: "Cine a scris Moara cu Noroc?",
    answers: [{ sentence: "Ioan Slavici", value: true }, { sentence: "Mihai Eminescu", value: false }, { sentence: "Vasile Alecsandri", value: false }, { sentence: "George Bacovia", value: false }]
  },
  {
    question: "Cine a scris Moara cu Noroc?",
    answers: [{ sentence: "Ioan Slavici", value: true }, { sentence: "Mihai Eminescu", value: false }, { sentence: "Vasile Alecsandri", value: false }, { sentence: "George Bacovia", value: false }]
  },
  {
    question: "Cine a scris Moara cu Noroc?",
    answers: [{ sentence: "Ioan Slavici", value: true }, { sentence: "Mihai Eminescu", value: false }, { sentence: "Vasile Alecsandri", value: false }, { sentence: "George Bacovia", value: false }]
  }
  ];
  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({});
    this.multiplechoice.forEach((question, index) => {
      this.quizForm.addControl('question${index}', new FormControl(null))
    })
  }
  onSubmit() {
    console.log(this.quizForm.value);
  }
}

