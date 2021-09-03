import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _07730029 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _68f6d2fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _a51a35fe = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _3285fdd0 = () => interopDefault(import('../pages/blog/categories/_slug.vue' /* webpackChunkName: "pages/blog/categories/_slug" */))
const _05bc5ee1 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _a887788e = () => interopDefault(import('../pages/projects/_slug.vue' /* webpackChunkName: "pages/projects/_slug" */))
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
    name: "blog___en"
  }, {
    path: "/fa",
    component: _68f6d2fe,
    name: "index___fa"
  }, {
    path: "/projects",
    component: _a51a35fe,
    name: "projects___en"
  }, {
    path: "/fa/blog",
    component: _07730029,
    name: "blog___fa"
  }, {
    path: "/fa/projects",
    component: _a51a35fe,
    name: "projects___fa"
  }, {
    path: "/fa/blog/categories/:slug?",
    component: _3285fdd0,
    name: "blog-categories-slug___fa"
  }, {
    path: "/blog/categories/:slug?",
    component: _3285fdd0,
    name: "blog-categories-slug___en"
  }, {
    path: "/fa/blog/:slug",
    component: _05bc5ee1,
    name: "blog-slug___fa"
  }, {
    path: "/fa/projects/:slug",
    component: _a887788e,
    name: "projects-slug___fa"
  }, {
    path: "/blog/:slug",
    component: _05bc5ee1,
    name: "blog-slug___en"
  }, {
    path: "/fa/:slug",
    component: _674031b6,
    name: "slug___fa"
  }, {
    path: "/projects/:slug",
    component: _a887788e,
    name: "projects-slug___en"
  }, {
    path: "/",
    component: _68f6d2fe,
    name: "index___en"
  }, {
    path: "/:slug",
    component: _674031b6,
    name: "slug___en"
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
