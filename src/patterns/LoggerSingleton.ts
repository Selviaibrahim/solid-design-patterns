
export class Logger {
  private static instance: Logger | null = null;

  private constructor() {} 

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    console.log(`[LOG] ${message}`);
  }
}
