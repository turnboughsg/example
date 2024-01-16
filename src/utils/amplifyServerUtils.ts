import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import config from "@/amplifyconfiguration.json";
import { generateServerClientUsingReqRes } from "@aws-amplify/adapter-nextjs/api";

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});

export const reqResBasedClient = generateServerClientUsingReqRes({
  config: config,
});