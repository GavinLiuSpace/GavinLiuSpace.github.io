<template>
  <div id="app">
    <v-app dark>
    <GavinCard/>
    </v-app>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';
import GavinCard from './components/GavinCard.vue';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default {
  name: 'app',
  components: {
    GavinCard,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
