import { LoggerConfig, LogsTargetsEnum } from './logger.interface';
import { LoggerService } from './logger.service';
const UNIQE_PREFIX = "@@$@#$#%$^$^%&%&%"

const mockConfig: LoggerConfig[] = [{
    intervalInSec: 3,
    logPrefix: UNIQE_PREFIX,
    targets: ['console']
}]

describe('LoggerService', () => {
  let loggerService: LoggerService;
  beforeEach(async () => {
    loggerService = new LoggerService(mockConfig);
  });

  it('should create the app', () => {
    expect(LoggerService).toBeTruthy();
  });
  
  it(`logger config should have the UNIQE_PREFIX`, () => {
    expect(loggerService.config.logPrefix).toEqual(UNIQE_PREFIX);
  });

  it(`should have the 'console' in targets array`, () => {
     const haveConsoleTarget =  loggerService.isInTarget(LogsTargetsEnum.CONSOLE)
    expect(haveConsoleTarget).toEqual(true);
  });

  it(`should'n have the 'localstorage' in targets array`, () => {
     const haveLocalstorageTarget =  loggerService.isInTarget(LogsTargetsEnum.LOCAL_STORAGE)
    expect(haveLocalstorageTarget).toEqual(false);
  });

 
});
