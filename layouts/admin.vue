<template>
    <div class="w-full container mx-auto flex flex-wrap items-center  mt-0 px-6 py-3">
      <v-app-bar :elevation="10">
        <label for="menu-toggle"  class="cursor-pointer md:hidden ">
          <v-app-bar-nav-icon  @click="draw=!draw"></v-app-bar-nav-icon>
        </label>
          <v-app-bar-title> MatriMony </v-app-bar-title>
            <div class="text-4xl lg:mr-32  hidden lg:block">
              <!-- <v-btn value="recent" to="/" class="px-5   ">
                  <v-icon >mdi-home</v-icon>
                  <span to="/"> Home</span>
              </v-btn> -->
              <v-btn value="recent" to="/"  class=" text-blue active px-5 hover:text-blue-500">
                  <v-icon>mdi-home</v-icon>
                  <span to="/">Home</span>
              </v-btn>
              <v-btn value="recent" to="/profile"   class="px-5 hover:text-blue-500">
                  <v-icon>mdi-account</v-icon>
                  <span to="/profile" >Admin</span>
              </v-btn>
              <v-btn value="recent"   class="px-5  hover:text-blue-500 ">
                  <v-icon>mdi-mail</v-icon>
                  <span >Mailbox</span>
              </v-btn>
              <v-btn value="recent"  class="px-5 hover:text-blue-500">
                  <v-icon>mdi-wrench</v-icon>
                  <span>Chat</span>
              </v-btn>
              <v-btn value="recent"  class="px-5 hover:text-blue-500">
                  <span class="mdi mdi mdi-bell text-h6"></span>
                  <span>Notification</span>
              </v-btn>
            </div>
            <div class="hidden lg:block">
              <!-- <v-btn @click="language=!language">Tamil</v-btn> -->
              
  
              <v-btn  @click="signOut" ><span class="mdi mdi-account-circle text-4xl"></span> <v-btn><span class="mdi mdi-chevron-down"></span></v-btn></v-btn>
            <!-- signOut -->
            </div>
         
            </v-app-bar>
              <div class="lg:hidden  md:flex md:items-center md:w-auto w-full order-2 md:order-2"  id="menu">
                  <v-navigation-drawer v-model="draw" >
                    <v-divider></v-divider>
                    <v-list-item link to="/"  class="mdi mdi-playlist-edit text-3xl pr-5" title="Profiles"></v-list-item>
                    <v-list-item link to="/" class="mdi mdi-account-edit text-3xl " title="EditProfile"></v-list-item>
                    <v-list-item link to="/" class="mdi mdi-account-edit text-3xl " title="Mailbox"></v-list-item>
                    <v-list-item link to="/" class="mdi mdi-account-edit text-3xl " title="Chat"></v-list-item>
                  </v-navigation-drawer>
              </div>
            </div>
            <v-main>
                <NuxtPage/>
            </v-main>
            </template>
<script setup >					
const supabase = useSupabaseClient()	
const draw =ref(false)
const signOut = async () => {
    await supabase.auth.signOut()
    navigateTo('/auth') 
}


</script>