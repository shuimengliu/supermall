import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const routes = [
  {
    path: '',
    redirect: '/home',
    component:Home
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
