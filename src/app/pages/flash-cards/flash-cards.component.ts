import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenAIService } from 'src/app/services/openai.service';
import { PATHS } from 'src/app/constants/paths';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css'],
})
export class FlashCardsComponent implements OnInit {
  rotated = false;
  fileName = 'Plumb';
  index = 0;
  loading: boolean = true;
  cards = [];
  card = { question: '', answear: '' };

  constructor(private gptService: OpenAIService, private router: Router) {}

  ngOnInit(): void {
    this.gptService.generateFlashCardsText().subscribe((response) => {
      this.cards = JSON.parse(response.choices[0].message.content);
      this.loading = false;
      this.createFlashCard();
    });
  }

  createFlashCard(): void {
    this.rotated = false;
    if (this.index == 6) {
      this.index = 0;
      this.router.navigate([PATHS.HOMEPAGE]);
    }
    this.card = this.cards[this.index];
    this.index++;
  }

  revealAnswear(): void {
    this.rotated = !this.rotated;
  }
}
