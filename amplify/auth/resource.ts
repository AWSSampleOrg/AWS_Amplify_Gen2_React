import { defineAuth } from "@aws-amplify/backend";
import { postConfirmation } from "./post-confirmation/resource";
// import { preTokenGeneration } from "./pre-token-generation/resource";
import { preSignUp } from "./pre-sign-up/resource";
// import { customMessage } from "./custom-message/resource";
// import { createAuthChallenge } from "./create-auth-challenge/resource";
// import { defineAuthChallenge } from "./define-auth-challenge/resource";
// import { verifyAuthChallengeResponse } from "./verify-auth-challenge-response/resource";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  groups: ["Admin"],
  multifactor: { mode: "OFF" },
  triggers: {
    //https://docs.amplify.aws/react/build-a-backend/functions/examples/create-user-profile-record/
    postConfirmation,
    // https://docs.amplify.aws/react/build-a-backend/functions/examples/override-token/
    //   preTokenGeneration,
    // https://docs.amplify.aws/react/build-a-backend/functions/examples/user-attribute-validation/
    preSignUp,
    // https://docs.amplify.aws/react/build-a-backend/functions/examples/custom-message/
    // customMessage,
    // https://docs.amplify.aws/react/build-a-backend/functions/examples/google-recaptcha-challenge/
    //   createAuthChallenge,
    //   defineAuthChallenge,
    //   verifyAuthChallengeResponse,
  },
  // https://docs.amplify.aws/react/build-a-backend/auth/manage-users/with-admin-actions/
  access: (allow) => [allow.resource(postConfirmation).to(["addUserToGroup"])],
});
