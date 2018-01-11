import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LangSelect from '@/components/LangSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LangSelect',
      component: LangSelect
    }
  ]
})
