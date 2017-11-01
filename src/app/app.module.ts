import { QuestionControlService } from './dynamicForms/question-control.service';
import { QuestionService } from './dynamicForms/question.service';
import { DynamicFormMainComponent } from './dynamicForms/dynamic-form-main.component';
import { HeroListComponent } from './reactiveForm/hero-list/hero-list.component';
import { ReactiveFormBuilderComponent } from './reactiveForm/reactive-form-builder.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './heroes/hero.service';
import { RxheroService } from './reactiveForm/hero-list/rxhero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroDetails/hero-detail.component';
import { HeroSearchComponent } from './heroSearch/hero-search.component';
import { AddHeroComponent } from './addHero/addHero.component';
import { ReactiveFormComponent } from './reactiveForm/reactive-form.component';
import { DynamicFormsComponent } from './dynamicForms/dynamic-forms.component';
import { DynamicFormQuestionComponent } from './dynamicForms/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    AddHeroComponent,
    ReactiveFormComponent,
    ReactiveFormBuilderComponent,
    HeroListComponent,
    DynamicFormsComponent,
    DynamicFormQuestionComponent,
    DynamicFormMainComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [HeroService, RxheroService, QuestionService, QuestionControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }

