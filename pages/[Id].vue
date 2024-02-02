<template>
        <v-container>
         <NuxtLink to="/"><span  class="mdi mdi-arrow-left text-h5"> Matches</span></NuxtLink>   
          <div v-if="profile">
          <v-row dense>
            <v-col>
              <v-card color="white" class="mt-5 px-2  py-8" theme="dark">
                <div class="d-flex flex-wrap   justify-space-between ">
                  <div class="w-full  items-center md:w-1/3 flex flex-col" >
                      <v-avatar class="  rounded-lg" size="250">
                        <v-img  v-model:src=profile.photos></v-img>
                      </v-avatar> 
                  </div>
                  <v-col class="text-left   w-full md:w-1/3 lg:w-2/3 flex flex-col">
                        <v-row><span class="mdi mdi-shield-check text-blue mt-3  ">id verified</span></v-row>
                        <v-row class="font-bold text-h5 mt-4">{{ profile.name }}</v-row>
                        <v-row class="text-gray-300 mt-4">M09872334 | Last seen few hour ago</v-row>
                        <v-row class="text-left">
                            <v-col cols="2" class="text-left"><span class="mdi mdi-account-circle-outline mt-1  text-white px-1 py-1 rounded bg-blue-500"></span></v-col>
                            <v-col cols="10" class="text-left ">{{ profile.age }} , {{ profile.height }}</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" class="text-left"><span class="mdi  mdi-account-box-multiple text-white px-1 py-1 rounded bg-blue-500"></span></v-col>
                            <v-col cols="10" class="text-left">goverment job</v-col>
                        </v-row>
                        <v-row >
                            <v-col cols="2" class="text-left"><span class="mdi mdi mdi-map-marker-radius-outline text-white px-1 py-1 rounded bg-blue-500"></span></v-col>
                            <v-col cols="10" class="text-left">{{ profile.lives }}</v-col>
                        </v-row>
                  </v-col>
                  <v-col  class="text-left hidden lg:block   flex  ">
                      <v-row>
                          <v-col cols="1.5" ><span class="mdi mdi-star-outline text-h5"></span></v-col>
                          <v-col cols="3.5" class="mt-1.5 text-gray-500">Shortlist</v-col>
                          <v-col cols="1.5"><span class="mdi mdi-phone  text-h5"></span></v-col>
                          <v-col cols="3.5" class="mt-1.5 text-gray-500">Call</v-col>
                          <v-col cols="2"><span class="mdi mdi-dots-vertical  text-h5"></span></v-col>
                    </v-row>
                    <!-- <v-row  class="flex  w-full md:w-1/3 flex-row">
                      <span class="mdi mdi-star-outline text-h5"></span><h2  class="mt-1.5 px-5 text-gray-500">Shortlist</h2>
                      <span class="mdi mdi-phone  text-h5"></span><h2  class="mt-1.5 px-5 text-gray-500">Call</h2><span class="mdi mdi-dots-vertical px-5  text-h5"></span>
                    </v-row> -->
                  </v-col>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- <v-row>
            <div class="d-flex flex-wrap   justify-space-between ">
            <v-col>
              <div class="w-full md:w-1/3 flex flex-col" >
                  <v-avatar class="  rounded-lg" size="250">
                    <v-img  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></v-img>
                  </v-avatar> 
                </div>
                
                
              </v-col>
            <v-col class="w-full md:w-1/3 flex flex-col">
              <v-row><span class="mdi mdi-shield-check text-blue mt-3  ">id verified</span></v-row>
                <v-row class="font-bold text-h5 mt-4">{{ profile.name }}</v-row>
                <v-row class="text-gray-300 mt-4">M09872334 | Last seen few hour ago</v-row>
                <v-row class="text-left">
                    <v-col cols="2" class="text-left"><span class="mdi mdi-account-circle-outline mt-1  text-white px-1 py-1 rounded bg-blue-500"></span></v-col>
                    <v-col cols="10" class="text-left ">{{ profile.age }} , {{ profile.height }}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="2" class="text-left"><span class="mdi  mdi-account-box-multiple text-white px-1 py-1 rounded bg-blue-500"></span></v-col>
                    <v-col cols="10" class="text-left">goverment job</v-col>
                </v-row>
                <v-row >
                    <v-col cols="2" class="text-left"><span class="mdi mdi mdi-map-marker-radius-outline text-white px-1 py-1 rounded bg-blue-500"></span></v-col>
                    <v-col cols="10" class="text-left">{{ profile.lives }}</v-col>
                </v-row>
            </v-col>
            <v-col>
              <v-row>
                    <v-col cols="2" ><span class="mdi mdi-star-outline text-h5"></span></v-col>
                    <v-col cols="3" class="mt-1.5 text-gray-500">Shortlist</v-col>
                    <v-col cols="2"><span class="mdi mdi-phone  text-h5"></span></v-col>
                    <v-col cols="3" class="mt-1.5 text-gray-500">Call</v-col>
                    <v-col cols="2"><span class="mdi mdi-dots-vertical  text-h5"></span></v-col>
              </v-row>
            </v-col>
          </div>
            
          </v-row> -->

