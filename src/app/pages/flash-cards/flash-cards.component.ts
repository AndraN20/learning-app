import { Component, OnInit } from '@angular/core';
import { OpenAIService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css'],
})
export class FlashCardsComponent implements OnInit {
  rotated = false;
  questions = [];
  fileName = 'Plumb';
  card = {
    question: 'Cine a scris moara cu noroc?',
    answear: 'Irinel Columbeanu',
  };

  constructor(private gptService: OpenAIService) {}

  ngOnInit(): void {
    this.gptService.generateFlashCardsText().subscribe((response) => {
      this.questions = JSON.parse(response);
    });
  }

  revealAnswear(): void {
    this.rotated = !this.rotated;
  }
}
