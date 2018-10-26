import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../services';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css'],
})
export class SanjoseComponent implements OnInit {
  constructor(private http: WeatherapiService) {}
  city: any;

  ngOnInit() {
    const observable = this.http.getCity('sanjose');
    observable.subscribe(data => {
      this.city = data as any;
      console.log(this.city);
    });
  }
}
