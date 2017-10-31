import { states, Address } from './data-model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormBuilderComponent {

  heroForm: FormGroup;
  states = states;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }
}
