<template>
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
    <v-app-bar :elevation="10">
        <v-app-bar-title>MatriMony</v-app-bar-title>
      <div class="text-4xl">
        <v-spacer></v-spacer>
        <v-btn   @click="show=true" size="large" class="text-orange px-3">Login </v-btn>
      </div>
      </v-app-bar>
      <div  class=" md:flex md:items-center md:w-auto w-full order-2 md:order-2"  id="menu">
  </div>
  
</div>
<v-main>
  <NuxtPage/>
</v-main>
</template>
<script>						
  
export default {

  data: () => ({
    show:false
  }),
  
}
</script>