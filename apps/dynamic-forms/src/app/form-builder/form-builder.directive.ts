import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlConfig, ControlsConfig } from '../form.model';

@Directive({
  selector: '[formBuilder]'
})
export class FormBuilderDirective {
  private _group!: FormGroup;

  @Input('formBuilder') set controlsConfig(controlsConfig: ControlsConfig[]) {
    // if(controlsConfig?.length)
    setTimeout(() => {
      
      this.buildForm(controlsConfig)
    }, 0);
  }
  
  @Input() set group(group: FormGroup) {
    console.log(group);
    
    this._group = group;

  }

   get group():FormGroup {
    return this._group
  }
  
  constructor(
    private vcr: ViewContainerRef,
    private fb: FormBuilder
  ) {
  }
  buildForm(controlsConfig: ControlsConfig[]) {

        console.log(this.group);
    
    controlsConfig.forEach(control => {
      const ctrl = this.fb.control(control.value,control.validators || []);
      this.group.addControl(control.name,ctrl);
      const component = this.vcr.createComponent(control.component);
      // component.instance.config.cssClass = control.cssClass || ''
      const config:ControlConfig = {
        type: control.config.type,
        label: control.config.label,
        cssClass: control.config.cssClass,
        placeholder: control.config.placeholder
      };
      (component.instance as any).config = config;
       const view =component.instance
       debugger
      
      // component.instance.config.label = control.label;
      // component.instance.config.placeholder = control.placeholder;
      // component.instance.config.t viewtype = control.type;
      
    })
    // this.group.updateValueAndValidity()

    console.log(controlsConfig);



  }

}
