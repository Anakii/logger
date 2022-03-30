import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlsConfig, ControlTypes, textControls } from '../form.model';

@Component({
  selector: 'dynamic-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  textControls = textControls;
  controlsTypes = ControlTypes;
  @Input() group: FormGroup = this.fb.group({});
  @Input() controlsConfig: ControlsConfig[] = [];
  @Output() onSubmit = new EventEmitter();


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.buildForm();

    console.log(this.group);
  }
  buildForm() {
    this.controlsConfig.forEach(control => {
      const ctrl = this.fb.control(control.value, control.validators || [],control.asyncValidators || []);
      this.group.addControl(control.name, ctrl);
    })
  }

  onSubmitHandler(){
    this.onSubmit.emit(this.group);
  }

}
