import type { PostConfirmationTriggerHandler } from "aws-lambda";
import {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const client = new CognitoIdentityProviderClient();

export const handler: PostConfirmationTriggerHandler = async (event) => {
  console.log(JSON.stringify(event));

  await client.send(
    new AdminAddUserToGroupCommand({
      GroupName: "Admin",
      Username: event.userName,
      UserPoolId: event.userPoolId,
    })
  );

  return event;
};
