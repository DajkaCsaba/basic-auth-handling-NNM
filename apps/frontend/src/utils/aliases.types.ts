export type Children = React.ReactNode | React.ReactNode[];
export type Component = React.ReactNode;

export type InputTypes = 'text' | 'password' | 'email' | 'tel';

export type Maybe<T> = T | undefined | null;

export type Link = {
  key: string;
  text: string;
  href: string;
  afterLink?: Component;
  beforeLink?: Component;
};

export type TailwindStyle = string;

export type Callback<T> = (data: T) => void;

export type BackendResponse<T> = {
  success?: string;
  data?: T;
  error?: string;
  unexpected?: string;
};

export type StateSetter<T> = (which: keyof T) => (value: never) => void;
export type MultiStateSetter<T> = (
  index: number,
  which: keyof T
) => (value: string) => void;
