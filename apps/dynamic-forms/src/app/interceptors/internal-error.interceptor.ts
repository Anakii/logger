import { ErrorHandler, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { LoggerService } from "../logger/logger.service";


@Injectable()
export class CustomErrorHandler implements ErrorHandler {

    constructor( private loggerService: LoggerService) { }

    public handleError(error) {

        if (!environment.production) {
            this.loggerService.addLogToQueue(error,error.message)
        }
        

    }

}

