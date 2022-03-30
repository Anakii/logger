import { Component, OnInit, Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  template: `
  <mat-slide-toggle 
    [disabled]="disabled" (change)="onToggle()" [checked]="toggle" >{{ toggle ? 'Active' : 'InActive' }} 
  </mat-slide-toggle>

  `,
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: SwitchComponent,
  //     multi: true
  //   }
  // ]
})
export class SwitchComponent implements ControlValueAccessor {
  toggle: boolean = false;
  disabled: boolean = false;
  onChange!: (val: boolean) => {};
  onTouched!: () => {};
  control!: AbstractControl | null;

  constructor(@Optional()@Self() private ngControl: NgControl) {

    if(this.ngControl) {
      this.ngControl.valueAccessor = this; // assign our class under the ngControl valueAccessor property
      setTimeout(() =>{
        this.control = this.ngControl.control; // get a reference to our control
        console.log(this.control);
      })
      
    }
   }


  writeValue(val: boolean): void {
    this.toggle = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onToggle() {
    // this.control
    console.log(this.control);
    
    this.toggle = !this.toggle;
    this.onChange(this.toggle);
    this.onTouched();
  }

}
