import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb() {
  const heroes = [
    { id: 12, name: ' Mr. Incredible' },
    { id: 13, name: ' Batman' },
    { id: 14, name: ' V' },
    { id: 15, name: ' Aquaman' },
    { id: 16, name: ' Iron Man' },
    { id: 17, name: ' Ms. Marvel' },
    { id: 18, name: ' DareDevil' },
    { id: 19, name: ' Hawkeye' },
    { id: 20, name: ' Perry the Platypus'}
  ];
  return {heroes}; 
}
genId(heroes: Hero[]): number {
  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
}
  constructor() { }
}
