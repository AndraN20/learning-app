import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { OpenAIService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-fill-the-blanks',
  templateUrl: './fill-the-blanks.component.html',
  styleUrls: ['./fill-the-blanks.component.css']
})
export class FillTheBlanksComponent implements OnInit {
  constructor(private readonly openAIService: OpenAIService,
              private readonly localStorageService: LocalStorageService) {}

  wordsArray = [];
  allContent: string = '';
  allWords: any;

  ngOnInit(): void {
    this.openAIService.generateFillBlanksWords().subscribe(result => {
      const message = result.choices[0].message.content;
      console.log(message);
      const filename = this.localStorageService.getCurrentFileName();
      const file = this.localStorageService.getFile(filename);
      let content: any = file?.text;
      this.wordsArray = message.split(',');
      this.wordsArray.forEach((word: string) => {
        const regex = new RegExp('\\b' + word.trim() + '\\b', 'gi');
        content = content.replace(regex, 'placeholder');
      });
      this.allContent = content;
      this.allWords = this.allContent.split(/[ \n\t.?!]+/);
      console.log(this.wordsArray);
      console.log(this.allWords);
    });
  }
}
