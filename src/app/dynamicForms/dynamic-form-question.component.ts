import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
