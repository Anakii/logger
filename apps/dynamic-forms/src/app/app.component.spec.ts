import { FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent:AppComponent;
  beforeEach(async () => {
     appComponent = new AppComponent(new FormBuilder(),null);
  });

  it('should create the app', () => {
   
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'dynamic-forms'`, () => {
    expect(appComponent.title).toEqual('dynamic-forms');
  });

  it('should have empty form group', () => {
    const initialFormGroup = appComponent.group;
    expect(initialFormGroup).toBeTruthy();
  });


  it('should have an onSubmit function', () => {
    const submitFunction = appComponent.onSubmit;
    expect(submitFunction).toBeDefined();
  });
});
