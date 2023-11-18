import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { PATHS } from 'src/app/constants/paths';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() enableGoBack: boolean = false;
  @Input() route: string = '';

  paths = PATHS;
  currentPath!: string;

  constructor(
    private readonly _location: Location,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this._router.url.slice(1);
        console.log(this.currentPath);
        console.log(this.paths.HOMEPAGE);
      }
    });
  }

  isHomepage(): boolean {
    return this.currentPath == this.paths.HOMEPAGE;
  }

  goToPreviousUrl(): void {
    this._location.back();
  }

  redirectTo(): void {
    this._router.navigate([this.route]);
  }
}
