import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css'],
})
export class AuthorNewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {}

  name: string;
  error: string;

  ngOnInit() {}

  cancelButton() {
    this.router.navigateByUrl('/home');
  }

  submitButton() {
    const observable = this.httpService.newAuthor(this.name);
    observable.subscribe(data => {
      if ((data as any).message === 'Success') {
        this.router.navigateByUrl('/home');
      } else {
        this.error = 'Name must be at least 3 characters';
      }
    });
    console.log(this.name);
  }
}
