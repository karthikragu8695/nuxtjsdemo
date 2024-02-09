<template>
  <v-container>
      <v-row>
       
        <v-col cols="4">
          <v-tabs v-model="tab" class="mx-auto text-center "  >
            <v-tab value="one">Filter Profile</v-tab>
            <v-tab value="two">Sort Profile</v-tab>
          </v-tabs>
            <v-card-text>
              <v-window v-model="tab">
                <v-card v-for="profile in profiles" :key="profile">
                  <v-window-item value="one" class="font-bold text-[15px]">Basic Details </v-window-item>
                    <div  class="flex mt-5 ">
                      <v-row >
                        <v-col cols="4">
                          <h2>Age</h2>
                        </v-col>
                        <v-col cols="4">
                          <h2>{{min_age }} - {{ max_age }}</h2>
                        </v-col>
                        <v-col cols="4">
                          <v-icon @click="dialog=true">mdi-pencil</v-icon>
                        </v-col>
                        <v-col cols="12" class="text-center">
                        </v-col>
                      </v-row>
                      <v-dialog width="400" v-model="dialog">
                        <v-card class="px-5 py-10 ">
                          <v-row>
                            <v-col cols="12">
                              <div class="flex ">
                                <h2>select Age</h2>
                                <v-spacer></v-spacer>
                                <v-icon @click="dialog=false">mdi-cancel</v-icon>
                              </div>
                            </v-col>
                            <v-col cols="12">
                              <div class="flex">
                                  <v-col cols="5">
                                  <v-autocomplete
                                    :items="['18', '19', '20', '21', '22', '23']"
                                    variant="outlined"
                                    v-model="min_age"
                                  ></v-autocomplete>
                                </v-col>
                              <v-col cols="2" class="text-center mt-3">
                                to
                              </v-col>
                                <v-col cols="5">
                                  <v-autocomplete
                                    :items="['18', '19', '20', '21', '22', '23','24']"
                                    variant="outlined"
                                    v-model="max_age"
                                  ></v-autocomplete>
                                </v-col>
                                </div>
                            </v-col>
                            <v-row>
                              <v-col cols="5">
                              </v-col>
                              <v-col cols="3.5">
                                <v-btn>Reset</v-btn>
                              </v-col>
                              <v-col cols="3.5">
                                <v-btn @click="dialog=false">Apply</v-btn>
                              </v-col>
                            </v-row>
                          </v-row>
                        </v-card>
                      </v-dialog>
                    </div>
                    <div>
                      <v-row >
                        <v-col cols="4">
                          <h2>Height</h2>
                        </v-col>
                        <v-col cols="4">
                          <h2>{{min_height }} - {{ max_height }}</h2>
                        </v-col>
                        <v-col cols="4">
                          <v-icon @click="dialog=true">mdi-pencil</v-icon>
                        </v-col>
                        <v-col cols="12" class="text-center ">
                        </v-col>
                      </v-row>
                      <v-dialog width="400" v-model="dialog">
                        <v-card >
                          <v-row>
                            <v-col cols="12">
                              <div class="flex ">
                                <h2>select Height</h2>
                                <v-spacer></v-spacer>
                                <v-icon @click="dialog=false">mdi-cancel</v-icon>
                              </div>
                            </v-col>
                            <v-col cols="12">
                              <div class="flex">
                                  <v-col cols="5">
                                  <v-autocomplete
                                    :items="['18', '19', '20', '21', '22', '23']"
                                    variant="outlined"
                                    v-model="min_height"
                                  ></v-autocomplete>
                                </v-col>
                              <v-col cols="2" class="text-center mt-3">
                                to
                              </v-col>
                                <v-col cols="5">
                                  <v-autocomplete
                                    :items="['18', '19', '20', '21', '22', '23','24']"
                                    variant="outlined"
                                    v-model="max_height"
                                  ></v-autocomplete>
                                </v-col>
                                </div>
                            </v-col>
                            <v-row>
                              <v-col cols="5">
                              </v-col>
                              <v-col cols="3.5">
                                <v-btn>Reset</v-btn>
                              </v-col>
                              <v-col cols="3.5">
                                <v-btn @click="dialog=false">Apply</v-btn>
                              </v-col>
                            </v-row>
                          </v-row>
                        </v-card>
                      </v-dialog>
                    </div>
                    <div>
                      <v-row >
                        <v-col cols="4">
                          <h2>Height</h2>
                        </v-col>
                        <v-col cols="4">
                          <h2>{{min_height }} - {{ max_height }}</h2>
                        </v-col>
                        <v-col cols="4">
                          <v-icon @click="dialog=true">mdi-pencil</v-icon>
                        </v-col>
                        
                      </v-row>
                      <v-dialog width="400" v-model="dialog">
                        <v-card >
                          <v-row>
                            <v-col cols="12">
                              <div class="flex ">
                                <h2>select Height</h2>
                                <v-spacer></v-spacer>
                                <v-icon @click="dialog=false">mdi-cancel</v-icon>
                              </div>
                            </v-col>
                            <v-col cols="12">
                              <div class="flex">
                                  <v-col cols="5">
                                  <v-autocomplete
                                    :items="['18', '19', '20', '21', '22', '23']"
                                    variant="outlined"
                                    v-model="min_height"
                                  ></v-autocomplete>
                                </v-col>
                              <v-col cols="2" class="text-center mt-3">
                                to
                              </v-col>
                                <v-col cols="5">
                                  <v-autocomplete
                                    :items="['18', '19', '20', '21', '22', '23','24']"
                                    variant="outlined"
                                    v-model="max_height"
                                  ></v-autocomplete>
                                </v-col>
                                </div>
                            </v-col>
                            <v-row>
                              <v-col cols="5">
                              </v-col>
                              <v-col cols="3.5">
                                <v-btn>Reset</v-btn>
                              </v-col>
                              <v-col cols="3.5">
                                <v-btn @click="dialog=false">Apply</v-btn>
                              </v-col>
                            </v-row>
                          </v-row>
                        </v-card>
                      </v-dialog>
                    </div>
                </v-card>
              </v-window>
              
            </v-card-text>
            
        </v-col>
        <v-col cols="8" class="text-center">
         profile
        </v-col>
      </v-row>
      
  </v-container>
</template>
<script setup>
 const tab = ref(null)
 const dialog = ref (false)
 const min_age = ref('18')
 const max_age = ref('30')
 const min_height = ref('4.6')
 const max_height = ref('5.6')
 const profiles = ref([''])
const supabase = useSupabaseClient()

const search = async () =>{
  const { data, error } = await supabase
  .from('profiles')
  .select()
  .eq('age', min_age.value )
  console.log(data)
  console.log(profiles)
}

    
 
</script>