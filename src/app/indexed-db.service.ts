import {Injectable} from '@angular/core';
import {IndexedDBAngular} from 'indexeddb-angular';
import {CITIES} from './mock';
import {City} from './city';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  private db = new IndexedDBAngular('myDb', 1);

  constructor() {
    this.db.createStore(1, this.createCollections);
  }

  createCollections(db) {
    const citiesOS = db.currentTarget.result.createObjectStore('CitiesMock', {keyPath: 'name'});
    // citiesOS.createIndex('name', 'name', {unique: true});
    CITIES.forEach(function (city) {
      citiesOS.add(city);
    });
  }

  getByName(indexName): Promise<City> {
    return this.db.getByIndex('CitiesMock', 'name', indexName);
  }
}
