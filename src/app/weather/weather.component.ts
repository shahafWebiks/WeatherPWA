import {Component, OnInit} from '@angular/core';
import {Weather} from '../weather';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather;

  constructor(private weatherService: WeatherService) {
    this.weather = this.weatherService.weather;
  }

  ngOnInit() {
  }


}
