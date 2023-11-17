import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.css']
})
export class FilterButtonComponent {
  status = false;
  changeStatus(): void {
    this.status = !this.status;
  }
}
