import { logger } from './logger';

interface CookieOptions {
  days?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

class CookieManager {
  private static instance: CookieManager;

  private constructor() {}

  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  set(name: string, value: string, options: CookieOptions = {}): void {
    try {
      const {
        days = 7,
        path = '/',
        domain,
        secure = true,
        sameSite = 'Lax',
      } = options;

      let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        cookieString += `; expires=${date.toUTCString()}`;
      }

      cookieString += `; path=${path}`;

      if (domain) {
        cookieString += `; domain=${domain}`;
      }

      if (secure) {
        cookieString += '; secure';
      }

      cookieString += `; SameSite=${sameSite}`;

      document.cookie = cookieString;
      logger.debug('Cookie set', { name });
    } catch (error) {
      logger.error('Error setting cookie', { name, error });
    }
  }

  get(name: string): string | null {
    try {
      const nameEQ = encodeURIComponent(name) + '=';
      const cookies = document.cookie.split(';');

      for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
          const value = cookie.substring(nameEQ.length);
          return decodeURIComponent(value);
        }
      }

      return null;
    } catch (error) {
      logger.error('Error getting cookie', { name, error });
      return null;
    }
  }

  delete(name: string, options: Omit<CookieOptions, 'days'> = {}): void {
    this.set(name, '', { ...options, days: -1 });
    logger.debug('Cookie deleted', { name });
  }

  has(name: string): boolean {
    return this.get(name) !== null;
  }

  getAll(): Record<string, string> {
    try {
      const cookies: Record<string, string> = {};
      const cookieArray = document.cookie.split(';');

      for (let cookie of cookieArray) {
        cookie = cookie.trim();
        const [name, value] = cookie.split('=');
        if (name && value) {
          cookies[decodeURIComponent(name)] = decodeURIComponent(value);
        }
      }

      return cookies;
    } catch (error) {
      logger.error('Error getting all cookies', { error });
      return {};
    }
  }
}

export const cookies = CookieManager.getInstance();
