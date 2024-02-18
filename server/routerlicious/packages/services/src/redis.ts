/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { ICache } from "@fluidframework/server-services-core";
import { IRedisParameters } from "@fluidframework/server-services-utils";
import * as winston from "winston";
import { Lumberjack } from "@fluidframework/server-services-telemetry";
import { IRedisClientConnectionManager } from "@fluidframework/server-services-shared";

/**
 * Redis based cache redisClientConnectionManager.getRedisClient()
 * @internal
 */
export class RedisCache implements ICache {
	private readonly expireAfterSeconds: number = 60 * 60 * 24;
	private readonly prefix: string = "page";
	constructor(
		private readonly redisClientConnectionManager: IRedisClientConnectionManager,
		parameters?: IRedisParameters,
	) {
		if (parameters?.expireAfterSeconds) {
			this.expireAfterSeconds = parameters.expireAfterSeconds;
		}

		if (parameters?.prefix) {
			this.prefix = parameters.prefix;
		}

		redisClientConnectionManager.getRedisClient().on("error", (err) => {
			winston.error("[DHRUV DEBUG] Error with Redis:", err);
			Lumberjack.error("[DHRUV DEBUG] Error with Redis", undefined, err);
		});
	}
	public async delete(key: string): Promise<boolean> {
		try {
			await this.redisClientConnectionManager.getRedisClient().del(this.getKey(key));
			return true;
		} catch (error: any) {
			Lumberjack.error(`Error deleting from cache.`, undefined, error);
			return false;
		}
	}

	public async get(key: string): Promise<string> {
		try {
			return this.redisClientConnectionManager.getRedisClient().get(this.getKey(key));
		} catch (error: any) {
			Lumberjack.error(`Error getting ${key.substring(0, 20)} from cache.`, undefined, error);
			const newError: Error = { name: error?.name, message: error?.message };
			throw newError;
		}
	}

	public async set(key: string, value: string, expireAfterSeconds?: number): Promise<void> {
		try {
			const result = await this.redisClientConnectionManager
				.getRedisClient()
				.set(this.getKey(key), value, "EX", expireAfterSeconds ?? this.expireAfterSeconds);
			if (result !== "OK") {
				throw new Error(result);
			}
		} catch (error: any) {
			Lumberjack.error(`Error setting ${key.substring(0, 20)} in cache.`, undefined, error);
			const newError: Error = { name: error?.name, message: error?.message };
			throw newError;
		}
	}

	public async incr(key: string): Promise<number> {
		try {
			return this.redisClientConnectionManager.getRedisClient().incr(key);
		} catch (error: any) {
			Lumberjack.error(
				`Error while incrementing counter for ${key.substring(0, 20)} in redis.`,
				undefined,
				error,
			);
			const newError: Error = { name: error?.name, message: error?.message };
			throw newError;
		}
	}

	public async decr(key: string): Promise<number> {
		try {
			return this.redisClientConnectionManager.getRedisClient().decr(key);
		} catch (error: any) {
			Lumberjack.error(
				`Error while decrementing counter for ${key.substring(0, 20)} in redis.`,
				undefined,
				error,
			);
			const newError: Error = { name: error?.name, message: error?.message };
			throw newError;
		}
	}

	/**
	 * Translates the input key to the one we will actually store in redis
	 */
	private getKey(key: string): string {
		return `${this.prefix}:${key}`;
	}
}
