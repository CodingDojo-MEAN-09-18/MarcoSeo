import { Component } from '@angular/core';

import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Welcome to MEAN';
  book = new Book();
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('submitting', this.book);
  }
}
