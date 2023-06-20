import type { PropType as VuePropType } from "vue";

export declare global {
  // define global types

  type AnyFn = (...args: any[]) => any;
  export interface AnyObject {
    [key: string]: unknown;
  }
  type Awaitable<T> = Promise<T> | T;
  type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
  type PromisifyFn<T extends AnyFn> = (
    ...args: ArgumentsType<T>
  ) => Promise<ReturnType<T>>;

  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
  type Recordable<T = any> = Record<string, T>;
  type Nullable<T> = T | null;
  interface ReadonlyRecordable<T = any> {
    readonly [key: string]: T;
  }

  // vue
  type PropType<T> = VuePropType<T>;
}
