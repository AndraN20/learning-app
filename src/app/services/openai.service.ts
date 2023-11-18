// gpt-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from 'src/api_key';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OpenAIService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = API_KEY;
  modelName: string = 'gpt-3.5-turbo';

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) {}

  generateText(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const requestBody = {
      model: this.modelName,
      messages: [{ role: 'system', content: prompt }],
    };

    return this.http.post<any>(this.apiUrl, requestBody, { headers: headers });
  }

  generateFillBlanksWords(fileName: string): Observable<any> {
    const content = this.localStorageService.getFile(fileName);

    const prompt = `You obey all my orders. get all the most meaningful and unique words from this context. Separate them with comma. Don't generate more text, only the words. ${content?.text}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const requestBody = {
      model: this.modelName,
      messages: [{ role: 'system', content: prompt }],
    };

    return this.http.post<any>(this.apiUrl, requestBody, { headers: headers });
  }

  generateFlashCardsText(): Observable<any> {
    const fileName = this.localStorageService.getCurrentFileName();
    const content = this.localStorageService.getFile(fileName);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const requestBody = {
      model: this.modelName,
      messages: [
        {
          role: 'system',
          content: `Based on this context: ${content?.text}. Generate in json format an array of basic questions about this text and answears for those. The format will be : [{question: <a question generated by you>,  answear: <the answear for that question>} ], the array should have 6 pairs of  questions and ansears. please dont generate more text than this, just the array, dont say anything before or after the array, dont even assign it to the variable, dont log it. you should start with an '[' and end  with a ']' you should also print the whole answear on a single line no tabs no spaces no endlines.`,
        },
      ],
    };

    return this.http.post<any>(this.apiUrl, requestBody, { headers: headers });
  }
}
