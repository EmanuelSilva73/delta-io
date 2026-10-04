import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { VApp, VMain, VBtn, VIcon } from 'vuetify/components'

import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  components: {
    VApp,
    VMain,
    VBtn,
    VIcon,
  },

  theme: {
    defaultTheme: 'delta',

    themes: {
      delta: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          primary: '#01B9E0',
          'on-primary': '#0F1316',
          secondary: '#0F1316',
          'on-secondary': '#FFFFFF',
          accent: '#00708A',
          info: '#01B9E0',
        },
      },
    },
  },
})

export default vuetify
