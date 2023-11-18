import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/constants/paths';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TextFile } from 'src/app/types/text-file.type';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-file',
  templateUrl: './text-file.component.html',
  styleUrls: ['./text-file.component.css'],
})
export class TextFileComponent {
  @Input() file!: TextFile;
  @Input() editMode!: boolean;

  @Output() refresh = new EventEmitter<void>();

  constructor(
    private readonly router: Router,
    private localStorageService: LocalStorageService
  ) {}

  redirectToChooseMethod(): void {
    this.localStorageService.saveCurrentFileName(this.file.name);
    this.router.navigate([PATHS.CHOOSEMETHOD]);
  }

  deleteFile(name: string): void {
    this.localStorageService.deleteFile(name);
    this.refresh.emit();
  }
}
