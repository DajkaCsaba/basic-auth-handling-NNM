const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const spacing = {
  xxs: '0.5vh',
  xxsl: '0.34vw',
  xs: '1.5vh',
  xsl: '0.7vw',
  sm: '2vh',
  sml: '0.82vw',
  base: '2.5vh',
  basel: '0.93vw',
  md: '3vh',
  mdl: '1.37vw',
  lg: '3.5vh',
  lgl: '1.8vw',
  xl: '6.32vh',
  xll: '3.6vw',
};

const elementSize = {
  xxs: '0.5vh',
  xxsl: '0.34vw',
  xs: '1.5vh',
  xsl: '0.7vw',
  sm: '2vh',
  sml: '0.82vw',
  base: '2.5vh',
  basel: '0.93vw',
  md: '3vh',
  mdl: '1.37vw',
  lg: '3.5vh',
  lgl: '1.8vw',
  xl: '6.32vh',
  xll: '3.6vw',
};

const fontSize = {
  xxs: '1vh',
  xxsl: '0.54vw',
  xs: '1.5vh',
  xsl: '0.7vw',
  sm: '2vh',
  sml: '0.82vw',
  base: '2.5vh',
  basel: '0.93vw',
  md: '3vh',
  mdl: '1.37vw',
  lg: '3.5vh',
  lgl: '1.8vw',
  xl: '6.32vh',
  xll: '3.6vw',
};

const borders = {
  sm: '0.18vh',
  'sml': '0.10vw',
  base: '0.28vh',
  'basel': '0.15vw',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            transform: 'translateX(-10vw)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': {
            transform: 'translateX(0%)',
            opacity: '1',
          },
          '10%': {
            transform: 'translateX(-20%)',
            opacity: '0.8',
          },
          '20%': {
            transform: 'translateX(-40%)',
            opacity: '0.6',
          },
          '30%': {
            transform: 'translateX(-60%)',
            opacity: '0.4',
          },
          '40%': {
            transform: 'translateX(-80%)',
            opacity: '0.2',
          },
          '50%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateX(-110%)',
            opacity: '0',
          },
          '70%': {
            transform: 'translateX(-120%)',
            opacity: '0',
          },
          '80%': {
            transform: 'translateX(-130%)',
            opacity: '0',
          },
          '90%': {
            transform: 'translateX(-140%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(-150%)',
            position: 'absolute',
          },
        },
      },
      animation: {
        fadeInFormLeft: 'fadeIn 0.5s  forwards',
        fadeOutToLeft: 'fadeOut 0.5s forwards',
      },
      spacing,
      borderRadius: {
        ...borders,
      },
      borderWidth: {
        ...borders,
      },
      fontSize,
      width: { ...elementSize },
      height: { ...elementSize },
      colors: {
        dominant: '#FFFFFF',
        secondary: '#1E272E',
        accent: '#3498DB',
        pageWarning: '#f7b389',
        pageDanger: '#f02121',
        pageGreen: '#00aa00',
        pageYellow: '#f5cc02',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
