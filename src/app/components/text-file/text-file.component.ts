import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/constants/paths';

@Component({
  selector: 'app-text-file',
  templateUrl: './text-file.component.html',
  styleUrls: ['./text-file.component.css']
})
export class TextFileComponent {
  constructor(private readonly router: Router) {

  }

  redirectToChooseMethod(): void {
    this.router.navigate([PATHS.CHOOSEMETHOD]);
  }
}
