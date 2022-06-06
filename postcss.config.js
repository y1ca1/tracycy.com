import autoprefixer from 'autoprefixer';
import presetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [tailwindcss, autoprefixer, presetEnv],
};
