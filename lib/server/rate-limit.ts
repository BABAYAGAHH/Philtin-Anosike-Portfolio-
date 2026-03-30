import "server-only";

import { serverEnv } from "@/lib/server/env";

type RateLimitOptions = {
  namespace: string;
  key: string;
  max: number;
  windowMs?: number;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

export type RateLimitResult = {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
  retryAfterSeconds: number;
};

interface RateLimiter {
  check(options: RateLimitOptions): Promise<RateLimitResult>;
}

const globalRateLimitStore = globalThis as typeof globalThis & {
  __philtinRateLimitStore__?: Map<string, RateLimitEntry>;
};

class NoopRateLimiter implements RateLimiter {
  async check({
    max,
    windowMs = serverEnv.rateLimitWindowMs
  }: RateLimitOptions): Promise<RateLimitResult> {
    return {
      allowed: true,
      limit: max,
      remaining: max,
      resetAt: Date.now() + windowMs,
      retryAfterSeconds: 0
    };
  }
}

class MemoryRateLimiter implements RateLimiter {
  private store =
    globalRateLimitStore.__philtinRateLimitStore__ ??
    new Map<string, RateLimitEntry>();

  constructor() {
    globalRateLimitStore.__philtinRateLimitStore__ = this.store;
  }

  async check({
    namespace,
    key,
    max,
    windowMs = serverEnv.rateLimitWindowMs
  }: RateLimitOptions): Promise<RateLimitResult> {
    const now = Date.now();
    const compositeKey = `${namespace}:${key}`;
    const existingEntry = this.store.get(compositeKey);

    if (!existingEntry || existingEntry.resetAt <= now) {
      const resetAt = now + windowMs;

      this.store.set(compositeKey, {
        count: 1,
        resetAt
      });

      return {
        allowed: true,
        limit: max,
        remaining: Math.max(0, max - 1),
        resetAt,
        retryAfterSeconds: 0
      };
    }

    if (existingEntry.count >= max) {
      return {
        allowed: false,
        limit: max,
        remaining: 0,
        resetAt: existingEntry.resetAt,
        retryAfterSeconds: Math.max(
          1,
          Math.ceil((existingEntry.resetAt - now) / 1000)
        )
      };
    }

    existingEntry.count += 1;
    this.store.set(compositeKey, existingEntry);

    return {
      allowed: true,
      limit: max,
      remaining: Math.max(0, max - existingEntry.count),
      resetAt: existingEntry.resetAt,
      retryAfterSeconds: 0
    };
  }
}

const rateLimiter: RateLimiter =
  serverEnv.rateLimitMode === "none"
    ? new NoopRateLimiter()
    : new MemoryRateLimiter();

export function checkRateLimit(options: RateLimitOptions) {
  return rateLimiter.check(options);
}
