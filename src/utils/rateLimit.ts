import { logger } from './logger';

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private static instance: RateLimiter;
  private limits: Map<string, RateLimitEntry> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  private constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  static getInstance(maxRequests?: number, windowMs?: number): RateLimiter {
    if (!RateLimiter.instance) {
      RateLimiter.instance = new RateLimiter(maxRequests, windowMs);
    }
    return RateLimiter.instance;
  }

  check(key: string): boolean {
    const now = Date.now();
    const entry = this.limits.get(key);

    if (!entry || now > entry.resetTime) {
      this.limits.set(key, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return true;
    }

    if (entry.count >= this.maxRequests) {
      logger.warn('Rate limit exceeded', { key, count: entry.count });
      return false;
    }

    entry.count++;
    return true;
  }

  reset(key: string): void {
    this.limits.delete(key);
  }

  getRemainingRequests(key: string): number {
    const entry = this.limits.get(key);
    if (!entry || Date.now() > entry.resetTime) {
      return this.maxRequests;
    }
    return Math.max(0, this.maxRequests - entry.count);
  }

  getResetTime(key: string): number | null {
    const entry = this.limits.get(key);
    if (!entry || Date.now() > entry.resetTime) {
      return null;
    }
    return entry.resetTime;
  }
}

export const rateLimiter = RateLimiter.getInstance();
