import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../services/weatherapi.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
})
export class ChicagoComponent implements OnInit {
  constructor(private http: WeatherapiService) {}
  city: any;

  ngOnInit() {
    const observable = this.http.getCity('chicago');
    observable.subscribe(data => {
      this.city = data as any;
      console.log(this.city);
    });
  }
}
