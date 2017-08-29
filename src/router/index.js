import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Parallax from '../components/parallax'
import Students from '../components/students.vue'
import Carousel from '../components/Carousel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/calender',
      name: 'Calender',
      component: Parallax
    },
    {
      path: '/students',
      name: 'Students',
      component: Students
    },
    {
      path: '/carousels',
      name: 'Carousel',
      component: Carousel
    }
  ]
})
