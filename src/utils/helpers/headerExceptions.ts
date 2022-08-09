const headerExceptions = ["admin", "authorization"];

export const useExcept = (path: string) =>
  !headerExceptions.includes(path.split("/")[1]);
