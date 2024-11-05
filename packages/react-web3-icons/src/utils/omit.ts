export const omit = <T extends Record<string, unknown>>(
  obj: T,
  keys: (keyof T)[],
) => {
  const exclude = new Set(keys);
  return Object.fromEntries(
    (Object.entries(obj) as [keyof T, T[keyof T]][]).filter(([key]) => {
      return !exclude.has(key);
    }),
  );
};
