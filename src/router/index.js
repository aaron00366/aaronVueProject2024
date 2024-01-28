import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'articles',
        component: () => import('../views/front/ArticlesView.vue')
      },
      {
        path: 'article/:id',
        component: () => import('../views/front/ArticleView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/front/CheckoutView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginView.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  // DashBoard Pages
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue'),
      },
      {
        path: 'article',
        component: () => import('../views/Article.vue'),
      },
    ],
  },
  // {
  //   path: '/user',
  //   component: () => import('../views/Dashboard.vue'),
  //   children: [
  //     {
  //       path: 'articles',
  //       component: () => import('../views/UserArticles.vue'),
  //     },
  //     {
  //       path: 'article/:articleId',
  //       component: () => import('../views/UserArticle.vue'),
  //     },
  //     {
  //       path: 'cart',
  //       component: () => import('../views/UserCart.vue'),
  //     },
  //     {
  //       path: 'checkout/:orderId',
  //       component: () => import('../views/UserCheckout.vue'),
  //     },
  //     {
  //       path: 'product/:productId',
  //       component: () => import('../views/UserProduct.vue'),
  //     },
  //   ],
  // },
  {
    path: '/admin/:pathMatch(.*)*',
    redirect: { name: 'Login' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
