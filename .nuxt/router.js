import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f77eb88 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _5b53fd3e = () => interopDefault(import('..\\pages\\users\\list.vue' /* webpackChunkName: "pages/users/list" */))
const _5bf66e72 = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _5f2fc64d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _41dce6ac = () => interopDefault(import('..\\pages\\_category\\index.vue' /* webpackChunkName: "pages/_category/index" */))
const _93ae3ee2 = () => interopDefault(import('..\\pages\\_category\\_article.vue' /* webpackChunkName: "pages/_category/_article" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3f77eb88,
    name: "about"
  }, {
    path: "/users/list",
    component: _5b53fd3e,
    name: "users-list"
  }, {
    path: "/users/:id?",
    component: _5bf66e72,
    name: "users-id"
  }, {
    path: "/",
    component: _5f2fc64d,
    name: "index"
  }, {
    path: "/:category",
    component: _41dce6ac,
    name: "category"
  }, {
    path: "/:category/:article",
    component: _93ae3ee2,
    name: "category-article"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
