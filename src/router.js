import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '在线教育学习平台', icon: 'example' },
      component: () => import('@/views/layout/App.vue'),
      children:[
        {
          path: 'subject/:id/:subId',
          name: 'Subject',
          meta: { title: '全部课程-在线教育学习平台', icon: 'example' },
          component: () => import('@/views/Subject.vue')
        },
        {
          path: 'course/:id',
          name: 'courseInfo',
          meta: { title: '课程详情-在线教育学习平台', icon: 'example' },
          component: () => import('@/views/CourseInfo.vue')
        },{
          path: 'video/:id',
          name: 'CourseVideo',
          meta: { title: '课程视频-在线教育学习平台', icon: 'example' },
          component: () => import('@/views/CourseVideo.vue')
        },{
          path: 'test/:courseId/:testType',
          name: 'CourseTest',
          meta: { title: '课程试题-在线教育学习平台', icon: 'example' },
          component: () => import('@/views/CourseTest.vue')
        },{
          path: 'doTest',
          name: 'CourseAllTest',
          meta: { title: '课程试题-在线教育学习平台', icon: 'example' },
          component: () => import('@/views/CourseAllTest.vue')
        },
        {
          path: 'user',
          name: 'userInfo',
          meta: { title: '个人中心-在线教育学习平台', icon: 'example' },
          component: () => import('@/views/UserInfo.vue')
        }
      ]
    }
  ]
})
