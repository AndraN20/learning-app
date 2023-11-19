import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { OpenAIService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-fill-the-blanks',
  templateUrl: './fill-the-blanks.component.html',
  styleUrls: ['./fill-the-blanks.component.css'],
})
export class FillTheBlanksComponent implements OnInit {
  blankWords!: [{ word: string, index: number }];
  allContent: string = '';
  wordsArray: any;
  form!: FormGroup;
  formControlValues: any = [];
  answersArray: boolean[] = [];
  submitted = false;
  submittedCount = 0;

  constructor(
    private readonly openAIService: OpenAIService,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.openAIService.generateFillBlanksWords().subscribe((result) => {
    // });

    // const message = result.choices[0].message.content;
    const filename = this.localStorageService.getCurrentFileName();
    const file = this.localStorageService.getFile(filename);
    let content: any = file?.text;
    // this.blankWords = JSON.parse(message);
    let message = `[
      {"word": "Catelus", "index": 0},
      {"word": "parul", "index": 2},
      {"word": "cret", "index": 3},
      {"word": "Fura", "index": 4},
      {"word": "rata", "index": 6},
      {"word": "cotet", "index": 7},
      {"word": "El", "index": 8},
      {"word": "jura", "index": 9},
      {"word": "fura", "index": 10},
      {"word": "Si", "index": 11},
      {"word": "prins", "index": 13},
      {"word": "rata-n", "index": 15},
      {"word": "gura", "index": 16},
      {"word": "ou-n", "index": 18},
      {"word": "buzunar", "index": 19},
      {"word": "Hai", "index": 21},
      {"word": "Sfatul", "index": 23},
      {"word": "Popular", "index": 24},
      {"word": "ma", "index": 26},
      {"word": "duc", "index": 27},
      {"word": "o", "index": 28},
      {"word": "data", "index": 29},
      {"word": "cazut", "index": 31},
      {"word": "nasu", "index": 33},
      {"word": "balta", "index": 35}
    ]    
    `
    this.blankWords = JSON.parse(message);
    console.log(this.blankWords);
    this.allContent = content;
    this.wordsArray = this.allContent.split(/[ \n\t.?!]+/);
    this.blankWords.forEach(element => {
      this.wordsArray[element.index] = `--placeholder-${element.index}-`;
    });
    console.log(this.blankWords);
    console.log(this.wordsArray);
    this.form = this.fb.group({});

    this.blankWords.forEach(word => {
      const controlName = `control-${word.index}`;
      this.form.addControl(controlName, this.fb.control(''));
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.submittedCount += 1;

    if (this.submittedCount == 1) {
      Object.keys(this.form.controls).forEach(controlName => {
        const control = this.form.get(controlName);
        if (control) {
          console.log(`Control Name: ${controlName}, Value: ${control.value}`);
          this.formControlValues.push(control.value);
        }
      });

      for (let i = 0; i < this.formControlValues.length; i += 1) {
        if (this.formControlValues[i] == this.blankWords[i].word) {
          this.answersArray[this.blankWords[i].index] = true;
        } else {
          this.answersArray[this.blankWords[i].index] = false;
        }
      }
    } else {
      this.router.navigate(['homepage']);
    }

    // console.log(this.formControlValues);

  }

}
