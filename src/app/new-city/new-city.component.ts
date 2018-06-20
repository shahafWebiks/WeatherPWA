import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';
import {Weather} from '../weather';
import {IndexedDBService} from '../indexed-db.service';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.css']
})
export class NewCityComponent implements OnInit {

  weather: Weather;

  constructor(private weatherService: WeatherService,
              private indexedDBService: IndexedDBService) {
    this.weather = this.weatherService.weather;
  }

  ngOnInit() {
  }

  addNewCity() {
    // const t = ;
    // console.log(t);
    this.weatherService.makeDataCity(document.getElementsByTagName('input')[0].value, document.getElementsByTagName('input')[1].value);
    // this.indexedDBService.addNewCityDB(document.getElementsByTagName('input')[0].value, document.getElementsByTagName('input')[1].value);
  }
}
