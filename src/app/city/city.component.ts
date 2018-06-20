import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';

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
    const me = this;
    this.weatherService.getCityByName(value)
      .then(function (myCity) {
        const api = me.weatherService.requestApi(myCity.name, myCity.country);
        me.checkOnCache(me, api);
      });
  }

  checkOnCache(me, api) {
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
              me.weatherService.weather.weatherById(response);
            });
            flag = false;
          }
        });
        if (flag) {
          me.checkOnNet(api, me);
        }
      } else {
        me.checkOnNet(api, me);
      }
    });
  }

  checkOnNet(api, me) {
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
        me.weatherService.weather.weatherById(json);
      });
    });
  }

  changeAddCity() {
    this.weatherService.weather.addCity = true;
  }
}
