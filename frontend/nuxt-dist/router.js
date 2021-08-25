import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _07730029 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _a51a35fe = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _39b18672 = () => interopDefault(import('../pages/blog/category/_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _05bc5ee1 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _a887788e = () => interopDefault(import('../pages/projects/_slug.vue' /* webpackChunkName: "pages/projects/_slug" */))
const _68f6d2fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _674031b6 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _07730029,
    name: "blog"
  }, {
    path: "/projects",
    component: _a51a35fe,
    name: "projects"
  }, {
    path: "/blog/category/:slug?",
    component: _39b18672,
    name: "blog-category-slug"
  }, {
    path: "/blog/:slug",
    component: _05bc5ee1,
    name: "blog-slug"
  }, {
    path: "/projects/:slug",
    component: _a887788e,
    name: "projects-slug"
  }, {
    path: "/",
    component: _68f6d2fe,
    name: "index"
  }, {
    path: "/:slug",
    component: _674031b6,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
