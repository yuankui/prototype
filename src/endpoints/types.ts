export type API<In extends Array<any>, OUT> = {
  (...input: In): Promise<OUT>;
};

export type APIs = {
  [key: string]: API<any[], any>;
};
