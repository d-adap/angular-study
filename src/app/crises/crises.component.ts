import { Component, OnInit } from '@angular/core';
import { Crises, CRISES } from './crises';

@Component({
  selector: 'app-crises',
  templateUrl: './crises.component.html',
  styleUrls: ['./crises.component.css']
})
export class CrisesComponent implements OnInit {

  currentCrises = CRISES;
  selectedCrises: Crises;
  constructor() { }

  ngOnInit() {
  }

}
