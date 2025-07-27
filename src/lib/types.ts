type Promisify<T, K extends string> = {
  [k in keyof T]: k extends K ? Promise<T[k]> : T[k];
};

export type NextProps<P = Record<string, string>, S = Record<string, string>> = Promisify<
  {
    params: P;
    searchParams: S;
    children: React.ReactNode;
  },
  'params' | 'searchParams'
>;
