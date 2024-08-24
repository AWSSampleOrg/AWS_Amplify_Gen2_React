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
import Main from "./main";

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

function App() {
  return (
    <Authenticator services={services}>
      {({ signOut, user }) => (
        <>
          <header>
            <h1>Hello {user?.username}</h1>
            <button onClick={() => !!signOut && signOut({ global: true })}>
              Sign out
            </button>
          </header>
          <main>
            <Main />
          </main>
        </>
      )}
    </Authenticator>
  );
}

export default App;
