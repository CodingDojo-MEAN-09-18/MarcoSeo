import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-author-home',
  templateUrl: './author-home.component.html',
  styleUrls: ['./author-home.component.css'],
})
export class AuthorHomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {}
  authors = [];
  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    const observable = this.httpService.getAuthors();
    observable.subscribe(data => {
      this.authors = (data as any).data;
    });
  }

  addAuthor() {
    this.router.navigateByUrl('/home/add');
  }

  editAuthor(author) {
    console.log(author);
    this.httpService.selected = author;
    this.router.navigateByUrl('/home/edit');
  }

  deleteAuthor(author) {
    const observable = this.httpService.deleteAuthor(author);
    observable.subscribe(data => {
      console.log(data);
      this.getAuthors();
    });
  }
}
