import Vue           from 'vue'
import VueRouter     from 'vue-router'
import Formulario    from '../views/Formulario.vue'
import Clientes      from '../views/Tablas.vue'
import Checkin       from '../views/Checkin.vue'
import BusquedaForm  from '../views/BusquedaForm.vue'
import NuevoUsuario  from '../views/NuevoUsuario.vue'
import ListaUsuarios from '../views/ListaUsuarios.vue'
import ListaReservas from '../views/ListaVariasReservas.vue'
import EmptyPage     from '../views/EmptyPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: "Empty",
    component: EmptyPage
  },
  {
    path: '/busqueda',
    name: 'Busqueda',
    component: BusquedaForm
  },
  {
    path: '/form',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/checkin',
    name: 'Checkin',
    component: Checkin
  },
  {
    path: '/listausuarios',
    name: 'Lista de usuarios',
    component: ListaUsuarios
  },
  {
    path: '/nuevousuario',
    name: 'Nuevo usuario',
    component: NuevoUsuario
  },
  {
    path: '/reservas',
    name: 'Reservas',
    component: ListaReservas
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
