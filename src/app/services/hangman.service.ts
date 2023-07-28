import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const defaultJSONPath = 'assets/data.json';
export interface IQuestions {
  category: string;
  items: string[];
}

@Injectable({
  providedIn: 'root',
})
export class HangmanService {
  constructor(private http: HttpClient) {}

  getQuestions(jsonPath: string = defaultJSONPath) {
    return this.http.get<IQuestions>(jsonPath);
  }
}
