type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown;
}

class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private maxLogs = 100;

  private constructor() {
    this.loadLogsFromStorage();
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private loadLogsFromStorage(): void {
    try {
      const stored = localStorage.getItem('app_logs');
      if (stored) {
        this.logs = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading logs from storage:', error);
    }
  }

  private saveToStorage(): void {
    try {
      const logsToStore = this.logs.slice(-this.maxLogs);
      localStorage.setItem('app_logs', JSON.stringify(logsToStore));
    } catch (error) {
      console.error('Error saving logs to storage:', error);
    }
  }

  private log(level: LogLevel, message: string, data?: unknown): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
    };

    this.logs.push(entry);

    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    this.saveToStorage();

    if (process.env.NODE_ENV === 'development') {
      const logMethod = level === 'error' ? console.error : level === 'warn' ? console.warn : console.log;
      logMethod(`[${level.toUpperCase()}] ${message}`, data || '');
    }
  }

  info(message: string, data?: unknown): void {
    this.log('info', message, data);
  }

  warn(message: string, data?: unknown): void {
    this.log('warn', message, data);
  }

  error(message: string, data?: unknown): void {
    this.log('error', message, data);
  }

  debug(message: string, data?: unknown): void {
    this.log('debug', message, data);
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
    localStorage.removeItem('app_logs');
  }
}

export const logger = Logger.getInstance();
