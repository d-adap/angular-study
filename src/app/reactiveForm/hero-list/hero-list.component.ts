import { Hero } from './../data-model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';


import { RxheroService } from './rxhero.service';

@Component({
  selector: 'reactive-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor(private heroService: RxheroService) { }

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes()
                      // Todo: error handling
                      .finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  select(hero: Hero) { this.selectedHero = hero; }
}
