import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { sayHello } from "./functions/say-hello/resource";
// import { storage } from "./storage/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  sayHello,
  // storage,
});

backend.addOutput({
  custom: {
    table: backend.data.resources.tables["Todo"].tableName,
    functionName: backend.sayHello.resources.lambda.functionName,
  },
});
