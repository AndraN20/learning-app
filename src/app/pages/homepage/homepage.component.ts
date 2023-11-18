import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TextFile } from 'src/app/types/text-file.type';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}
  files: TextFile[] = [];
  ngOnInit(): void {
    this.files = this.localStorageService.getFiles();
  }
}
