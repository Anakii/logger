// import { Inject, Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import { LoggerConfig, LOGGER_CONFIG } from '../logger/logger.interface';
// import { environment } from '../../environments/environment';
// import { LoggerService } from '../logger/logger.service';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {

//   constructor(private loggerService: LoggerService) { }


//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(req).pipe(tap(null, async (error: HttpErrorResponse) => {
//       console.log(error);

//       if (!environment.production) {
//         this.loggerService.addLogToQueue(error,error.message)
//       }


//     }))
//   }

// }
