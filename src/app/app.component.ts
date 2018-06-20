import {Component, OnInit} from '@angular/core';
import {IndexedDBService} from './indexed-db.service';
import {CityComponent} from './city/city.component';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
