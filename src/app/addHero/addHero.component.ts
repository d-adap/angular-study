import { Hero } from './../heroes/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-add',
  templateUrl: './addHero.component.html',
  styleUrls: ['./addHero.component.css']
})
export class AddHeroComponent {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  submitted = false;
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }
  newHero() { this.model = new Hero(42, '', ''); }
}
