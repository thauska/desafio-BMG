
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'cadastro', component: () => import('pages/SignUp.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'recuperar-senha', component: () => import('pages/RecoverPassword.vue') }
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
