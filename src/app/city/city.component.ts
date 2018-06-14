import {Component, OnInit} from '@angular/core';
import {City} from '../city';
import {WeatherService} from '../weather.service';
import {promise} from 'selenium-webdriver';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {


  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {

  }

  setName(value) {
    let city = new City();
    const weatherSTemp = this.weatherService.weather;

    this.weatherService.getCityByName(value)
      .subscribe(myCity => {
        city = myCity;
      });

    const api = this.weatherService.requestApi(city.name, city.country);

    this.checkOnCache(api, weatherSTemp);
  }

  checkOnCache(api, weatherSTemp) {
    const me = this;
    let flag = true;
    console.log('check On Cache');

    caches.open('weather-api').then(function (cache) {
      return cache;
    }).then(function (cache) {
      return cache.matchAll();
    }).then(function (urlsApi) {
      if (urlsApi.length > 0) {
        urlsApi.forEach(function (urlApi) {
          if (api === urlApi.url) {
            urlApi.json().then(function (response) {
              weatherSTemp.weatherById(response);
            });
            flag = false;
          }
        });
        if (flag) {
          me.checkOnNet(api, weatherSTemp);
        }
      } else {
        me.checkOnNet(api, weatherSTemp);
      }
    });
  }

  checkOnNet(api, weatherSTemp) {
    console.log('check On Net');
    caches.open('weather-api').then(function (cache) {
      fetch(`${api}`).then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const resData = response.clone();
        cache.put(`${api}`, response);
        return resData.json();
      }).then(function (json) {
        weatherSTemp.weatherById(json);
      });
    });
  }
}
