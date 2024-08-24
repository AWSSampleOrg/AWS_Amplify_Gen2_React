import type { Handler } from "aws-lambda";

export const handler: Handler = async (event: Record<string, string>) => {
  console.log(JSON.stringify(event));
};
