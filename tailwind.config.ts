import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '42px',
        xl: '32px',
      },
    },
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        geologica: ['var(--font-geologica)'],
        lora: ['var(--font-lora)'],
      },

      colors: {
        lightBg: '#FFFFFF',
        darkBg: '#101340',
        mediumBg: '#E5EEF6',
        darkBlueBg: '#0045CB',
        accent: '#00EA90',
        redApple: '#FF3B30',

        primaryText: '#FFFFFF',
        secondaryText: '#101340',
        darkBlueText: '#0045CB',

        red: '#FF0000',
        error: '#FF0000',
        //
        greyText: '#8E8E93',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
