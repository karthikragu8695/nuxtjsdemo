<template>
    <div class="">
        index page
      </div>
    <div v-if="!loggedIn"> Loggedin </div>
</template>

<!-- <script >
// import { useCounterStore } from '@/stores/index'
// const  loggedIn = useCounterStore()
export default{
  definePageMeta: () => ({
    layout: 'indexlayout',
  }),
  computed:{
    loggedIn(){
      return this.$store.getters.isloggedIn()
    }
  }
}
</script> -->

<script>
import { useCounterStore } from '@/stores/index'
export default{
  computed:{
    loggedIn(){
      return useCounterStore()
    }
  }
}
definePageMeta({
  layout: 'indexlayout',
})
</script>