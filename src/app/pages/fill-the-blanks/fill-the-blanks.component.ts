import { Component } from '@angular/core';
import { OpenAIService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-fill-the-blanks',
  templateUrl: './fill-the-blanks.component.html',
  styleUrls: ['./fill-the-blanks.component.css']
})
export class FillTheBlanksComponent {
  constructor(private readonly openAIService: OpenAIService) {}
  generateText(): void {
    this.openAIService.generateText('salut').subscribe(result => {
      console.log(result);
    });
  }
}
