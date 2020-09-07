
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: { canBack: false, logout: false } },
      { path: 'cadastro', component: () => import('pages/SignUp.vue'), meta: { canBack: true, logout: false } },
      { path: 'login', component: () => import('pages/Login.vue'), meta: { canBack: false, logout: true } },
      { path: 'recuperar-senha', component: () => import('pages/RecoverPassword.vue'), meta: { canBack: true, logout: false } },
      { path: 'dashboard', component: () => import('pages/Dashboard.vue'), meta: { canBack: false, logout: true } },
      { path: 'clube-ada', component: () => import('pages/AdaClub.vue'), meta: { canBack: true, logout: false } },
      { path: 'ofertas', component: () => import('pages/Offer.vue'), meta: { canBack: true, logout: false } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
