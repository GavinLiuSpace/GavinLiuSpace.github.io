<template>
  <v-container fluid>
    <v-layout justify-center align-center :mt-5="$vuetify.breakpoint.smAndUp">
    <v-flex :xs4="$vuetify.breakpoint.smAndUp">
    <v-card raised width="11.7cm">
      <v-tabs grow color="teal darken-3" slider-color="amber lighten-5">
        <v-tab
          ripple
        >
          About
        </v-tab>
        <v-tab
          ripple
        >
          Links
        </v-tab>
        <v-tab
          ripple
        >
          Contact
        </v-tab>
        <v-tab-item>
          <v-card-text>
            <h2>
              {{home.header}}
            </h2>
            <p class="text-sm-left" style="text-indent: 20px">
                {{home.text[0]}}
            </p>
            <p class="text-sm-left" style="text-indent: 20px">
                {{home.text[1]}}
            </p>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <AboutPage :items="about.items"/>
        </v-tab-item>
        <v-tab-item>
          <AboutPage :items="contact.items"/>
        </v-tab-item>
      </v-tabs>
    </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AboutPage from './AboutPage.vue';
import data from '../data';

export default {
  name: 'GavinCard',
  components: {
    AboutPage,
  },
  data() {
    return data;
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
