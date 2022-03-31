import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './controls/input/input.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormBuilderDirective } from './form-builder/form-builder.directive';
import { MultiSwitchCasePipe } from './pipes/multiSwitchCase.pipe';
import { SelectComponent } from './controls/select/select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SwitchComponent } from './slider/slider.component';
import { LoggerModule, LoggerConfig, CustomErrorHandler, ErrorInterceptor, LoggerService } from '@dynamic-forms/logger';

const loggerConfig: LoggerConfig = {
  intervalInSec: 3,
  logPrefix: '*******',
  targets: ['console', 'localstorage']
}

const COMPONENTS = [
  AppComponent,
  InputComponent, FormBuilderComponent,
  FormBuilderDirective, MultiSwitchCasePipe,
  SelectComponent, SwitchComponent]


const MODULES = [
  BrowserModule, HttpClientModule, ReactiveFormsModule,
  BrowserAnimationsModule, MatSlideToggleModule,
  LoggerModule.config(loggerConfig)
]


const PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: ErrorHandler, useClass: CustomErrorHandler },
  LoggerService
]
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule { }
