import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../services/weatherapi.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css'],
})
export class WashingtonComponent implements OnInit {
  constructor(private http: WeatherapiService) {}
  city: any;

  ngOnInit() {
    const observable = this.http.getCity('washington');
    observable.subscribe(data => {
      this.city = data as any;
      console.log(this.city);
    });
  }
}
