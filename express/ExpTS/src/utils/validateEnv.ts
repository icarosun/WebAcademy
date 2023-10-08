import { cleanEnv, port, str } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str({
      choices: ["development", "test", "production", "staging"],
    }),
  });
};

export default validateEnv;
