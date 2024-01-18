
// export default defineNuxtRouteMiddleware((to, from) => {
//   const loggedIn= store.getters.isloggedIn()
//   // const loggedIn= true
//     if (to.path === '/' && !loggedIn) {
//       return navigateTo('/auth')
//     }
// })  
import { useCounterStore } from '@/stores/index'
export default function({store ,redirect}) {
  // console.log(store);
  // const isAuthenticated = true 
  // const isAuthenticated = store.getters.isloggedIn()? true : false
  // if (!isAuthenticated) {
  //   redirect({ name: '/' })
  // }
}

