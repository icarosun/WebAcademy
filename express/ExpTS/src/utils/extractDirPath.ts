const extractDirPath = (filePath: string) => {
  //.logger/logger.txt => logger/
  const onlyDirPath = filePath.slice(1).split('/').slice(0, -1).join('/');

  if (onlyDirPath.trim() === null) {
    return filePath;
  }

  return onlyDirPath;
};

export default extractDirPath;
