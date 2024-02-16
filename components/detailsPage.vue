<template>
    <v-container>
        <v-row>
          <v-col >
            <v-tabs v-model="tab"   class="mx-auto text-center  ">
              <v-tab v-if="!language" value="one">Filter Profile</v-tab>
              <v-tab v-else value="one" >வடிகட்டி சுயவிவரம்</v-tab>
              <v-spacer></v-spacer>
              <span @click="language=!language"   class="mdi mdi-translate-variant px-3 rounded text-black mt-3 text-h5 border border-black mr-5"></span>
              <!-- <v-tab value="two">Sort Profile</v-tab> -->
            </v-tabs>
              <v-card-text>
                <v-window v-model="tab">
                  <v-card v-for="profile in profiles" :key="profile">
                    <v-window-item value="one" class="font-bold text-[15px]"> </v-window-item>
                      <h2 v-if="!language" class="text-h6 font-semibold">Basic Details</h2>
                      <h2 v-else class="font-semibold">அடிப்படை விவரங்கள்</h2>
                      <!--------------Age---------->
                      <div  class="flex mt-5">
                        <v-row>
                          <v-col cols="4">
                            <h2 v-if="!language">Age</h2>
                            <h2 v-else>வயது</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ min_age }} - {{ max_age }}</h2>
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
                                <div class="flex">
                                  <h2 v-if="!language">select Age</h2>
                                  <h2 v-else>வயதைத் தேர்ந்தெடுக்கவும்</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="dialog=false">mdi-close</v-icon>
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
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn v-else>மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" @click="dialog=false">Apply</v-btn>
                                  <v-btn v-else @click="dialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <!-------------Height--------->
                      <div  class="flex">
                        <v-row >
                          <v-col cols="4">
                            <h2 v-if="!language">Height</h2>
                            <h2 v-else>உயரம்</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ min_height }} - {{ max_height }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="heightdialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="heightdialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2 v-if="!language">select Height</h2>
                                  <h2 v-else>உயரத்தைத் தேர்ந்தெடுக்கவும்</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="heightdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <div class="flex">
                                    <v-col cols="5">
                                    <v-autocomplete
                                      :items="['5.8', '5.9', '6.0', '6.1', '6.2', '6.3']"
                                      variant="outlined"
                                      v-model="min_height"
                                    ></v-autocomplete>
                                  </v-col>
                                <v-col cols="2" class="text-center mt-3">
                                  to
                                </v-col>
                                  <v-col cols="5">
                                    <v-autocomplete
                                      :items="['5.8', '5.9', '6.0', '6.1', '6.2', '6.3']"
                                      variant="outlined"
                                      v-model="max_height"
                                    ></v-autocomplete>
                                  </v-col>
                                  </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn v-else>மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" @click="heightdialog=false">Apply</v-btn>
                                  <v-btn v-else @click="heightdialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <!----------Marital Status----->
                      <div  class="flex">
                        <v-row >
                          <v-col cols="4">
                            <h2 v-if="!language">Maritalstatus</h2>
                            <h2 v-else>திருமண நிலை</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2 v-if="!language" >{{ maritalstatus }}</h2>
                            <h2 v-else>{{ maritalstatusTl }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="Maritaldialog=true">mdi-pencil</v-icon>
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="Maritaldialog">
                          <v-card class="px-5 py-10 ">
                             <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2 v-if="!language">select Maritalstatus </h2>
                                  <h2 v-else>திருமண நிலையைத் தேர்ந்தெடுக்கவும்</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="Maritaldialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12" >
                                <div>
                                  <v-checkbox v-if="!language"  v-model="maritalstatus" value="Any" label="Any"> </v-checkbox>
                                  <v-checkbox  v-else v-model="maritalstatusTl" value="ஏதேனும்" label="ஏதேனும்"> </v-checkbox>
                                  <v-checkbox v-if="!language"  v-model="maritalstatus" value="Awaiting Divorce" label="Awaiting Divorce"> </v-checkbox>
                                  <v-checkbox  v-else  v-model="maritalstatusTl" value="விவாகரத்துக்காக காத்திருக்கிறது" label="விவாகரத்துக்காக காத்திருக்கிறது"> </v-checkbox>
                                  <v-checkbox v-if="!language"  v-model="maritalstatus" value="Divorced" label="Divorced"> </v-checkbox>
                                  <v-checkbox v-else v-model="maritalstatusTl" value="விவாகரத்து" label="விவாகரத்து"> </v-checkbox>
                                  <v-checkbox v-if="!language"  v-model="maritalstatus" value="Never Married" label="Never Married"> </v-checkbox>
                                  <v-checkbox  v-else  v-model="maritalstatusTl" value="திருமணமே ஆகாதவர்" label="திருமணமே ஆகாதவர்"> </v-checkbox>
                                  <v-checkbox v-if="!language"  v-model="maritalstatus" value="Widower" label="Widower"> </v-checkbox>
                                  <v-checkbox  v-else  v-model="maritalstatusTl" value="விதவை" label="விதவை"> </v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn v-else>மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="Maritaldialog=false" v-if="!language">Apply</v-btn>
                                  <v-btn @click="Maritaldialog=false" v-else>விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                            
                            <!-- <v-select v-if="!language"
                              v-model="favorites"
                              :items="states"
                              item-title="English"
                              item-value="English"
                              label="Select"
                              multiple
                              persistent-hint
                            ></v-select>
                          <v-select v-else
                              v-model="favorites"
                              :items="states"
                              item-title="Tamil"
                              item-value="Tamil"
                              label="Select"
                              multiple
                              persistent-hint
                            ></v-select> -->
                            <!-- <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn v-else>மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="Maritaldialog=false" v-if="!language">Apply</v-btn>
                                  <v-btn @click="Maritaldialog=false" v-else>விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row> -->
                          
                            </v-card>
                          
                        </v-dialog>
                      </div>
                      
                      <h2  v-if="!language" class="text-h6 font-semibold mt-5">Religious Details</h2>
                      <h2 v-else class=" font-semibold mt-5">மத விவரங்கள்</h2>
                      <!-------------Religious--------->
                      <div  class="flex mt-5">
                        <v-row >
                          <v-col cols="4">
                            <h2 v-if="!language">Religious</h2>
                            <h2 v-else>மதம் </h2>
                          </v-col>
                          <v-col cols="4">
                            <h2 v-if="!language">{{ Religious }}</h2>
                            <h2 v-else>{{ ReligiousTl }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="Religiousdialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="Religiousdialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2 v-if="!language">select Religious </h2>
                                  <h2 v-else>மதத்தைத் தேர்ந்தெடுக்கவும் </h2>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="Religiousdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox  v-if="!language" v v-model="Religious" value="Any" label="Any"></v-checkbox>
                                  <v-checkbox  v-else v-model="ReligiousTl" value="ஏதேனும்" label="ஏதேனும்"></v-checkbox>
                                  <v-checkbox  v-if="!language" v-model="Religious"   value="Hindu" label="Hindu"></v-checkbox>
                                  <v-checkbox  v-else v-model="ReligiousTl"   value="இந்து" label="இந்து"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn v-else>மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" @click="Religiousdialog=false">Apply</v-btn>
                                  <v-btn v-else @click="Religiousdialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <!-------------caste--------->
                      <div  class="flex ">
                        <v-row >
                          <v-col cols="4">
                            <h2 v-if="!language">Caste</h2>
                            <h2 v-else>சாதி</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2 v-if="!language">{{ Caste }}</h2>
                            <h2  v-else>{{ CasteTl }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="Castedialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="Castedialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2  v-if="!language" class="mt-2 font-bold">Select Caste </h2>
                                  <h2  v-else class="mt-2 font-bold">சாதியைத் தேர்ந்தெடுக்கவும் </h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Castedialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox  v-if="!language"  v-model="Caste"  value="Any" label="Any"></v-checkbox>
                                  <v-checkbox v-else v-model="CasteTl"  value="ஏதேனும்" label="ஏதேனும்"></v-checkbox>
                                  <v-checkbox  v-if="!language"  v-model="Caste"   value="Brahmin-maithil" label="Brahmin-maithil"></v-checkbox>
                                  <v-checkbox  v-else v-model="CasteTl"   value="பிராமணர்-மைதில்" label="பிராமணர்-மைதில்"></v-checkbox>
                                  <v-checkbox   v-if="!language" v-model="Caste"  value="Brahmin-Bhumihar" label="Brahmin-Bhumihar"></v-checkbox>
                                  <v-checkbox v-else v-model="CasteTl"  value="பிராமணர்-பூமிஹார்" label="பிராமணர்-பூமிஹார்"></v-checkbox>
                                  <v-checkbox  v-if="!language" v-model="Caste"  value="Kumhar" label="Kumhar"></v-checkbox>
                                  <v-checkbox v-else v-model="CasteTl"  value="குயவன்" label="குயவன்"></v-checkbox>
                                  <v-checkbox  v-if="!language" v-model="Caste"  value="Sundhi" label="Sundhi"></v-checkbox>
                                  <v-checkbox v-else v-model="CasteTl"  value="கடவுச்சொல்" label="கடவுச்சொல்"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn  v-if="!language">Reset</v-btn>
                                  <v-btn  v-else >மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn  v-if="!language" @click="Castedialog=false">Apply</v-btn>
                                  <v-btn v-else @click="Castedialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <!-------------star--------->
                      <div  class="flex ">
                        <v-row >
                          <v-col cols="4">
                            <h2 v-if="!language">star</h2>
                            <h2 v-else>ராசி</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2 v-if="!language">{{ star }}</h2>
                            <h2 v-else>{{ starTl }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="stardialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="stardialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2  v-if="!language" class="mt-2 font-bold">Select Star </h2>
                                  <h2 v-else class="mt-2 font-bold">நட்சத்திரத்தைத் தேர்ந்தெடுக்கவும் </h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="stardialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox  v-if="!language" v-model="star" value="Any"  label="Any"></v-checkbox>
                                  <v-checkbox v-else v-model="starTl" value="ஏதேனும்"  label="ஏதேனும்"></v-checkbox>
                                  <v-checkbox  v-if="!language" v-model="star"  value="Ardra/Thiruvathira"  label="Ardra/Thiruvathira"></v-checkbox>
                                  <v-checkbox v-else v-model="starTl"  value="அர்த்ரா/திருவாதிரை"  label="அர்த்ரா/திருவாதிரை"></v-checkbox>
                                  <v-checkbox  v-if="!language" v-model="star" value="Revathi"  label="Revathi"></v-checkbox>
                                  <v-checkbox v-else v-model="starTl" value="ரேவதி"  label="ரேவதி"></v-checkbox>
                                  <v-checkbox v-if="!language" v-model="star" value="Not Specified"   label="Not Specified"></v-checkbox>
                                  <v-checkbox v-else v-model="starTl" value="குறிப்பிடப்படவில்லை"   label="குறிப்பிடப்படவில்லை"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" >Reset</v-btn>
                                  <v-btn v-else>மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" @click="stardialog=false">Apply</v-btn>
                                  <v-btn v-else @click="stardialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <!-------------Dhosam--------->
                      <div  class="flex ">
                        <v-row >
                          <v-col cols="4">
                            <h2 v-if="!language" >Tosha(m)</h2>
                            <h2 v-else>தோசம்</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2  v-if="!language" >{{ Dhosam }}</h2>
                            <h2 v-else>{{ DhosamTl }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="Dhosamdialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="Dhosamdialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2 v-if="!language"  class="mt-2 font-bold">Select Dhosam </h2>
                                  <h2 v-else class="mt-2 font-bold">தோசம் தேர்ந்தெடுக்கவும்</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Dhosamdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-if="!language"   v-model="Dhosam"   value="Doesn't Matter"  label="Doesn't Matter"></v-checkbox>
                                  <v-checkbox  v-else v-model="DhosamTl"   value="முக்கியமில்லை"  label="முக்கியமில்லை"></v-checkbox>
                                  <v-checkbox v-if="!language"   v-model="Dhosam"   value="Don't Know" label="Don't Know"></v-checkbox>
                                  <v-checkbox  v-else v-model="DhosamTl"   value="தெரியாது" label="தெரியாது"></v-checkbox>
                                  <v-checkbox v-if="!language"   v-model="Dhosam"  value="No Dhosham" label="No Dhosham"></v-checkbox>
                                  <v-checkbox  v-else v-model="DhosamTl"  value="தோஷம் இல்லை" label="தோஷம் இல்லை"></v-checkbox>
                                  <v-checkbox v-if="!language"   v-model="Dhosam"   value="Not Specified" label="Not Specified"></v-checkbox>
                                  <v-checkbox  v-else v-model="DhosamTl"   value="குறிப்பிடப்படவில்லை" label="குறிப்பிடப்படவில்லை"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn v-else >மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" @click="Dhosamdialog=false">Apply</v-btn>
                                  <v-btn v-else @click="Dhosamdialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
  
                      <!-------------Occupation-------------------->
                      <h2  v-if="!language" class="text-h6 font-semibold">Professional Details</h2>
                      <h2 v-else class=" font-semibold">தொழில்முறை விவரங்கள்</h2>
                      <div  class="flex mt-5">
                        <v-row >
                          <v-col cols="4">
                            <h2  v-if="!language" >Occupation</h2>
                            <h2  v-else >தொழில்</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2 v-if="!language">{{ Occupation }}</h2>
                            <h2  v-else>{{ OccupationTl }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="Occupationdialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="Occupationdialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2  v-if="!language" class="mt-2 font-bold">Select Occupation</h2>
                                  <h2 v-else class="mt-2 font-bold">தொழிலைத் தேர்ந்தெடுக்கவும்</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Occupationdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-if="!language"  v-model="Occupation"  value="Any" label="Any"></v-checkbox>
                                  <v-checkbox  v-else v-model="OccupationTl"  value="ஏதேனும்" label="ஏதேனும்"></v-checkbox>
                                  <v-checkbox  v-if="!language" v-model="Occupation" value="Administration" label="Administration"></v-checkbox>
                                  <v-checkbox  v-else v-model="OccupationTl" value="நிர்வாகம்" label="நிர்வாகம்"></v-checkbox>
                                  <v-checkbox v-if="!language"  v-model="Occupation" value="BPO & Customer Service" label="BPO & Customer Service"></v-checkbox>
                                  <v-checkbox  v-else v-model="OccupationTl" value="BPO & வாடிக்கையாளர் சேவை" label="BPO & வாடிக்கையாளர் சேவை"></v-checkbox>
                                  <v-checkbox  v-if="!language" v-model="Occupation" value="Education &Training " label="Education &Training "></v-checkbox>
                                  <v-checkbox  v-else v-model="OccupationTl" value="கல்வி மற்றும் பயிற்சி" label="கல்வி மற்றும் பயிற்சி"></v-checkbox>
                                  <v-checkbox v-if="!language"  v-model="Occupation" value="Engineering " label="Engineering "></v-checkbox>
                                  <v-checkbox  v-else v-model="OccupationTl" value="பொறியியல் " label="பொறியியல் "></v-checkbox>
                                  <v-checkbox  v-if="!language" v-model="Occupation"  value="others" label="others"></v-checkbox>
                                  <v-checkbox  v-else v-model="OccupationTl"  value="மற்றவைகள்" label="மற்றவைகள்"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" >Reset</v-btn>
                                  <v-btn v-else >மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language"  @click="Occupationdialog=false">Apply</v-btn>
                                  <v-btn  v-else  @click="Occupationdialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <!---------------Annuval income------------------------>
                      <div  class="flex ">
                        <v-row >
                          <v-col cols="4">
                            <h2 v-if="!language">Annual Income</h2>
                            <h2  v-else >ஆண்டு வருமானம்</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ min_Annuval }} to {{ max_Annuval }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="AnnualIncomedialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="AnnualIncomedialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2 v-if="!language" class="font-bold text-h6">Select Annual Income</h2>
                                  <h2 v-else  class="font-bold text-h6">ஆண்டு வருமானத்தைத் தேர்ந்தெடுக்கவும்</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="AnnualIncomedialog=false" class="text-h5">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <div class="flex">
                                    <v-col cols="5">
                                    <v-autocomplete
                                      :items="['Less than Rs.50 thosand', 'Rs. 50 thosand', 'Rs. 1 Lakh', 'Rs. 2 Lakhs', 'Rs. 3 Lakhs']"
                                      variant="outlined"
                                      v-model="min_Annuval"
                                    ></v-autocomplete>
                                  </v-col>
                                <v-col cols="2" class="text-center mt-3">
                                  to
                                </v-col>
                                  <v-col cols="5">
                                    <v-autocomplete
                                      :items="['Less than Rs.50 thosand', 'Rs. 50 thosand', 'Rs. 1 Lakh', 'Rs. 2 Lakhs', 'Rs. 3 Lakhs']"
                                      variant="outlined"
                                      v-model="max_Annuval"
                                    ></v-autocomplete>
                                  </v-col>
                                  </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn v-else >மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" @click="AnnualIncomedialog=false">Apply</v-btn>
                                  <v-btn v-else  @click="AnnualIncomedialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <!---------------Employment Type------------------------>
                      <div  class="flex ">
                        <v-row >
                          <v-col cols="4">
                            <h2  v-if="!language" >Employment Type</h2>
                            <h2  v-else >வேலைவாய்ப்பு வகை</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2 v-if="!language" >{{ EmploymentType }}</h2>
                            <h2 v-else>{{ EmploymentTypeTl }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="EmploymentTypedialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="EmploymentTypedialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2 v-if="!language" class="mt-2 font-bold">Select Employment Type</h2>
                                  <h2 v-else class="mt-2 font-bold">வேலைவாய்ப்பு வகையைத் தேர்ந்தெடுக்கவும்</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="EmploymentTypedialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-if="!language" v-model="EmploymentType"  value="Any"  label="Any"></v-checkbox>
                                  <v-checkbox  v-else v-model="EmploymentTypeTl"  value="ஏதேனும்"  label="ஏதேனும்"></v-checkbox>
                                  <v-checkbox v-if="!language" v-model="EmploymentType"  value="Private" label="Private"></v-checkbox>
                                  <v-checkbox  v-else v-model="EmploymentTypeTl"  value="தனியார்" label="தனியார்"></v-checkbox>
                                  <v-checkbox v-if="!language" v-model="EmploymentType" value="Self employed" label="Self employed"></v-checkbox>
                                  <v-checkbox  v-else v-model="EmploymentTypeTl" value="சுயதொழில்" label="சுயதொழில்"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn   v-else >மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" @click="EmploymentTypedialog=false">Apply</v-btn>
                                  <v-btn   v-else  @click="EmploymentTypedialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <!---------------Education------------------------>
                      <div  class="flex ">
                        <v-row >
                          <v-col cols="4">
                            <h2 v-if="!language"> Education</h2>
                            <h2 v-else >கல்வி</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2 v-if="!language">{{ Education }}</h2>
                            <h2 v-else>{{ EducationTl }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="Educationdialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="Educationdialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2 v-if="!language" class="mt-2 font-bold">Select Education</h2>
                                  <h2 v-else  class="mt-2 font-bold">கல்வியைத் தேர்ந்தெடுக்கவும்</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Educationdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-if="!language" v-model="Education" value="Any" label="Any"></v-checkbox>
                                  <v-checkbox v-else  v-model="EducationTl" value="ஏதேனும்" label="ஏதேனும்"></v-checkbox>
                                  <v-checkbox v-if="!language"  v-model="Education" value="Bachelors - Engineering / Computers / Others" label="Bachelors - Engineering / Computers / Others"></v-checkbox>
                                  <v-checkbox  v-else  v-model="EducationTl" value="இளங்கலை - பொறியியல் / கணினி / பிற" label="இளங்கலை - பொறியியல் / கணினி / பிற"></v-checkbox>
                                  <v-checkbox v-if="!language"  v-model="Education" value="Bachelors - Arts / Science / Commerce / others" label="Bachelors - Arts / Science / Commerce / others"></v-checkbox>
                                  <v-checkbox v-else  v-model="EducationTl" value="இளங்கலை - கலை / அறிவியல் / வணிகம் / பிற" label="இளங்கலை - கலை / அறிவியல் / வணிகம் / பிற"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn v-else >மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" @click="Educationdialog=false">Apply</v-btn>
                                  <v-btn v-else  @click="Educationdialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <h2 class="text-h6 font-semibold">Location Details</h2>
                      <!---------------Country--------------->
                      <div  class="flex  mt-5">
                        <v-row >
                          <v-col cols="4">
                            <h2 v-if="!language">Country</h2>
                            <h2  v-else >நாடு</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2 v-if="!language">{{ Country }}</h2>
                            <h2 v-else>{{ CountryTl }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="Countrydialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="Countrydialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2  v-if="!language" class="mt-2 font-bold">Select Country</h2>
                                  <h2   v-else  class="mt-2 font-bold">நாட்டினை தேர்வுசெய்</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Countrydialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-if="!language" v-model="Country" value="Any" label="Any"></v-checkbox>
                                  <v-checkbox   v-else  v-model="CountryTl" value="ஏதேனும்" label="ஏதேனும்"></v-checkbox>
                                  <v-checkbox v-if="!language" v-model="Country" value="India" label="India"></v-checkbox>
                                  <v-checkbox   v-else v-model="CountryTl" value="இந்தியா" label="இந்தியா"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn  v-else >மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" @click="Countrydialog=false">Apply</v-btn>
                                  <v-btn  v-else  @click="Countrydialog=false">விண்ணப்பி</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <div  class="flex ">
                        <v-row >
                          <v-col cols="4">
                            <h2 v-if="!language">Citizenship</h2>
                            <h2 v-else>குடியுரிமை</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2 v-if="!language">{{ Citizenship }}</h2>
                            <h2 v-else>{{ CitizenshipTl }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="Citizenshipdialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="Citizenshipdialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2 v-if="!language" class="mt-2 font-bold">Select Citizenship</h2>
                                  <h2 v-else class="mt-2 font-bold">குடியுரிமையைத் தேர்ந்தெடுக்கவும்</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Citizenshipdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-if="!language" v-model="Citizenship" value="India" label="India"></v-checkbox>
                                  <v-checkbox v-else v-model="CitizenshipTl" value="இந்தியா" label="இந்தியா"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language">Reset</v-btn>
                                  <v-btn v-else>மீட்டமை</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn v-if="!language" @click="Citizenshipdialog=false">Apply</v-btn>
                                  <v-btn  v-else @click="Citizenshipdialog=false">விண்ணப்பி</v-btn>
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
        </v-row>
    </v-container>
          </template>

<script setup>
import { ref } from 'vue'
 const tab = ref(null)
 const language = ref(false)
 const dialog = ref (false)
 const heightdialog = ref (false)
 const Maritaldialog = ref (false)
 const stardialog = ref (false)
 const Religiousdialog = ref (false)
 const Castedialog = ref (false)
 const Dhosamdialog = ref (false)
 const Occupationdialog = ref (false)
 const AnnualIncomedialog = ref (false)
 const EmploymentTypedialog = ref (false)
 const Educationdialog = ref (false)
 const Countrydialog = ref (false)
 const Citizenshipdialog = ref (false)
 const min_age = ref('18')
 const max_age = ref('30')
 const min_Annuval = ref('Any')
 const max_Annuval = ref('Any')
 const min_height = ref('4.6')
 const max_height = ref('5.6')
 const maritalstatus = ref('Any')
 const maritalstatusTl = ref('ஏதேனும்')
 const star = ref('Any')
 const starTl = ref('ஏதேனும்')
 const Religious = ref('Hindu')
 const ReligiousTl = ref('ஏதேனும்')
 const Caste = ref('Hindu')
 const CasteTl = ref('ஏதேனும்')
 const Dhosam = ref('Doesnot Matter')
 const DhosamTl = ref('முக்கியமில்லை')
 const Occupation = ref('Any')
 const OccupationTl = ref('ஏதேனும்')
 const AnnualIncome = ref('Any')
 const EmploymentType = ref('Any')
 const EmploymentTypeTl = ref('ஏதேனும்')
 const Education = ref('Any')
 const EducationTl = ref('ஏதேனும்')
 const Country = ref('Any')
 const CountryTl = ref('ஏதேனும்')
 const Citizenship = ref('Any')
 const CitizenshipTl = ref('ஏதேனும்')
 const profiles = ref([''])

 </script>