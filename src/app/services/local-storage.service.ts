import { Injectable } from '@angular/core';
import { TextFile } from '../types/text-file.type';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  createFile(file: TextFile): void {
    let fileNamesString: string | null = localStorage.getItem('FILE_NAMES');
    let fileNames: string[] = [];

    if (fileNamesString) {
      fileNames = JSON.parse(fileNamesString);
    }

    fileNames.push(file.name);
    localStorage.setItem('FILE_NAMES', JSON.stringify(fileNames)); // Fix here

    localStorage.setItem(file.name, file.text);
  }

  getFiles(): TextFile[] {
    let fileNames: string[] = JSON.parse(localStorage.getItem('FILE_NAMES')!);
    if (!fileNames) {
      fileNames = [];
    }
    const textFiles: TextFile[] = [];
    fileNames.forEach((name) => {
      const textFile: TextFile = {
        name: name,
        text: localStorage.getItem(name)!,
      };
      textFiles.push(textFile);
    });
    return textFiles;
  }

  getFile(name: string): TextFile | null {
    let fileNames: string[] = JSON.parse(localStorage.getItem('FILE_NAMES')!);
    if (!fileNames) {
      fileNames = [];
    }
    if (fileNames.find((fileName) => fileName == name)) {
      const textFile: TextFile = {
        name: name,
        text: localStorage.getItem(name)!,
      };
      return textFile;
    }
    return null;
  }

  editFile(file: TextFile): void {
    let fileNames: string[] = JSON.parse(localStorage.getItem('FILE_NAMES')!);
    if (!fileNames) {
      fileNames = [];
    }
    if (fileNames.find((fileName) => fileName == file.name)) {
      localStorage.setItem(file.name, file.text);
    }
  }

  deleteFile(name: string): void {
    let fileNames: string[] = JSON.parse(localStorage.getItem('FILE_NAMES')!);
    if (!fileNames) {
      fileNames = [];
    }
    if (fileNames.find((fileName) => fileName == name)) {
      localStorage.removeItem(name);
    }
  }
}
