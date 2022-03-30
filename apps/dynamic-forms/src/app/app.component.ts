import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { signInForm } from './form.model';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'dynamic-forms-root',
  template: `
  <form [formGroup]="formGroup" class="dynamic-form" (ngSubmit)="handleSubmit()">
    
    <input formControlName="email" placeholder="Enter Email"/>
    
    <app-switch formControlName="isActive"></app-switch>
    
    <button type="submit">Submit</button>
  </form>


  `,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  signInForm = signInForm;
  title = 'dynamic-forms';

  group: FormGroup = this.fb.group({});
  
  formGroup!: FormGroup;


  constructor(private fb: FormBuilder,private postsService:PostsService) {}
  ngOnInit(): void {
    console.log(this.group);
    this.formGroup = this.fb.group({
      email: [],
      isActive: [true]
    });
  }

  makeError() {
    throw new Error('Method not implemented.');
  }

  makeHttpError(){
    this.postsService.getPosts().subscribe()

  }


  handleSubmit() {
    console.log(this.formGroup);
  }

  onSubmit(group: FormGroup) {
    console.log(group);

  }


}
