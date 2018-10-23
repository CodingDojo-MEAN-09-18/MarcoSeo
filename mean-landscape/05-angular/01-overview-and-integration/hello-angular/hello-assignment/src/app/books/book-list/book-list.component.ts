import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services';
import { Book } from '../../models/book';
import { BOOKS } from '../../data/book-data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  book = new Book();
  books: Book[] = BOOKS;
  selectedBook: Book;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  onSelect(book: Book) {
    console.log('selecting', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }
  onCreate(book: Book) {
    console.log('creating books', book);
    this.bookService.createBook(book).subscribe(createdBook => {
      // this.books.push(createdBook);
      this.books = [...this.books, createdBook];
    });
  }

  onRemove(book: Book) {
    console.log('removing book');
    this.bookService.removeBook(book.id).subscribe(removedBook => {
      this.books = this.books.filter(b => b.id !== removedBook.id);
    });
  }

  onEvent(event: Event) {
    event.stopPropagation();
    console.log('eventing');
  }
}
