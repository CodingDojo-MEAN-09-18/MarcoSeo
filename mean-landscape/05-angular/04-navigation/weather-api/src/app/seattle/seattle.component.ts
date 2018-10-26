import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../services';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css'],
})
export class SeattleComponent implements OnInit {
  constructor(private http: WeatherapiService) {}
  city: any;

  ngOnInit() {
    const observable = this.http.getCity('seattle');
    observable.subscribe(data => {
      this.city = data as any;
      console.log(this.city);
    });
  }
}
