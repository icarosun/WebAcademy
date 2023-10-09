import { cleanEnv, port, str, makeValidator } from 'envalid';

const fileNameLogger = makeValidator((file) => {
  if (/^(([A-Za-z]\w*)\/)*[A-Za-z]\w*\.[a-z]\w*/.test(file)) return file;
  else throw new Error('Expected a file with type, example: "logger.txt"');
});

const validateEnv = () => {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str({
      choices: ['development', 'test', 'production', 'staging'],
    }),
    FILE_LOGGER: fileNameLogger(),
  });
};

export default validateEnv;
