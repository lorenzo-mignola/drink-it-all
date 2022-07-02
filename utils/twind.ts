import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup } from 'twind';
export * from 'twind';
export const config: Configuration = {
  darkMode: 'class',
  mode: 'silent',
  theme: {
    colors: {
      'primary-dark': '#093746',
      'primary-light': '#e8dde0',
      accent: '#b7d26b'
    }
  }
};
if (IS_BROWSER) setup(config);
