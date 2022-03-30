import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerConfig, LOGGER_CONFIG } from './logger.interface';


@NgModule({
    imports: [],
    providers: [],
})
export class LoggerModule {

    static config(config: LoggerConfig): ModuleWithProviders<any> {
        return {
            ngModule: LoggerModule,
            providers: [{
                provide: LOGGER_CONFIG,
                useValue: config,
                multi: true
            }]

        }
    }
}
