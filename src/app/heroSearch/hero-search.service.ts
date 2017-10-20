import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Hero } from './../heroes/hero';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HeroSearchService {

    constructor(private http: Http) { }
    search(term: String): Observable<Hero[]> {
        const url = `api/heroes/?name=${term}`;
        return this.http.get(url).map(response => response.json() as Hero[]);
    }
}
