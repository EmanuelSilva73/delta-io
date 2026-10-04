import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import {
  VApp,
  VMain,
  VContainer,
  VBtn,
} from 'vuetify/components'

import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  components: {
    VApp,
    VMain,
    VContainer,
    VBtn,
  },

  theme: {
    defaultTheme: 'light',

    themes: {
      light: {
        colors: {
          background: '#F8F8F6',
          surface: '#FFFFFF',
          primary: '#111111',
        },
      },
    },
  },
})

export default vuetify