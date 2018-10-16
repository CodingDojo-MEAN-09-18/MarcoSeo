import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Animal } from './models/animals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'restful';
  constructor(private _httpService: HttpService) {}
}
