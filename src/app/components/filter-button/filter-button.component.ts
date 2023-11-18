import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.css'],
})
export class FilterButtonComponent {
  @Output() switchToggled = new EventEmitter<void>();

  status = false;
  changeStatus(): void {
    this.status = !this.status;
    this.switchToggled.emit();
  }
}
