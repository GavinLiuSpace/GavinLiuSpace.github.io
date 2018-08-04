<template>
  <div>
    <v-list id="list">
      <v-list-tile
        pa-0
        avatar
        @click="item.func"
        v-for="item in items"
        :key="item.header"
      >
        <v-list-tile-avatar>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{item.header}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  props: {
    items: Array,
  },
};
</script>

<style scoped>
#list {
  padding: 0px;
}
</style>
