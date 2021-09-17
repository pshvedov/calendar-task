<template>
  <div class="wrapper">
    <calendar/>
  </div>
</template>

<script>
import Calendar from './components/calendar/Calendar.vue';

export default {
  name: 'App',
  components: {
    Calendar,
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  color: #2c3e50;
}

.wrapper {
  margin: 50px auto;
  max-width: 430px;
  height :325px;
}
</style>
