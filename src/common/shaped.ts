/**
 * Creates a function to constraint the input type {@link TInput} to the given type {@link TShape}.
 *
 * @template TShape The shape of the input.
 * @template TInput The actual type of the input.
 * @returns A function that takes an input and checks if it is of the same shape as TShape.
 */
export const shaped =
  <TShape>() =>
  <TInput extends TShape>(input: TInput) =>
    input;
