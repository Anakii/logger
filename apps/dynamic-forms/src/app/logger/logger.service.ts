import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, filter, interval, Subscription } from 'rxjs';
import { exhaustMap } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Log, LoggerConfig, LOGGER_CONFIG, LogsTargetsEnum } from './logger.interface';
const DEFAULT_INTERVAL = 5000;


@Injectable({
  providedIn: 'root'
})
export class LoggerService implements OnDestroy {

  logsStorageKey = 'APP_LOGGES'
  loggerInterval: Observable<any>;
  config: LoggerConfig;
  logIngerval: Observable<any>;
  logIntervalSub: Subscription;
  logsQueueSubject: BehaviorSubject<Log[]> = new BehaviorSubject<Log[]>([]);


  constructor(@Inject(LOGGER_CONFIG) private loggerConfig: LoggerConfig[]) {
    console.log("instance");

    if (!environment.production) {
      this.config = this.loggerConfig[0];
      this.initInterval()
    }

  }

  initInterval(): void {
    const logTimePeriod: number = this.config.intervalInSec * 1000 || DEFAULT_INTERVAL;




    this.logIntervalSub = interval(logTimePeriod).subscribe(t => {
      // console.log(this.logsQueueSubject.value);
      const isLogsInQueue = this.logsQueueSubject.value?.length;

      if (isLogsInQueue) {
        this.logToTargets(this.logsQueueSubject.value)
        this.flushLogs();
      }

    })

  }
  logToTargets(logs: Log[]): void {

    if (this.isInTarget(LogsTargetsEnum.CONSOLE)) {
      this.log(logs)
    }

    if (this.isInTarget(LogsTargetsEnum.LOCAL_STORAGE)) {
      this.saveToStorageHandler(logs)
    }

  }

  addLogToQueue(err: Error, massage: string) {
    const appLog: Log = this.makeLogByConfig(err, massage);

    const logQueue = [...this.logsQueueSubject.value];
    logQueue.push(appLog)
    this.logsQueueSubject.next(logQueue)
  }

  flushLogs(): void {
    this.logsQueueSubject.next([])
  }

  makeLogByConfig(err: Error, massage: string): Log {
    return {
      masssage: `${this.config.logPrefix}${massage}`,
      timeStamp: new Date().getTime(),
      stackTrace: err.stack
    }
  }


  log(logs: Log[]): void {
    console.log(logs);
  }

  saveToStorage(logs: Log[]): void {
    localStorage.setItem(this.logsStorageKey, JSON.stringify(logs));
  }

  saveToStorageHandler(logs: Log[]): void {
    if (!logs.length) {
      return;
    }
    const storageLogs = localStorage.getItem(this.logsStorageKey);
    if (storageLogs) {
      const savedLogs: Log[] = JSON.parse(storageLogs);
      this.saveToStorage([...logs, ...savedLogs])
    } else {
      this.saveToStorage(logs)
    }
  }

  isInTarget(target: LogsTargetsEnum): boolean {
    return this.config.targets.includes(target)
  }



  ngOnDestroy(): void {
    this.logIntervalSub?.unsubscribe();
  }


}
