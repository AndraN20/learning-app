import { Injectable } from '@angular/core';
import { TextFile } from '../types/text-file.type';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveCurrentFileName(fileName: string): void {
    localStorage.setItem('CURRENT_FILE', fileName);
  }

  getCurrentFileName(): string {
    return localStorage.getItem('CURRENT_FILE')!;
  }

  createFile(file: TextFile): void {
    let fileNamesString: string | null = localStorage.getItem('FILE_NAMES');
    let fileNames: string[] = [];

    if (fileNamesString) {
      fileNames = JSON.parse(fileNamesString);
    }

    fileNames.push(file.name);
    localStorage.setItem('FILE_NAMES', JSON.stringify(fileNames));

    localStorage.setItem(file.name, JSON.stringify(file));
  }

  getFiles(filter: boolean): TextFile[] {
    let fileNames: string[] = JSON.parse(localStorage.getItem('FILE_NAMES')!);
    if (!fileNames) {
      fileNames = [];
    }
    const textFiles: TextFile[] = [];
    fileNames.forEach((name) => {
      const textFile: TextFile = JSON.parse(localStorage.getItem(name)!);
      if (!filter) {
        textFiles.push(textFile);
      } else {
        if (textFile.accuracy) {
          textFiles.push(textFile);
        }
      }
    });
    return textFiles;
  }

  getFile(name: string): TextFile | null {
    let fileNames: string[] = JSON.parse(localStorage.getItem('FILE_NAMES')!);
    if (!fileNames) {
      fileNames = [];
    }
    if (fileNames.find((fileName) => fileName == name)) {
      const textFile: TextFile = JSON.parse(localStorage.getItem(name)!);
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
      localStorage.setItem(file.name, JSON.stringify(file));
    }
  }

  deleteFile(name: string): void {
    console.log(name);
    let fileNames: string[] = JSON.parse(localStorage.getItem('FILE_NAMES')!);
    if (!fileNames) {
      fileNames = [];
    }
    fileNames = fileNames.filter((fileName) => fileName !== name);
    localStorage.removeItem(name);
    localStorage.setItem('FILE_NAMES', JSON.stringify(fileNames));
  }
}
