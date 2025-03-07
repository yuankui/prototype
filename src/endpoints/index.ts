import { APIs } from "./types";
import { userEndpoints } from "./users";
import { shaped } from "@/common/shaped";

export const endpoints = shaped<APIs>()({
  ...userEndpoints,
});

export type EndpointKey = keyof typeof endpoints;
export type Endpoints = typeof endpoints;
