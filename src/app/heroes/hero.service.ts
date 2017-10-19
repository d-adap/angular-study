import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(private http: Http) { }
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl).toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
        // return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 20000);
        });
   }
  getHero(id: number): Promise<Hero> {
      console.log(id);
      const url = '${this.heroesUrl}/${id}';
      return this.http.get(url).toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
