import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawingComponent } from './components/drawing/drawing.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { QuestionComponent } from './components/question/question.component';
import { HangmanComponent } from './components/hangman/hangman.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawingComponent,
    KeyboardComponent,
    QuestionComponent,
    HangmanComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
