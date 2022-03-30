import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { ControlsConfig, ControlTypes } from '../form.model';

import { FormBuilderComponent } from './form-builder.component';
const mockControlConfig:ControlsConfig[] = [
  {
    name: 'userName',
    // component: InputComponent,

    value: 'Mock User Name',
    config: {
      label: 'User Name',
      placeholder: 'Enter User Name',
      type: ControlTypes.text,
      cssClass: '',

    },
    validators: [Validators.required]
  }

]

describe('FormBuilderComponent', () => {
  let formBuilderComponent: FormBuilderComponent;
  


  beforeEach(() => {
     formBuilderComponent = new FormBuilderComponent(new FormBuilder());

  });

  it('should create', () => {
    expect(formBuilderComponent).toBeTruthy();
  });

  it('should have a buildForm function', () => {
    const buildFormFunc = formBuilderComponent.buildForm;
    expect(buildFormFunc).toBeDefined();
  });

  it('should have a onSubmitHandler function', () => {
    const onSubmitHandlerFunc = formBuilderComponent.onSubmitHandler;
    expect(onSubmitHandlerFunc).toBeDefined();
  });

  it('should have a control config with data', () => {
    formBuilderComponent.controlsConfig = mockControlConfig;
    
    expect(formBuilderComponent.controlsConfig).toEqual(mockControlConfig);
  });

  it('should call the buildForm function in ngOnInit', () => {
    formBuilderComponent.controlsConfig = mockControlConfig;
    const buildFormFunc = jest.spyOn(formBuilderComponent, 'buildForm');
    
    formBuilderComponent.ngOnInit();

    expect(buildFormFunc).toHaveBeenCalled();
  });

  it('should group have a userName control', () => {
    formBuilderComponent.controlsConfig = mockControlConfig;

    formBuilderComponent.ngOnInit();
    const userNameControl = formBuilderComponent.group.get('userName');

    expect(userNameControl).toBeDefined();
  });

  it('should  userName control have value of `Mock User Name` ', () => {
    const userNameValue = 'Mock User Name';
    formBuilderComponent.controlsConfig = mockControlConfig;

    formBuilderComponent.ngOnInit();
    const userNameControl = formBuilderComponent.group.get('userName');

    expect(userNameControl?.value).toContain(userNameValue);
  });


});
