import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
@Injectable()
export class WeatherapiService {
  cities = {
    sanjose: 5392171,
    seattle: 5809844,
    burbank: 5331836,
    dallas: 4190598,
    washington: 4229546,
    chicago: 4887398,
  };

  constructor(private http: HttpClient) {}

  getCity(city) {
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?id=' +
        this.cities[city] +
        '&APPID=44437b14b33f6e3c62e4dbc7e06b2621'
    );
  }
}
