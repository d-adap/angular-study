import { HEROES } from './mock-heroes';
import { Hero } from './hero';

import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 20000);
        });
      }
      getHero(id: number): Promise<Hero> {
          console.log(id);
        return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
      }
}
