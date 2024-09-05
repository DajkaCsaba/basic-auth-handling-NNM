export type Size = 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type Sizes = Record<Size, string>;

export const TEXT_SIZES: Sizes = {
  xxs: 'portrait:text-xxs text-xxsl',
  xs: 'portrait:text-xs text-xsl',
  sm: 'portrait:text-sm text-sml',
  base: 'portrait:text-base text-basel',
  md: 'portrait:text-md text-mdl',
  lg: 'portrait:text-lg text-lgl',
  xl: 'portrait:text-xl text-xll',
};

export const ICON_SIZES: Sizes = {
  xxs: 'portrait:w-xxs w-xxsl portrait:h-xxs h-xxsl',
  xs: 'portrait:w-xs w-xsl portrait:h-xs h-xsl',
  sm: 'portrait:w-sm w-sml portrait:h-sm h-sml',
  base: 'portrait:w-base w-basel portrait:h-base h-basel',
  md: 'portrait:w-md w-mdl portrait:h-md h-mdl',
  lg: 'portrait:w-lg w-lgl portrait:h-lg h-lgl',
  xl: 'portrait:w-xl w-xll portrait:h-xl h-xll',
};
