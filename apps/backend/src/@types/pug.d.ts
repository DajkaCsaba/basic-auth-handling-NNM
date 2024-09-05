declare module '*.pug' {
  function compiler<
    Args extends { [K: string]: unknown } = { [K: string]: unknown }
  >(args: Args): string;
  export default compiler;
}
