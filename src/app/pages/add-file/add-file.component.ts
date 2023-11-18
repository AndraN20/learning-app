import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TextFile } from 'src/app/types/text-file.type';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css'],
})
export class AddFileComponent {
  constructor(private localStorageService: LocalStorageService) {}

  addTextForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    text: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  addNewFile() {
    if (this.addTextForm.valid) {
      const file: TextFile = {
        name: this.addTextForm.get('name')!.value!,
        text: this.addTextForm.get('text')!.value!,
      };
      console.log(file);

      this.localStorageService.createFile(file);
    }
  }
}
