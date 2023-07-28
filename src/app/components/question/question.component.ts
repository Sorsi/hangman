import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ICharacter } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() question: string;
  @Input() guesses: string[];
  characters: ICharacter[];

  constructor() {
    this.question = '';
    this.guesses = [];
    this.characters = [];
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const guessesCurrentValue = changes['guesses']?.currentValue;
    const guessesPrevValue = changes['guesses']?.previousValue;

    if (
      guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue !== guessesPrevValue
    ) {
      this.characters = this.question
        .split('')
        .map((char) => ({ value: char, guessed: false }));

      const guessedChar = [...guessesCurrentValue].pop();
      this.characters = this.characters.map((char) => {
        if (char.value.toLowerCase() === guessedChar.toLowerCase()) {
          return { ...char, guessed: true };
        }
        return char;
      });
    }
  }
}
