import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "app" */ './views/app/index.vue'),
    redirect: '/app/dashboards',
    children: [
      {
        path: 'app/dashboards',
        component: () => import(/* webpackChunkName: "dashboards" */ './views/app/dashboards/index.vue'),
        redirect: '/app/dashboards/default',
        children: [
          { path: 'default', component: () => import(/* webpackChunkName: "dashboards" */ './views/app/dashboards/Default.vue') },
          { path: 'analytics', component: () => import(/* webpackChunkName: "dashboards" */ './views/app/dashboards/Analytics.vue') },
          { path: 'ecommerce', component: () => import(/* webpackChunkName: "dashboards" */ './views/app/dashboards/Ecommerce.vue') },
          { path: 'content', component: () => import(/* webpackChunkName: "dashboards" */ './views/app/dashboards/Content.vue') }
        ]
      },
      {
        path: 'app/pages',
        component: () => import(/* webpackChunkName: "pages" */ './views/app/pages/index.vue'),
        redirect: '/app/pages/product',
        children: [
          {
            path: 'product',
            component: () => import(/* webpackChunkName : "product" */ './views/app/pages/product/index.vue'),
            redirect: '/app/pages/product/data-list',
            children: [
              { path: 'data-list', component: () => import(/* webpackChunkName: "product" */ './views/app/pages/product/DataList.vue') },
              { path: 'thumb-list', component: () => import(/* webpackChunkName: "product" */ './views/app/pages/product/ThumbList.vue') },
              { path: 'image-list', component: () => import(/* webpackChunkName: "product" */ './views/app/pages/product/ImageList.vue') },
              { path: 'details', component: () => import(/* webpackChunkName: "product" */ './views/app/pages/product/Details.vue') },
              { path: 'details-alt', component: () => import(/* webpackChunkName: "product" */ './views/app/pages/product/DetailsAlt.vue') },
            ]
          },
          {
            path: 'miscellaneous',
            component: () => import(/* webpackChunkName : "miscellaneous" */ './views/app/pages/miscellaneous/index.vue'),
            redirect: '/app/pages/miscellaneous/search',
            children: [
              { path: 'search', component: () => import(/* webpackChunkName: "miscellaneous" */ './views/app/pages/miscellaneous/Search.vue') },
              { path: 'mailing', component: () => import(/* webpackChunkName: "miscellaneous" */ './views/app/pages/miscellaneous/Mailing.vue') },
              { path: 'invoice', component: () => import(/* webpackChunkName: "miscellaneous" */ './views/app/pages/miscellaneous/Invoice.vue') }
            ]
          },
        ]
      },
      {
        path: 'app/applications',
        component: () => import(/* webpackChunkName: "applications" */ './views/app/applications/index.vue'),
        redirect: '/app/applications/todo',
        children: [
          { path: 'todo', component: () => import(/* webpackChunkName: "applications" */ './views/app/applications/Todo.vue') },
          { path: 'survey', component: () => import(/* webpackChunkName: "applications" */ './views/app/applications/Survey.vue') },
          { path: 'survey/:id', component: () => import(/* webpackChunkName: "applications" */ './views/app/applications/SurveyDetail.vue'), props: true },
          { path: 'chat', component: () => import(/* webpackChunkName: "applications" */ './views/app/applications/Chat.vue') }
        ]
      },
      {
        path: 'app/ui',
        component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/index.vue'),
        redirect: '/app/ui/forms',
        children: [
          {
            path: 'forms',
            component: () => import(/* webpackChunkName : "forms" */ './views/app/ui/forms/index.vue'),
            redirect: '/app/ui/forms/components',
            children: [
              { path: 'components', component: () => import(/* webpackChunkName: "forms" */ './views/app/ui/forms/Components.vue') },
              { path: 'layouts', component: () => import(/* webpackChunkName: "forms" */ './views/app/ui/forms/Layouts.vue') },
            ]
          },
          {
            path: 'components',
            component: () => import(/* webpackChunkName : "components" */ './views/app/ui/components/index.vue'),
            redirect: '/app/ui/components/alerts',
            children: [
              { path: 'alerts', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Alerts.vue') },
              { path: 'badges', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Badges.vue') },
              { path: 'buttons', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Buttons.vue') },
              { path: 'cards', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Cards.vue') },
              { path: 'carousel', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Carousel.vue') },
              { path: 'charts', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Charts.vue') },
              { path: 'collapse', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Collapse.vue') },
              { path: 'dropdowns', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Dropdowns.vue') },
              { path: 'editors', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Editors.vue') },
              { path: 'icons', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Icons.vue') },
              { path: 'input-groups', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/InputGroups.vue') },
              { path: 'jumbotron', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Jumbotron.vue') },
              { path: 'maps', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Maps.vue') },
              { path: 'modal', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Modal.vue') },
              { path: 'navigation', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Navigation.vue') },
              { path: 'popover-tooltip', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/PopoverTooltip.vue') },
              { path: 'sortable', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Sortable.vue') },
              { path: 'tables', component: () => import(/* webpackChunkName: "components" */ './views/app/ui/components/Tables.vue') }
            ]
          },
        ]
      },
      {
        path: 'app/menu',
        component: () => import(/* webpackChunkName: "menu" */ './views/app/menu/index.vue'),
        redirect: '/app/menu/types',
        children: [
          {
            path: 'types',
            component: () => import(/* webpackChunkName : "menu-types" */ './views/app/menu/Types.vue'),
          },
          {
            path: 'levels',
            component: () => import(/* webpackChunkName : "menu-levels" */ './views/app/menu/levels/index.vue'),
            redirect: '/app/menu/levels/third-level-1',
            children: [
              { path: 'third-level-1', component: () => import(/* webpackChunkName: "menu-levels" */ './views/app/menu/levels/Third-level-1.vue') },
              { path: 'third-level-2', component: () => import(/* webpackChunkName: "menu-levels" */ './views/app/menu/levels/Third-level-2.vue') },
              { path: 'third-level-3', component: () => import(/* webpackChunkName: "menu-levels" */ './views/app/menu/levels/Third-level-3.vue') },
            ]
          },
        ]
      },
      {
        path: 'app/blank-page',
        component: () => import(/* webpackChunkName: "blank-page" */ './views/app/blank-page.vue')
      }
    ]
  },
  { path: '/error', component: () => import(/* webpackChunkName: "error" */ './views/Error.vue') },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ './views/user/index.vue'),
    redirect: '/user/login',
    children: [
      { path: 'login', component: () => import(/* webpackChunkName: "user" */ './views/user/Login.vue') },
      { path: 'register', component: () => import(/* webpackChunkName: "user" */ './views/user/Register.vue') },
      { path: 'forgot-password', component: () => import(/* webpackChunkName: "user" */ './views/user/ForgotPassword.vue') }
    ]
  },
  { path: '*', component: () => import(/* webpackChunkName: "error" */ './views/Error.vue') }
]

const router = new Router({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