<!--------------------datails---------------------->

          <h2 class="font-bold text-xl mt-3" >Her Basic Details</h2>
          <v-row class="mt-2">
            <v-col cols="2"><span  class="mdi mdi-account text-white bg-violet-500 rounded-xl px-1 py-0.5 text-h5 "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Age</v-col>
            <v-col cols="6" class="text-left">{{ profile.age }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi mdi-weight-lifter text-white bg-violet-500 rounded-xl px-1 py-0.5 text-h5  "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Physique</v-col>
            <v-col cols="6" class="text-left">{{ profile.age }},{{ profile.height }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi mdi-translate-variant text-white bg-violet-500 rounded-xl px-1 py-0.5 text-h5  "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Spoken Languages</v-col>
            <v-col cols="6" class="text-left">{{ profile.Languages }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi mdi-set-center text-h5 text-white bg-violet-500 rounded-xl px-1 py-0.5  "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Marital Status</v-col>
            <v-col cols="6" class="text-left">{{ profile.MaritalStatus }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi mdi-map-marker-radius-outline text-h5  text-white bg-violet-500 rounded-xl px-1 py-0.5 "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Lives In</v-col>
            <v-col cols="6" class="text-left">{{ profile.lives }}</v-col>
          </v-row>
          <h2 class="font-bold text-xl mt-3">Her Religious Details</h2>
          <v-row class="mt-2">
            <v-col cols="2"><span  class="mdi mdi-dharmachakra  text-white bg-blue-500 rounded-xl px-1 py-0.5 text-h5 "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Religion</v-col>
            <v-col cols="6" class="text-left">{{ profile.Religion }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi mdi-book-account text-white bg-blue-500 rounded-xl px-1 py-0.5 text-h5  "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Caste</v-col>
            <v-col cols="6" class="text-left">{{ profile.caste }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi mdi mdi-temple-hindu-outline text-white bg-blue-500 rounded-xl px-1 py-0.5 text-h5  "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Gothram</v-col>
            <v-col cols="6" class="text-left">{{ profile.Nadchathiram }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi mdi-card-bulleted text-white bg-blue-500 rounded-xl px-1 py-0.5 text-h5  "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Dosham</v-col>
            <v-col cols="6" class="text-left">{{ profile.Thosam }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi mdi-umbraco  text-h5 text-white bg-blue-500 rounded-xl px-1 py-0.5   "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Raasi</v-col>
            <v-col cols="6" class="text-left">{{ profile.Rashi }}</v-col>
          </v-row>
          <h2 class="font-bold text-xl mt-3">Her Professional  Details</h2>
          <v-row class="mt-2">
            <v-col cols="2"><span class="mdi mdi-account-school text-h5 text-white bg-red-500 rounded-xl px-1 py-0.5  "></span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Education</v-col>
            <v-col cols="6" class="text-left">{{ profile.Education }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi mdi-account-credit-card-outline text-h5 text-white bg-red-500 rounded-xl px-1 py-0.5   "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Employment</v-col>
            <v-col cols="6" class="text-left">{{ profile.Profession }}</v-col>
          </v-row>
          <h2 class="font-bold text-xl mt-3">About Her Family</h2>
          <v-row class="mt-2">
            <v-col cols="2"><span  class="mdi  mdi-account-supervisor text-h5 text-white bg-violet-500 rounded-xl px-1 py-0.5 "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >FatherName</v-col>
            <v-col cols="6" class="text-left">{{ profile.FatherName }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi  mdi-account-supervisor text-h5 text-white bg-violet-500 rounded-xl px-1 py-0.5 "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >MotherName</v-col>
            <v-col cols="6" class="text-left">{{ profile.MotherName }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi  mdi-account-tie text-h5 text-white bg-violet-500 rounded-xl px-1 py-0.5 "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] " >Brothers</v-col>
            <v-col cols="6" class="text-left">ElderBrothers : {{ profile.ElderBrothers }} , YoungerBrother : {{ profile.YoungerBrother }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"><span  class="mdi mdi-account-tie-woman  text-h5  text-white bg-violet-500 rounded-xl px-1 py-0.5 "> </span></v-col>
            <v-col cols="4" class="text-left  text-[20px] ">Sister</v-col>
            <v-col cols="6" class="text-left">ElderSister : {{ profile.ElderSister }}, Youngersister :{{ profile.YoungerSister }}</v-col>
          </v-row>
        </div>
        </v-container>
</template>

<script setup>
const route = useRoute()
const supabase = useSupabaseClient()
let profile =ref(null)
const id = route.params.Id


onMounted (async()=>{
    
    let { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    profile.value = profiles[0]
    console.log(profile.value.age)
})
definePageMeta({
  layout: 'indexlayout',
})
</script>