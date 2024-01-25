<template>
        <v-container>
            <span  class="mdi mdi-arrow-left text-h5"> Matches</span>
            <div v-if="profile">
          <v-row dense>
            <v-col>
              <v-card color="white" theme="dark">
                <div class="d-flex flex-wrap justify-space-between">
                  <div>
                      <v-avatar class="ma-3  rounded-lg" size="250">
                        <v-img  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></v-img>
                      </v-avatar>
                  </div>
                  <v-col class="text-left ml-5 ">
                        <v-row><span class="mdi mdi-shield-check text-blue mt-3  ">id verified</span></v-row>
                        <v-row class="font-bold text-h5 mt-4">{{ profile.name }}</v-row>
                        <v-row class="text-gray-300 mt-4">M09872334 | Last seen few hour ago</v-row>
                        <v-row class="mr-20">
                            <v-col cols="1" class="text-left"><span class="mdi mdi-account-circle-outline mt-1"></span></v-col>
                            <v-col cols="4" class="text-left">{{ profile.age }} {{ profile.height }}</v-col>
                        </v-row>
                        <v-row class="mr-20">
                            <v-col cols="1" class="text-left"><span class="mdi  mdi-account-box-multiple mt-1"></span></v-col>
                            <v-col cols="4" class="text-left">goverment job</v-col>
                        </v-row>
                        <v-row class="mr-20">
                            <v-col cols="1" class="text-left"><span class="mdi mdi mdi-map-marker-radius-outline mt-1"></span></v-col>
                            <v-col cols="4" class="text-left">{{ profile.lives }}</v-col>
                        </v-row>
                        <!-- <v-row><span class="mdi mdi-account-box-multiple"></span> {{ profile.Profession }}</v-row>
                        <v-row><span class="mdi mdi-map-marker-radius-outline"></span></v-row> -->
                    <!-- <h4 class="flex"><span class="mdi mdi-shield-check text-blue  ">id verified</span> </h4>
                    <h3 class="mt-5">{{ profile.name }}</h3>
                    <h3 class="mt-1"><span class="mdi mdi-account-circle-outline"></span>{{ profile.age }} {{ profile.height }}</h3>
                    <h3 class="mt-1"><span class="mdi mdi-account-box-multiple"></span> {{ profile.Profession }} </h3>
                    <h3 class="mt-1"><span class="mdi mdi-map-marker-radius-outline"></span>{{ profile.lives }}</h3> -->
                  </v-col>
                  <v-col class="text-left">
                    <v-row>
                        <h5><span class="mdi mdi-star-outline text-h5"></span>Shortlist</h5>
                        <h5 class="ml-5"><span class="mdi mdi-phone text-h5"></span>Call</h5>
                        <h5 class="ml-5"><span class="mdi mdi-dots-vertical text-h5"></span></h5>
                    </v-row>
                  </v-col>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <h2>Her Basic Details</h2>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-account text-h5 "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Age</v-col>
            <v-col cols="6" class="text-left">{{ profile.age }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-weight-lifter text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Physique</v-col>
            <v-col cols="6" class="text-left">{{ profile.age }},{{ profile.height }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-translate-variant text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Spoken Languages</v-col>
            <v-col cols="6" class="text-left">{{ profile.Languages }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-set-center text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Marital Status</v-col>
            <v-col cols="6" class="text-left">{{ profile.MaritalStatus }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-map-marker-radius-outline text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Lives In</v-col>
            <v-col cols="6" class="text-left">{{ profile.lives }}</v-col>
          </v-row>
          <h2 class="mt-2">Her Religious Details</h2>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-dharmachakra  text-h5 "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Religion</v-col>
            <v-col cols="6" class="text-left">{{ profile.Religion }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-book-account text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Caste</v-col>
            <v-col cols="6" class="text-left">{{ profile.caste }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi mdi-temple-hindu-outline text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Gothram</v-col>
            <v-col cols="6" class="text-left">{{ profile.Nadchathiram }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-card-bulleted text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Dosham</v-col>
            <v-col cols="6" class="text-left">{{ profile.Thosam }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-umbraco  text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Raasi</v-col>
            <v-col cols="6" class="text-left">{{ profile.Rashi }}</v-col>
          </v-row>
          <h2 class="mt-2">Her Professional  Details</h2>
          <v-row class="mt-3">
            <v-col cols="1"><span class="mdi mdi-account-school text-h5 "></span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Education</v-col>
            <v-col cols="6" class="text-left">{{ profile.Education }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-account-credit-card-outline text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Employment</v-col>
            <v-col cols="6" class="text-left">{{ profile.Profession }}</v-col>
          </v-row>
          <h2 class="mt-2">About Her Family</h2>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi  mdi-account-supervisor text-h5"> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >FatherName</v-col>
            <v-col cols="6" class="text-left">{{ profile.FatherName }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi  mdi-account-supervisor text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >MotherName</v-col>
            <v-col cols="6" class="text-left">{{ profile.MotherName }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi  mdi-account-tie text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >ElderBrothers</v-col>
            <v-col cols="6" class="text-left">{{ profile.ElderBrothers }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi  mdi-account-tie text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >YoungerBrother</v-col>
            <v-col cols="6" class="text-left">{{ profile.YoungerBrother }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-account-tie-woman  text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Eldersister</v-col>
            <v-col cols="6" class="text-left">{{ profile.ElderSister }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="1"><span  class="mdi mdi-account-tie-woman  text-h5  "> </span></v-col>
            <v-col cols="2" class="text-left  text-[20px] mt-1" >Youngersister</v-col>
            <v-col cols="6" class="text-left">{{ profile.YoungerSister }}</v-col>
          </v-row>
        </div>
        </v-container>
</template>

<script setup>
const route = useRoute()
const supabase = useSupabaseClient()
let profile =ref(null)
const id = route.params.Id
const items = [
    { text: 'Age', icon: ' mdi-account', value: ''},
    { text: 'Physique', icon: 'mdi-weight-lifter' },
    { text: 'Spoken Languages', icon: 'mdi-translate-variant' },
    { text: 'Marital Status', icon: 'mdi-set-center' },
    { text: 'Lives In', icon: 'mdi-map-marker-radius-outline' },
  ]
const Religious = [
    { text: 'Religion', icon: ' mdi-dharmachakra' },
    { text: 'Caste', icon: 'mdi-book-account' },
    { text: 'Gothram', icon: 'mdi mdi-temple-hindu-outline' },
    { text: 'Dosham', icon: 'mdi-card-bulleted' },
    { text: 'Raasi', icon: 'mdi-umbraco' },
  ]
const Family = [
    { text: 'FatherName', icon: ' mdi-account-check' },
    { text: 'MotherName', icon: 'mdi-account-check-outline' },
    { text: 'Brothers', icon: 'mdi mdi-account-switch' },
    { text: 'sister', icon: 'mdi-account-supervisor-outline' },
  ]
const Professional = [
    { text: 'Employment', icon: ' mdi-account-credit-card-outline' },
    { text: 'Income', icon: 'mdi-credit-card-scan-outline' },
  ]
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