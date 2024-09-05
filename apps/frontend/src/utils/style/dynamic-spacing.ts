export type Spacing =
  | 'none'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'md'
  | 'lg'
  | 'xl';
export type SpacingDirection =
  | 'all'
  | 'vertical'
  | 'horizontal'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left';
export type Margins = Record<SpacingDirection, Record<Spacing, string>>;

export const MARGIN: Margins = {
  all: {
    none: '',
    xxs: 'portrait:m-xxs m-xxsl',
    xs: 'portrait:m-xs m-xsl',
    sm: 'portrait:m-sm m-sml',
    base: 'portrait:m-base m-basel',
    md: 'portrait:m-md m-mdl',
    lg: 'portrait:m-lg m-lgl',
    xl: 'portrait:m-xl m-xll',
  },
  top: {
    none: '',
    xxs: 'portrait:mt-xxs mt-xxsl',
    xs: 'portrait:mt-xs mt-xsl',
    sm: 'portrait:mt-sm mt-sml',
    base: 'portrait:mt-base mt-basel',
    md: 'portrait:mt-md mt-mdl',
    lg: 'portrait:mt-lg mt-lgl',
    xl: 'portrait:mt-xl mt-xll',
  },
  right: {
    none: '',
    xxs: 'portrait:mr-xxs mr-xxsl',
    xs: 'portrait:mr-xs mr-xsl',
    sm: 'portrait:mr-sm mr-sml',
    base: 'portrait:mr-base mr-basel',
    md: 'portrait:mr-md mr-mdl',
    lg: 'portrait:mr-lg mr-lgl',
    xl: 'portrait:mr-xl mr-xll',
  },
  bottom: {
    none: '',
    xxs: 'portrait:mb-xxs mb-xxsl',
    xs: 'portrait:mb-xs mb-xsl',
    sm: 'portrait:mb-sm mb-sml',
    base: 'portrait:mb-base mb-basel',
    md: 'portrait:mb-md mb-mdl',
    lg: 'portrait:mb-lg mb-lgl',
    xl: 'portrait:mb-xl mb-xll',
  },
  left: {
    none: '',
    xxs: 'portrait:ml-xxs ml-xxsl',
    xs: 'portrait:ml-xs ml-xsl',
    sm: 'portrait:ml-sm ml-sml',
    base: 'portrait:ml-base ml-basel',
    md: 'portrait:ml-md ml-mdl',
    lg: 'portrait:ml-lg ml-lgl',
    xl: 'portrait:ml-xl ml-xll',
  },
  vertical: {
    none: '',
    xxs: 'portrait:my-xxs my-xxsl',
    xs: 'portrait:my-xs my-xsl',
    sm: 'portrait:my-sm my-sml',
    base: 'portrait:my-base my-basel',
    md: 'portrait:my-md my-mdl',
    lg: 'portrait:my-lg my-lgl',
    xl: 'portrait:my-xl my-xll',
  },
  horizontal: {
    none: '',
    xxs: 'portrait:mx-xxs mx-xxsl',
    xs: 'portrait:mx-xs mx-xsl',
    sm: 'portrait:mx-sm mx-sml',
    base: 'portrait:mx-base mx-basel',
    md: 'portrait:mx-md mx-mdl',
    lg: 'portrait:mx-lg mx-lgl',
    xl: 'portrait:mx-xl mx-xll',
  },
};
