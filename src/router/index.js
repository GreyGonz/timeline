import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/counter'
import TaskTimeline from '@/components/TaskTimeline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tasks/timeline',
      name: 'TasksTimeline',
      component: TaskTimeline
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
