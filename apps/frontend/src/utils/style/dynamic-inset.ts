export type Inset = 'none' | 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl';

export type InsetDirection =
  | 'all'
  | 'vertical'
  | 'horizontal'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left';

export type Paddings = Record<InsetDirection, Record<Inset, string>>;

export const PADDING: Paddings = {
  all: {
    none: '',
    xxs: 'portrait:p-xxs p-xxsl',
    xs: 'portrait:p-xs p-xsl',
    sm: 'portrait:p-sm p-sml',
    base: 'portrait:p-base p-basel',
    md: 'portrait:p-md p-mdl',
    lg: 'portrait:p-lg p-lgl',
    xl: 'portrait:p-xl p-xll',
  },
  top: {
    none: '',
    xxs: 'portrait:pt-xxs pt-xxsl',
    xs: 'portrait:pt-xs pt-xsl',
    sm: 'portrait:pt-sm pt-sml',
    base: 'portrait:pt-base pt-basel',
    md: 'portrait:pt-md pt-mdl',
    lg: 'portrait:pt-lg pt-lgl',
    xl: 'portrait:pt-xl pt-xll',
  },
  right: {
    none: '',
    xxs: 'portrait:pr-xxs pr-xxsl',
    xs: 'portrait:pr-xs pr-xsl',
    sm: 'portrait:pr-sm pr-sml',
    base: 'portrait:pr-base pr-basel',
    md: 'portrait:pr-md pr-mdl',
    lg: 'portrait:pr-lg pr-lgl',
    xl: 'portrait:pr-xl pr-xll',
  },
  bottom: {
    none: '',
    xxs: 'portrait:pb-xxs pb-xxsl',
    xs: 'portrait:pb-xs pb-xsl',
    sm: 'portrait:pb-sm pb-sml',
    base: 'portrait:pb-base pb-basel',
    md: 'portrait:pb-md pb-mdl',
    lg: 'portrait:pb-lg pb-lgl',
    xl: 'portrait:pb-xl pb-xll',
  },
  left: {
    none: '',
    xxs: 'portrait:pl-xxs pl-xxsl',
    xs: 'portrait:pl-xs pl-xsl',
    sm: 'portrait:pl-sm pl-sml',
    base: 'portrait:pl-base pl-basel',
    md: 'portrait:pl-md pl-mdl',
    lg: 'portrait:pl-lg pl-lgl',
    xl: 'portrait:pl-xl pl-xll',
  },
  vertical: {
    none: '',
    xxs: 'portrait:py-xxs py-xxsl',
    xs: 'portrait:py-xs py-xsl',
    sm: 'portrait:py-sm py-sml',
    base: 'portrait:py-base py-basel',
    md: 'portrait:py-md py-mdl',
    lg: 'portrait:py-lg py-lgl',
    xl: 'portrait:py-xl py-xll',
  },
  horizontal: {
    none: '',
    xxs: 'portrait:px-xxs px-xxsl',
    xs: 'portrait:px-xs px-xsl',
    sm: 'portrait:px-sm px-sml',
    base: 'portrait:px-base px-basel',
    md: 'portrait:px-md px-mdl',
    lg: 'portrait:px-lg px-lgl',
    xl: 'portrait:px-xl px-xll',
  },
};
