import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(vuetify)
  .use(router)
  .use(
    createAuth0({
      domain: 'dev-f4im6j56guz4g0ga.eu.auth0.com',
      clientId: 'iHH7t1usdDV1FSpErtmRNDMCRsj5t6yP',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  )
  .mount('#app')
