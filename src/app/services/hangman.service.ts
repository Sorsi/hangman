import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IQuestions } from '../interfaces/interfaces';

const defaultJSONPath = 'assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class HangmanService {
  constructor(private http: HttpClient) {}

  getQuestions(jsonPath: string = defaultJSONPath) {
    return this.http.get<IQuestions>(jsonPath);
  }
}
