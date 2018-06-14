import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {City} from './city';
import {CITIES} from './mock';
import {Weather} from './weather';

const KEY = 'e76868e4617fa9179c42aa2672b286b5';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  // id: number;
  weather = new Weather();

  getCityByName(name): Observable<any> {
    const cityFind = CITIES.find(city => city.name === name);
    return of(cityFind);
  }

  // getCity(id: number): Observable<City> {
  //   const cityFind = CITIES.find(city => city.id === id);
  //   this.id = id;
  //   return of(cityFind);
  // }

  // requestWeatherApi(name: string, country: string): Observable<any> {
  //   console.log(`fetched city city=${name} weather`);
  //   return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${name},${country}&units=metric&appid=${KEY}`).pipe(
  //     tap(_ => console.log(`fetched city city=${name}`)),
  //     catchError(this.handleError<City>(`getCity city=${name}`))
  //   );
  // }

  requestApi(name: string, country: string): string {
    console.log(`fetched city city=${name} weather`);
    return (`http://api.openweathermap.org/data/2.5/weather?q=${name},${country}&units=metric&appid=${KEY}`).replace(' ', '%20');
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error); // log to console instead
  //     console.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
}
