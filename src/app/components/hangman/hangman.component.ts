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
      this.questions = res.items;
      this.category = res.category;
      this.question = this.getNewQuestion();
    });
  }

  getNewQuestion(): string {
    return this.questions[Math.floor(Math.random() * this.questions.length)];
  }

  guess(letter: string) {
    if (!letter || this.guesses.includes(letter)) {
      return;
    }
    this.guesses = [...this.guesses, letter];
  }

  reset(): void {
    this.guesses = [];
    this.getNewQuestion();
  }

  //TODO: remove it if keyboard
  dummyClick() {
    const key = prompt('Enter a key') || '';
    this.guess(key);
  }
}
