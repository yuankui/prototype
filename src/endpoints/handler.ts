import { EndpointKey, endpoints } from ".";
import superjson from "superjson";
import { NextResponse } from "next/server";

export const endpointHandler = async (req: Request) => {
  const { endpoint, params }: { endpoint: string; params: any[] } = await req.json();

  try {
    // Get the endpoint function from our API definition
    const endpointFn = endpoints[endpoint as EndpointKey];
    if (!endpointFn) {
      return NextResponse.json(
        { error: `Endpoint ${endpoint} not found` },
        {
          status: 404,
        },
      );
    }

    // Execute the endpoint with the provided input
    const result = await endpointFn(...(params as [any]));

    const serialized = superjson.serialize(result);
    return NextResponse.json(serialized);
  } catch (error) {
    console.error("Error executing endpoint:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      },
    );
  }
};
