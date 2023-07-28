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
  @Output() newItemEvent = new EventEmitter<number>();
  MAX_MISTAKES = 9;
  remainingMistakes: number;

  constructor() {
    this.remainingMistakes = this.MAX_MISTAKES;
  }

  ngOnInit(): void {
    console.log('q in drawing compo ==> ', this.question);
    console.log('your guesses  ==> ', this.guesses);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes --> ', changes);

    const currentValue = changes['guesses']?.currentValue;
    const prevValue = changes['guesses']?.previousValue;
    if (currentValue && currentValue.length && currentValue !== prevValue) {
      this.checkGuess(currentValue[currentValue.length - 1]);
    }
  }

  checkGuess(letter: string) {
    console.log('letter --> ', letter);
    if (this.question.toLowerCase().includes(letter)) {
      return;
    } else {
      if (this.remainingMistakes != 0) {
        this.remainingMistakes -= 1;
      }
    }
  }
}
