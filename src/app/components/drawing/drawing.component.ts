import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss'],
})
export class DrawingComponent implements OnInit, OnChanges {
  @Input() guesses: string[] = [];
  @Input() question: string = '';

  MAX_MISTAKES = 9;
  remainingMistakes: number;

  constructor() {
    this.remainingMistakes = this.MAX_MISTAKES;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes['guesses']?.currentValue;
    const prevValue = changes['guesses']?.previousValue;

    if (currentValue && currentValue.length && currentValue !== prevValue) {
      const char = [...currentValue].pop();
      this.checkGuess(char);
    }
  }

  checkGuess(letter: string) {
    if (this.question.toLowerCase().includes(letter)) {
      return;
    } else {
      if (this.remainingMistakes != 0) {
        this.remainingMistakes -= 1;
      }
    }
  }
}
