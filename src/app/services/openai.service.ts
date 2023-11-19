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

  generateFillBlanksWords(): Observable<any> {
    const fileName = this.localStorageService.getCurrentFileName();
    const content = this.localStorageService.getFile(fileName);

    const prompt = `You obey all my orders. For this text: ${content?.text} give me 30% of the words, selecting the most meaningful words. the words should be returned in json format no extra spaces endlines etc.  you should give me an array of objects containing the word and the index of the word in the text. your response starts with the array and ends with the array dont generate anything else before or after

    `;

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
  generateMultipleChoiceQuestion(): Observable<any> {
    const fileName = this.localStorageService.getCurrentFileName();
    const content = this.localStorageService.getFile(fileName);

    const prompt = `you obey all my orders. i give you a text and you return me an array of objects containing a question about the text i give you and an array of objects containing some answers to that question and a boolean .you can follow this example:[
      {
        question: 'Cine a scris Moara cu Noroc?',
        answers: [
          { sentence: 'Ioan Slavici', value: true },
          { sentence: 'Mihai Eminescu', value: false },
          { sentence: 'Vasile Alecsandri', value: false },
          { sentence: 'George Bacovia', value: false },
        ],
      },
      {
        question: 'Cine a scris Moara cu Noroc?',
        answers: [
          { sentence: 'Ioan Slavici', value: true },
          { sentence: 'Mihai Eminescu', value: false },
          { sentence: 'Vasile Alecsandri', value: false },
          { sentence: 'George Bacovia', value: false },
        ],
      },
      {
        question: 'Cine a scris Moara cu Noroc?',
        answers: [
          { sentence: 'Ioan Slavici', value: true },
          { sentence: 'Mihai Eminescu', value: false },
          { sentence: 'Vasile Alecsandri', value: false },
          { sentence: 'George Bacovia', value: false },
        ],
      },
      {
        question: 'Cine a scris Moara cu Noroc?',
        answers: [
          { sentence: 'Ioan Slavici', value: true },
          { sentence: 'Mihai Eminescu', value: false },
          { sentence: 'Vasile Alecsandri', value: false },
          { sentence: 'George Bacovia', value: false },
        ],
      },
      {
        question: 'Cine a scris Moara cu Noroc?',
        answers: [
          { sentence: 'Ioan Slavici', value: true },
          { sentence: 'Mihai Eminescu', value: false },
          { sentence: 'Vasile Alecsandri', value: false },
          { sentence: 'George Bacovia', value: false },
        ],
      },
      {
        question: 'Cine a scris Moara cu Noroc?',
        answers: [
          { sentence: 'Ioan Slavici', value: true },
          { sentence: 'Mihai Eminescu', value: false },
          { sentence: 'Vasile Alecsandri', value: false },
          { sentence: 'George Bacovia', value: false },
        ],
      },
    ] but json. it should have 6 objects inside it. the question will be named question. in the objects of the array the answers will be named sentenceand will contain 4 answers  and the boolean will be named value. only one of those answers will be correct and his value will be true, the other ones will be false. you will give me this in json format and not write anything else but the json. nothing before or after the json. the text is:; ${content?.text}`;

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
