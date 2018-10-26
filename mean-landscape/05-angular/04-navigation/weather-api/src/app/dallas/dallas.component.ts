import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../services';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css'],
})
export class DallasComponent implements OnInit {
  constructor(private http: WeatherapiService) {}
  city: any;

  ngOnInit() {
    const observable = this.http.getCity('dallas');
    observable.subscribe(data => {
      this.city = data as any;
      console.log(this.city);
    });
  }
}
