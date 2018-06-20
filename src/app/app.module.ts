import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CityComponent} from './city/city.component';
import {WeatherComponent} from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { NewCityComponent } from './new-city/new-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    WeatherComponent,
    NewCityComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
