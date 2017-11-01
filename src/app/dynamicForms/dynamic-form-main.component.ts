import { Component } from '@angular/core';

import { QuestionService } from './question.service';

@Component({
 selector: 'df-app',
 template: `
   <div>
     <h2>Job Application for Heroes</h2>
     <df-form [questions]="questions"></df-form>
   </div>
 `,
 providers:  [QuestionService]
})
export class DynamicFormMainComponent {

    questions: any[];

     constructor(service: QuestionService) {
       this.questions = service.getQuestions();
     }

}
