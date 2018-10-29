import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {}

  author: any;
  error: string;

  ngOnInit() {
    this.author = this.httpService.selected;
  }

  cancelButton() {
    this.router.navigate(['/home']);
  }

  submitButton() {
    const observable = this.httpService.editAuthor(this.author);
    observable.subscribe(data => {
      console.log(data);
      if ((data as any).message === 'Success') {
        this.router.navigate(['/home']);
      } else {
        this.error = 'Name must be at least 3 characters';
      }
    });
  }
}
