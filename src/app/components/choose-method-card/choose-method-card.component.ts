import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-method-card',
  templateUrl: './choose-method-card.component.html',
  styleUrls: ['./choose-method-card.component.css']
})
export class ChooseMethodCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() route: string = '';

  constructor(private readonly router: Router) {
  }

  redirectTo(): void {
    this.router.navigate([this.route]);
  }
}
