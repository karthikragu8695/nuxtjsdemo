<template>
    <div v-if="!loggedIn"> Loggedin </div>
      <v-card class="mx-auto">
        <v-container>
          <v-row dense>
            <div class=" w-full  lg:w-1/3 justify-space-between p-3 " v-for="profile in profileList" :key="profile.id" cols="4">
              <v-card color="#1F7087" theme="dark">
                <div class="d-flex flex-wrap justify-space-between">
                <v-row >
                  <v-col>
                    <NuxtLink  :to="`/${profile.id}`">
                        <v-avatar class="ma-3 rounded-lg" size="125" >
                          <v-img  v-model:src="profile.photos"></v-img>
                        </v-avatar>
                    </NuxtLink>
                 
                    </v-col>
                      <v-col class="text-left mt-7 w-full md:w-1/3">
                            <v-row>{{ profile.name }}</v-row>
                            <v-row>{{ profile.age }},{{ profile.height }}</v-row>
                            <v-row>{{ profile.Profession }}</v-row>
                            <v-row>{{ profile.lives }}</v-row>
                      </v-col>
                    </v-row>
                </div>
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-card> 
</template>

<!-- <script>
import { useCounterStore } from '@/stores/index'
export default{
  data(){
    return{
     
    }
  },
  methods:{
    Profileshow(){

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
</script> -->

<script setup>
import { useCounterStore } from '@/stores/index'
const loggedIn = ref(true)
const supabase = useSupabaseClient()

const profileList = ref([])

onMounted(async() =>{
  let { data: profiles, error } = await supabase
  .from('profiles')
  .select('*')
  profileList.value = profiles
})



definePageMeta({
  layout: 'indexlayout',
})
</script>