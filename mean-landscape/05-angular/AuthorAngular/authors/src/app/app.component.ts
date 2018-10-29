import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpservice: HttpService
  ) {}
  title = 'authors';
}
