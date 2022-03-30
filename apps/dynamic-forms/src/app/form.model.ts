import { Component, Type } from "@angular/core";
import { AsyncValidatorFn, ValidatorFn, Validators } from "@angular/forms";
import { InputComponent } from "./controls/input/input.component";
import { SelectComponent } from "./controls/select/select.component";




export interface ComponentConfig {
  label: string,
  placeholder: string,
  type: ControlTypes,
  cssClass: string,
  options?: KeyValue[] | null | undefined;
}

export interface ControlConfig {
  type: string,
  placeholder?: string;
  label?: string;
  cssClass?: string;
}

// export type ComponentType = "password" | 'text'
export interface ControlsConfig {
  name: string;
  config: ComponentConfig
  component?: any;
  value: any;

  validators?: ValidatorFn | ValidatorFn[];
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[]
}

export interface KeyValue {
  label: string;
  value: any;
}

export enum ControlTypes {
  text = 'text',
  password = 'password',
  email = 'email',
  number = 'number',
  search = 'search',
  tel = 'tel',
  url = 'url',
  select = 'select'
}


export const textControls = [
  ControlTypes.text,
  ControlTypes.password,
  ControlTypes.email,
  ControlTypes.number,
  ControlTypes.search,
  ControlTypes.tel,
  ControlTypes.url
]

export const signInForm: ControlsConfig[] = [
  {
    name: 'userName',
    component: InputComponent,

    value: '',
    config: {
      label: 'User Name',
      placeholder: 'Enter User Name',
      type: ControlTypes.text,
      cssClass: '',

    },
    validators: [Validators.required]
  },
  {
    name: 'password',
    value: '',
    component: InputComponent,
    config: {
      type: ControlTypes.password,
      placeholder: 'Enter Password',
      label: 'Password',
      cssClass: '',

    },
    validators: [Validators.required]

    // options?: null,
    // validators: null

  },
  {
    name: 'favoriteFood',
    value: '',
    component: SelectComponent,

    config: {
      type: ControlTypes.select,

      placeholder: 'Select Favorite Food',
      label: 'Favorite Food',
      cssClass: '',
      options: [
        { label: 'Sushi', value: 1 },
        { label: 'Chicken', value: 2 },
      ]

    },
    validators: [Validators.required]

    // options?: null,
    // validators: null

  }

]