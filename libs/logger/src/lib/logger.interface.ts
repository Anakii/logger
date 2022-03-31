import { InjectionToken } from "@angular/core";

export enum LogsTargetsEnum {
    CONSOLE = 'console',
    LOCAL_STORAGE = 'localstorage'
}

export type LogTargets = 'console' | 'localstorage';
export interface LoggerConfig {
    logPrefix: string;
    targets: LogTargets[],
    intervalInSec: number
}

export interface Log {
    masssage: string;
    timeStamp: number;
    stackTrace: string;
}

export const LOGGER_CONFIG = new InjectionToken<LoggerConfig>('Logger Config');



