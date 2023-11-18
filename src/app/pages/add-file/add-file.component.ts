import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TextFile } from 'src/app/types/text-file.type';
import { PATHS } from 'src/app/constants/paths';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css'],
})
export class AddFileComponent {
  paths = PATHS;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  addTextForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    text: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  addNewFile(event: Event) {
    event.preventDefault();

    const file: TextFile = {
      name: this.addTextForm.get('name')!.value!,
      text: this.addTextForm.get('text')!.value!,
    };
    if (this.addTextForm.valid) {
      this.localStorageService.createFile(file);
      this.addTextForm.reset();
    }
    this.router.navigate([this.paths.HOMEPAGE]);
  }
}
