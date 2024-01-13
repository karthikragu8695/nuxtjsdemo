

export default defineNuxtRouteMiddleware((to, from) => {
  const loggedIn=true
    if (to.path === '/' && !loggedIn) {
      return navigateTo('/auth')
    }
})  
