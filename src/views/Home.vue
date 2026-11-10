<template>
  <div class="home">
    <img id="logo" src="@/assets/logo.png" alt="logo" />
    <Appointments />
  </div>
</template>

<script>
// @ is an alias to /src
import Appointments from '@/components/Appointments.vue'

export default {
  name: 'Home',
  components: {
    Appointments
  }
}
</script>

<style lang="scss">
  #logo {
    margin: 2rem;
    max-width: 13rem;
  }
</style>
