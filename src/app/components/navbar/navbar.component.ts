import { Component } from '@angular/core';
import { PATHS } from '../../constants/paths';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentPath!: string;
  sideNavState: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.router.url;
      }
    });
  }
  paths = PATHS;

  openSideNav(): void {
    this.sideNavState = !this.sideNavState;
  }

  redirectToTextAdd(): void {
    this.router.navigate(['add-file']);
  }
}
