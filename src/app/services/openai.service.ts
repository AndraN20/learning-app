// gpt-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from 'src/api_key';

@Injectable({
    providedIn: 'root'
})
export class OpenAIService {
    private apiUrl = 'https://api.openai.com/v1/chat/completions';
    private apiKey = API_KEY;
    modelName: string = 'gpt-3.5-turbo';

    constructor(private http: HttpClient) { }

    generateText(prompt: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`
        });

        const requestBody = {
            model: this.modelName,
            messages: [
                { role: 'system', content: prompt }
            ]
        };

        return this.http.post<any>(this.apiUrl, requestBody, { headers: headers });
    }
}
