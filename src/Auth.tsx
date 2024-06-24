import {
  confirmSignUp,
  ConfirmSignUpInput,
  signIn,
  SignInInput,
  signUp,
  SignUpInput,
} from "aws-amplify/auth";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const services: Parameters<typeof Authenticator>[0]["services"] = {
  async handleSignIn(input: SignInInput) {
    return signIn({
      ...input,
      options: {
        authFlowType: "USER_SRP_AUTH",
      },
    });
  },
  async handleSignUp(input: SignUpInput) {
    return signUp(input);
  },
  async handleConfirmSignUp(input: ConfirmSignUpInput) {
    return confirmSignUp(input);
  },
};

function Auth() {
  return (
    <Authenticator services={services}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={() => !!signOut && signOut({ global: true })}>
            Sign out
          </button>
        </main>
      )}
    </Authenticator>
  );
}

export default Auth;
