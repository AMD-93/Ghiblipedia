<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { user, isAuthenticated } = useAuth0()
</script>
<template>
  <pre v-if="isAuthenticated">
        <code>
          {{ user }}
        <p> {{ user?.nickname }}</p>
        <p> {{ user?.name }}</p>
        <p> {{ user?.email }}</p>
        <p> {{ user?.email_verified }}</p>

        </code>
</pre>
</template>
<style scoped>
p {
  margin: -25px;
  padding: 10px;
}
@media only screen and (max-width: 480px) {
}

@media only screen and (min-width: 481px) {
}

@media only screen and (min-width: 769px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1025px) {
}
</style>
