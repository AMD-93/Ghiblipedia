import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import { createCA, createCert } from 'mkcert'
import https from 'https'

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

const ca = await createCA({
  organization: 'Hello CA',
  countryCode: 'SE',
  state: 'Västra Götaland',
  locality: 'Göteborg',
  validityDays: 365,
})

const cert = await createCert({
  caKey: ca.key,
  caCert: ca.cert,
  domains: ['127.0.0.1', 'localhost'],
  validityDays: 365,
})

https
  .createServer(
    {
      key: cert.key,
      cert: cert.cert,
    },
    (req, res) => {
      res.writeHead(200)
      res.end('Hello, HTTPS!')
    },
  )
  .listen(5173, () => {
    console.log('HTTPS server running on https://localhost')
  })

// make sure you run git config --global core.autocrlf true on laptop + npm i mkcert
// install chocolatey on laptop
// ask Michael if I can install chocolatey on AT computer
