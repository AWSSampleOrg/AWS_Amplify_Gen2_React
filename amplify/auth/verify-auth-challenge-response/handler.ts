import type { VerifyAuthChallengeResponseTriggerHandler } from "aws-lambda";

export const handler: VerifyAuthChallengeResponseTriggerHandler = async (
  event
) => {
  console.log(JSON.stringify(event));

  return event;
};
