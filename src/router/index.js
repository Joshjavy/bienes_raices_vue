import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () =>import('@/views/Login.vue')
    },
    {
      path:'/admin',
      name:'admin',
      component: () =>import('../views/admin/AdminLayout.vue'),
      meta:{ requiresAuth:true},
      children:[
        {
          path:'/admin/propiedades',
          name:'admin-propiedades',
          component: () =>import('../views/admin/AdminView.vue'),
        },
        {
          path:'/admin/Nueva',
          name:'Nueva-propiedad',
          component: () =>import('../views/admin/NuevaPropiedadView.vue'),
        },
        {
          path:'/admin/editar/:id',
          name:'Editar-propiedad',
          component: () =>import('../views/admin/EditarPropiedadView.vue'),
        },
      ]
    },

  ]
})
// guard de navegacion
router.beforeEach((to,from,next)=>{
  const requiredAuth = to.matched.some(url => url.meta.requiredAuth)
  if(requiredAuth){
      //comprobar auth
      
    }else{
      next()
    }
})
export default router
