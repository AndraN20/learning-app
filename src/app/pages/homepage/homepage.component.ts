import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TextFile } from 'src/app/types/text-file.type';
import { PATHS } from 'src/app/constants/paths';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  currentPath!: string;
  paths = PATHS;
  filter = false;
  editMode = false;
  files: TextFile[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.files = this.localStorageService.getFiles(this.filter);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.router.url;
        console.log('Current Path:', this.currentPath);
      }
    });
  }

  filterFiles() {
    this.filter = !this.filter;
    this.files = this.localStorageService.getFiles(this.filter);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
}
