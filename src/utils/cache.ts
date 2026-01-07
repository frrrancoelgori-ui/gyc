import { logger } from './logger';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

class CacheManager {
  private static instance: CacheManager;
  private readonly prefix = 'cache_';

  private constructor() {}

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  set<T>(key: string, data: T, ttlMs = 3600000): void {
    try {
      const entry: CacheEntry<T> = {
        data,
        timestamp: Date.now(),
        expiresAt: Date.now() + ttlMs,
      };
      localStorage.setItem(this.prefix + key, JSON.stringify(entry));
      logger.debug('Cache set', { key, ttlMs });
    } catch (error) {
      logger.error('Error setting cache', { key, error });
    }
  }

  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(this.prefix + key);
      if (!item) {
        return null;
      }

      const entry: CacheEntry<T> = JSON.parse(item);

      if (Date.now() > entry.expiresAt) {
        this.delete(key);
        logger.debug('Cache expired', { key });
        return null;
      }

      logger.debug('Cache hit', { key });
      return entry.data;
    } catch (error) {
      logger.error('Error getting cache', { key, error });
      return null;
    }
  }

  delete(key: string): void {
    try {
      localStorage.removeItem(this.prefix + key);
      logger.debug('Cache deleted', { key });
    } catch (error) {
      logger.error('Error deleting cache', { key, error });
    }
  }

  clear(): void {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key);
        }
      });
      logger.info('Cache cleared');
    } catch (error) {
      logger.error('Error clearing cache', { error });
    }
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }
}

export const cache = CacheManager.getInstance();
