/* eslint-disable function-paren-newline */
// Styles
import '@mdi/font/css/materialdesignicons.css';
// eslint-disable-next-line import/extensions
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'custom-color': '#A5FED7',
  },
};

const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#000',
    surface: '#000',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'custom-color': '#3C54A8',
  },
};

const myCustomTheme = {
  dark: true,
  colors: {
    background: '#000',
    surface: '#0853A8',
    primary: '#167CF4',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'custom-color': '#00A8A8',
  },
};

const myCustomTheme2 = {
  dark: true,
  colors: {
    background: '#000',
    surface: '#0BA87C',
    primary: '#0BA87C',
    'primary-darken-1': '#3700B3',
    secondary: '#0BA87C',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'custom-color': '#A80068',
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
      myCustomTheme,
      myCustomTheme2,
    },
  },
});
