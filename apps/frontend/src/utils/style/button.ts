import { TailwindStyle } from '@/fe/utils/aliases.types';

export type ButtonRole = 'cancel' | 'normal' | 'danger';
export type ButtonType = 'filled' | 'outlined';

const CANCEL: Record<ButtonType, TailwindStyle> = {
  filled:
    'border-secondary bg-secondary text-white hover:bg-white hover:text-secondary',
  outlined:
    'border-secondary bg-transparent text-secondary hover:bg-secondary hover:border-transparent hover:text-white',
};

const NORMAL: Record<ButtonType, TailwindStyle> = {
  filled:
    'hover:border-secondary hover:bg-secondary hover:text-white border-dominant bg-dominant  text-secondary',
  outlined:
    'border-secondary bg-transparent text-secondary hover:bg-secondary hover:border-transparent hover:text-accent',
};

const DANGER: Record<ButtonType, TailwindStyle> = {
  filled:
    'border-pageDanger bg-pageDanger text-white hover:bg-white hover:text-pageDanger',
  outlined:
    'border-pageDanger bg-transparent text-pageDanger hover:bg-pageDanger hover:border-transparent hover:text-white',
};

export const COLOR: Record<ButtonRole, Record<ButtonType, TailwindStyle>> = {
  cancel: CANCEL,
  normal: NORMAL,
  danger: DANGER,
};

export const BASE: TailwindStyle = 'font-bold';

export const PORTRAIT: TailwindStyle = 'portrait:border-sm portrait:rounded-sm';

export const LANDSCAPE: TailwindStyle = 'border-sml rounded-sml';
