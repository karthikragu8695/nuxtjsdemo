<template>
      
    <div v-if="!loggedIn"> Loggedin </div>
    <!-- <div v-for="profile in profiles" :key="profile.id" class="flex  ">
      <v-row>
        <v-col class="text-center">
          <v-avatar  color="grey" size="150" rounded="0">
              <v-img cover src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="text-left ">
            <div class="my-10">
              <h4>{{ profile.name }}</h4>
              <h4> <p>Count:</p></h4>
            <div class="flex mt-2">
              <h4>{{ profile.age }}</h4>
              <h4 class="ml-2"  >{{ profile.height }}</h4>
            </div>
            <v-row class="mt-2">
              <v-btn class="mr-2"  @click="dialog = true">Show</v-btn>
              <v-btn >Don't Show</v-btn>
            </v-row>
            </div>
          </v-col>
      </v-row> -->
      <v-card class="mx-auto">
        <v-container>
          <v-row dense>
            <!-- <v-col cols="12">
              <v-card
                color="#385F73"
                theme="dark">
                <v-card-title class="text-h5">
                  <v-avatar  color="grey" size="150" rounded="0">
                      <v-img cover src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></v-img>
                  </v-avatar>
                </v-card-title>
                
                <v-card-actions>
                  <v-btn variant="text">
                   View 
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col> -->

            <v-col cols="12">
              <v-card
                color="#1F7087"
                theme="dark">
                <div class="d-flex flex-wrap justify-space-between">
                  <div>
                      <v-avatar
                      class="ma-3"
                      size="125"
                      rounded="0">
                      <v-img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></v-img>
                    </v-avatar>
                    <v-row class="px-5 py-5">
                      <v-btn variant="outlined"  size="small"><a href="route.profile.Id">show</a></v-btn>
                    </v-row>
                  </div>
                  <v-col class="text-left">
                      <div>
                        <h4>Mani</h4>
                        <h4> <p>22</p></h4>
                      <div class="flex mt-2">
                        <h4>Bsc.cs</h4>
                        <h4 >Never Married</h4>
                      </div>
                      </div>
                  </v-col>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
</template>

<script>
import { useCounterStore } from '@/stores/index'
export default{
  data(){
    return{
     
    }
  },
 
  computed:{
    loggedIn(){
      return useCounterStore()
    },
   
  }
}
definePageMeta({
  layout: 'indexlayout',
})
</script>