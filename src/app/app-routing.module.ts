import { ContactComponent } from './contact/contact.component';
import { DynamicFormMainComponent } from './dynamicForms/dynamic-form-main.component';
import { HeroListComponent } from './reactiveForm/hero-list/hero-list.component';
import { ReactiveFormBuilderComponent } from './reactiveForm/reactive-form-builder.component';
import { ReactiveFormComponent } from './reactiveForm/reactive-form.component';
import { AddHeroComponent } from './addHero/addHero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroDetails/hero-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'hr',     component: AddHeroComponent },
  { path: 'reactiveForms',     component: HeroListComponent },
  { path: 'dynamicForms',     component: DynamicFormMainComponent },
  { path: 'contact', component: ContactComponent, outlet: 'popup'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
