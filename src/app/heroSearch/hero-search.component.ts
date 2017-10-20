import { Router } from '@angular/router';
import { HeroSearchService } from './hero-search.service';
import { Hero } from './../heroes/hero';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<String>();
  constructor(private heroSearchService: HeroSearchService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.searchTerms.debounceTime(300)
    .distinctUntilChanged()
    .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
    .catch(error => {
      console.log(error);
      return Observable.of<Hero[]>([]);
    });
  }

  search(term: String): void {
    this.searchTerms.next(term);
  }
  gotoDetails(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
