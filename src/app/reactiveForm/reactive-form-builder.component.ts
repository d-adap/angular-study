import { RxheroService } from './hero-list/rxhero.service';
import { states, Address, Hero } from './data-model';
import { Component, Input, OnChanges  } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormBuilderComponent implements OnChanges {

  @Input() hero: Hero;

   heroForm: FormGroup;
   nameChangeLog: string[] = [];
   states = states;

   constructor(
     private fb: FormBuilder,
     private heroService: RxheroService) {

     this.createForm();
     this.logNameChange();
   }

   createForm() {
     this.heroForm = this.fb.group({
       name: '',
       secretLairs: this.fb.array([]),
       power: '',
       sidekick: ''
     });
   }

   ngOnChanges() {
     this.heroForm.reset({
       name: this.hero.name
     });
     this.setAddresses(this.hero.addresses);
   }

   get secretLairs(): FormArray {
     return this.heroForm.get('secretLairs') as FormArray;
   }

   setAddresses(addresses: Address[]) {
     const addressFGs = addresses.map(address => this.fb.group(address));
     const addressFormArray = this.fb.array(addressFGs);
     this.heroForm.setControl('secretLairs', addressFormArray);
   }

   addLair() {
     this.secretLairs.push(this.fb.group(new Address()));
   }

   onSubmit() {
     this.hero = this.prepareSaveHero();
     this.heroService.updateHero(this.hero).subscribe(/* error handling */);
     this.ngOnChanges();
   }

   prepareSaveHero(): Hero {
     const formModel = this.heroForm.value;

     // deep copy of form model lairs
     const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
       (address: Address) => Object.assign({}, address)
     );

     // return new `Hero` object containing a combination of original hero value(s)
     // and deep copies of changed form model values
     const saveHero: Hero = {
       id: this.hero.id,
       name: formModel.name as string,
       // addresses: formModel.secretLairs // <-- bad!
       addresses: secretLairsDeepCopy
     };
     return saveHero;
   }

   revert() { this.ngOnChanges(); }

   logNameChange() {
     const nameControl = this.heroForm.get('name');
     nameControl.valueChanges.forEach(
       (value: string) => this.nameChangeLog.push(value)
     );
   }
 }

