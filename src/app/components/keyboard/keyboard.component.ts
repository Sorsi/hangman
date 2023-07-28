import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/interfaces';
import { ALPHABET } from 'src/assets/alphatbet';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  @Input() question: string;
  @Output() keyPressed = new EventEmitter<string>();

  keys: ICharacter[];

  constructor() {
    this.question = '';
    this.keys = [];
  }

  ngOnInit(): void {
    this.keys = ALPHABET.map((key) => {
      return {
        value: key,
        guessed: false,
      };
    });
  }

  onKeyClick(key: ICharacter): void {
    if (key.guessed) {
      return;
    }
    key.guessed = true;
    this.keyPressed.emit(key.value);
  }
}
