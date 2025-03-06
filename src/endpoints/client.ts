import superjson from "superjson";

import type { APIs } from "./types.ts";
import { Endpoints } from "@/endpoints/index";

export class EndpointClient<T extends APIs> {
  constructor(private url: string) {}

  /**
   * Example:
   * POST localhost:3000/api/endpoints
   * Content-Type: application/json
   *
   * {
   *   "endpoint": "endpoints/directories/list",
   *   "params": {}
   * }
   *
   * @param endpoint
   * @param params
   */
  async call<K extends keyof T>(
    endpoint: K,
    ...params: Parameters<T[K]>
  ): Promise<Awaited<ReturnType<T[K]>>> {
    const res = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        endpoint: endpoint,
        params: params,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to call endpoint");
    }
    const superJsonResult = await res.json();
    return superjson.deserialize<Awaited<ReturnType<T[K]>>>(superJsonResult);
  }
}

export const endpointClient = new EndpointClient<Endpoints>("/api/endpoints");

// endpointClient.call("user/get", "123");
// endpointClient.call("user/list");
// endpointClient.call("user/create", "John Doe", "yuankui@email.com");
