import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() title!: string;
  @Input() renderBackBtn: boolean = false;

  constructor(private readonly _location: Location) {

  }

  goToPreviousUrl(): void {
    this._location.back();
  }
}
