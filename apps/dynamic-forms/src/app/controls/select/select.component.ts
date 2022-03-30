import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlConfig, KeyValue } from '../../form.model';

@Component({
  selector: 'dynamic-forms-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true

    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  value = '';
  @Input() config!: ControlConfig;

  @Input() options: KeyValue[] | null | undefined = []
  constructor() { }
  onChange = (val: any) => { };
  onTouched = (val: any) => { };
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;

  }

  onSelect(value: any) {

    if (value == -1) {
      this.onChange(null);
      this.onTouched(null);
      return

    }
    this.value = value;
    console.log(value);

    this.onChange(value);
    this.onTouched(value)
  }

  ngOnInit(): void {
  }

}
