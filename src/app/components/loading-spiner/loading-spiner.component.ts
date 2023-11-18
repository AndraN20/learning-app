import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spiner',
  templateUrl: './loading-spiner.component.html',
  styleUrls: ['./loading-spiner.component.css'],
})
export class LoadingSpinerComponent {
  @Input() show: boolean = false;
}
