import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlConfig } from '../../form.model';

@Component({
  selector: 'dynamic-forms-input',
  template: `
  <div>
<div>{{config.label}}</div>
    <input [type]="config.type"  [value]="value" autocomplete="false" (keydown)="onKeyDown($event)" [placeholder]="config.placeholder"  />
  </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true

    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {


  @Input() config!: ControlConfig;
  value = ''
  onChange = (val: any) => { };
  onTouched = (val: any) => { };


  constructor() { }

  writeValue(val: any): void {
    this.value = val
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  onKeyDown(event: Event) {
    const target = (event.target as HTMLInputElement)
    console.log(target.value);
    this.value = target.value;
    this.onChange(target.value)
  }

  ngOnInit(): void {
  }

}
