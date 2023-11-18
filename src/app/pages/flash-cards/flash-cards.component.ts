import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css'],
})
export class FlashCardsComponent {
  rotated = false;

  card = {
    question: 'Cine a scris moara cu noroc?',
    answear: 'Irinel Columbeanu',
  };

  revealAnswear(): void {
    this.rotated = !this.rotated;
    console.log(this.rotated);
  }
}
