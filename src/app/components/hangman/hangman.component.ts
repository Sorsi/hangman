import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent implements OnInit {
  question: string;
  questions: string[];
  guesses: string[];
  category: string;

  constructor(private hangmanService: HangmanService) {
    this.question = '';
    this.questions = [];
    this.guesses = [];
    this.category = '';
  }

  ngOnInit(): void {
    this.hangmanService.getQuestions().subscribe((res) => {
      console.log(res);

      this.questions = res.items;
      this.category = res.category;
      this.question = this.getNewQuestion();
      console.log('qqqq ', this.question);
    });
  }

  getNewQuestion(): string {
    return this.questions[Math.floor(Math.random() * this.questions.length)];
  }

  guess(letter: string) {
    if (this.guesses.includes(letter)) {
      return;
    }
    this.guesses.push(letter);
  }

  reset(): void {
    this.guesses = [];
    this.getNewQuestion();
  }
}
