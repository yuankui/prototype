import { APIs } from "./types";
import { spacesEndpoints } from "./users";
import { shaped } from "@/common/shaped";

export const endpoints = shaped<APIs>()({
  ...spacesEndpoints,
});

export type EndpointKey = keyof typeof endpoints;
export type Endpoints = typeof endpoints;
