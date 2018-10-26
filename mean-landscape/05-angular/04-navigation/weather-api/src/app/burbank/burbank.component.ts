import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css'],
})
export class BurbankComponent implements OnInit {
  constructor(private http: WeatherapiService) {}
  city: any;

  ngOnInit() {
    const observable = this.http.getCity('burbank');
    observable.subscribe(data => {
      this.city = data as any;
      console.log(this.city);
    });
  }
}
