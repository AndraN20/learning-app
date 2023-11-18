import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-choose-method-card',
  templateUrl: './choose-method-card.component.html',
  styleUrls: ['./choose-method-card.component.css']
})
export class ChooseMethodCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
