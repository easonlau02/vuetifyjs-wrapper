<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      v-bind:key="i"
      v-bind:src="item.src"
      transition="fade"
      reverseTransition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/static/squirrel.jpg'
          },
          {
            src: '/static/sky.jpg'
          },
          {
            src: '/static/bird.jpg'
          },
          {
            src: '/static/planet.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
</style>
