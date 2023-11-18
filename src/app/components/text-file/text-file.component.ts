import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/constants/paths';
import { TextFile } from 'src/app/types/text-file.type';

@Component({
  selector: 'app-text-file',
  templateUrl: './text-file.component.html',
  styleUrls: ['./text-file.component.css'],
})
export class TextFileComponent {
  @Input() file!: TextFile;

  constructor(private readonly router: Router) {}

  redirectToChooseMethod(): void {
    this.router.navigate([PATHS.CHOOSEMETHOD]);
  }
}
