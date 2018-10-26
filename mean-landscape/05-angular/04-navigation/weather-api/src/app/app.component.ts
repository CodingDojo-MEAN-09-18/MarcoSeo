import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from './services/weatherapi.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private httpService: WeatherapiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => console.log(params['id']));
  }
  goHome() {
    this.router.navigate(['/home']);
  }
}
