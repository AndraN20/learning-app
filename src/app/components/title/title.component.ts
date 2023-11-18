import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() enableGoBack: boolean = false;
  @Input() route: string = '';
  constructor(private readonly _location: Location,
              private readonly _router: Router) {
  
  }

  goToPreviousUrl(): void {
    this._location.back();
  }

  redirectTo(): void {
    this._router.navigate([this.route]);
  }
}
