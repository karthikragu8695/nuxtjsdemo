<template>
  <v-container>
      <v-row>
        <v-col  lg="4 "    class="hidden w-full lg:block"> 
          <!-- <v-btn  @click="dialog = !dialog" class="rounded-xl px-2 "><span class="mdi mdi-filter-variant text-h5 px-2  "></span>Filter</v-btn> -->
          <details-page ></details-page>
        </v-col>
        
        <v-col lg="8" md="8" sm="12" >
          <div class="lg:hidden block  ">
            <v-dialog  
              v-model="show"
              fullscreen
              :scrim="false"
              transition="scale-transition"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="transparent"
                  dark
                  v-bind="props"
                ><span class="mdi mdi-filter-variant text-h5  "></span>
                 Filter
                </v-btn>
              </template>
              <v-card>
                <v-toolbar
                  dark
                  color="white"
                >
                  <v-btn
                    icon
                    dark
                    @click="show = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn
                      variant="text"
                      @click="show = false"
                    >
                      Save
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-row>
          <v-col class="pl-15">
            <v-tabs v-model="tab"   class="mx-auto text-center  ">
              <v-tab value="one">Filter Profile</v-tab>
              <v-tab value="two">Sort Profile</v-tab>
            </v-tabs>
              <v-card-text>
                <v-window v-model="tab">
                  <v-card v-for="profile in profiles" :key="profile">
                    <v-window-item value="one" class="font-bold text-[15px]"> </v-window-item>
                      <h2 class="text-h6 font-semibold">Basic Details</h2>
                      <!--------------Age---------->
                      <div  class="flex mt-5">
                        <v-row>
                          <v-col cols="4">
                            <h2>Age</h2>
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
                                <div class="flex ">
                                  <h2>select Age</h2>
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
                      <!-------------Height--------->
                      <div  class="flex">
                        <v-row >
                          <v-col cols="4">
                            <h2>Height</h2>
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
                                  <h2>select Height</h2>
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
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="heightdialog=false">Apply</v-btn>
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
                            <h2>Maritalstatus</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ maritalstatus }}</h2>
                          </v-col>
                          <v-col cols="4">
                            <v-icon @click="Maritaldialog=true">mdi-pencil</v-icon>
                          </v-col>
                          <v-col cols="12" class="text-center">
                          </v-col>
                        </v-row>
                        <v-dialog width="400" v-model="Maritaldialog">
                          <v-card class="px-5 py-10 ">
                            <v-row>
                              <v-col cols="12">
                                <div class="flex ">
                                  <h2>select Maritalstatus </h2>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="Maritaldialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12" >
                                <!-- <v-select  v-model="maritalstatus" label="Marital Status"
                                  :items="['Never Married', 'Windower', 'Divorced', 'Awaiting Divorce']"
                                  variant="outlined">
                                </v-select> -->
                                <div>
                                  <v-checkbox  v-model="maritalstatus" value="Any" label="Any"> </v-checkbox>
                                  <v-checkbox v-model="maritalstatus" value="Awaiting Divorce" label="Awaiting Divorce"> </v-checkbox>
                                  <v-checkbox v-model="maritalstatus" value="Divorced" label="Divorced"> </v-checkbox>
                                  <v-checkbox v-model="maritalstatus" value="Never Married" label="Never Married"> </v-checkbox>
                                  <v-checkbox v-model="maritalstatus" value="Widower" label="Widower"> </v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="Maritaldialog=false">Apply</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      
                      <h2 class="text-h6 font-semibold">Religious Details</h2>
                      <!-------------Religious--------->
                      <div  class="flex mt-5">
                        <v-row >
                          <v-col cols="4">
                            <h2>Religious</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ Religious }}</h2>
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
                                  <h2>select Maritalstatus </h2>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="Religiousdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox  v-model="Religious" value="Any" label="Any"></v-checkbox>
                                  <v-checkbox v-model="Religious"   value="Hindu" label="Hindu"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="Religiousdialog=false">Apply</v-btn>
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
                            <h2>Caste</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ Caste }}</h2>
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
                                  <h2 class="mt-2 font-bold">Select Caste </h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Castedialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-model="Caste"  value="Any" label="Any"></v-checkbox>
                                  <v-checkbox v-model="Caste"   value="Brahmin-maithil" label="Brahmin-maithil"></v-checkbox>
                                  <v-checkbox v-model="Caste"  value="Brahmin-Bhumihar" label="Brahmin-Bhumihar"></v-checkbox>
                                  <v-checkbox v-model="Caste"  value="Kumhar" label="Kumhar"></v-checkbox>
                                  <v-checkbox v-model="Caste"  value="Sundhi" label="Sundhi"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="Castedialog=false">Apply</v-btn>
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
                            <h2>star</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ star }}</h2>
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
                                  <h2 class="mt-2 font-bold">Select Star </h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="stardialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-model="star" value="Any"  label="Any"></v-checkbox>
                                  <v-checkbox v-model="star"  value="Ardra/Thiruvathira"  label="Ardra/Thiruvathira"></v-checkbox>
                                  <v-checkbox  v-model="star" value="Revathi"  label="Revathi"></v-checkbox>
                                  <v-checkbox v-model="star" value="Not Specified"   label="Not Specified"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="stardialog=false">Apply</v-btn>
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
                            <h2>Dosha(m)</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ Dhosam }}</h2>
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
                                  <h2 class="mt-2 font-bold">Select Dhosam </h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Dhosamdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-model="Dhosam"   value="Doesn't Matter"  label="Doesn't Matter"></v-checkbox>
                                  <v-checkbox  v-model="Dhosam"   value="Don't Know" label="Don't Know"></v-checkbox>
                                  <v-checkbox  v-model="Dhosam"  value="No Dhosham" label="No Dhosham"></v-checkbox>
                                  <v-checkbox  v-model="Dhosam"   value="Not Specified" label="Not Specified"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="Dhosamdialog=false">Apply</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
  
                      <!-------------Occupation-------------------->
                      <h2 class="text-h6 font-semibold">Professional Details</h2>
                      <div  class="flex mt-5">
                        <v-row >
                          <v-col cols="4">
                            <h2>Occupation</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ Occupation }}</h2>
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
                                  <h2 class="mt-2 font-bold">Select Occupation</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Occupationdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-model="Occupation"  value="Any" label="Any"></v-checkbox>
                                  <v-checkbox v-model="Occupation" value="Administration" label="Administration"></v-checkbox>
                                  <v-checkbox v-model="Occupation" value="BPO & Customer Service" label="BPO & Customer Service"></v-checkbox>
                                  <v-checkbox v-model="Occupation" value="Education &Training " label="Education &Training "></v-checkbox>
                                  <v-checkbox v-model="Occupation" value="Engineering " label="Engineering "></v-checkbox>
                                  <v-checkbox v-model="Occupation"  value="others" label="others"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="Occupationdialog=false">Apply</v-btn>
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
                            <h2>Annual Income</h2>
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
                                  <h2 class="font-bold text-h6">Select Annual Income</h2>
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
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="AnnualIncomedialog=false">Apply</v-btn>
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
                            <h2>Employment Type</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ EmploymentType }}</h2>
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
                                  <h2 class="mt-2 font-bold">Select Employment Type</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="EmploymentTypedialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-model="EmploymentType"  value="Any"  label="Any"></v-checkbox>
                                  <v-checkbox  v-model="EmploymentType"  value="Private" label="Private"></v-checkbox>
                                  <v-checkbox  v-model="EmploymentType" value="Self employed" label="Self employed"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="EmploymentTypedialog=false">Apply</v-btn>
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
                            <h2>Education</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ Education }}</h2>
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
                                  <h2 class="mt-2 font-bold">Select Education</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Educationdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-model="Education" value="Any" label="Any"></v-checkbox>
                                  <v-checkbox   v-model="Education" value="Bachelors - Engineering / Computers / Others" label="Bachelors - Engineering / Computers / Others"></v-checkbox>
                                  <v-checkbox  v-model="Education" value="Bachelors - Arts / Science / Commerce / others" label="Bachelors - Arts / Science / Commerce / others"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="Educationdialog=false">Apply</v-btn>
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
                            <h2>Country</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ Country }}</h2>
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
                                  <h2 class="mt-2 font-bold">Select Country</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Countrydialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-model="Country" value="Any" label="Any"></v-checkbox>
                                  <v-checkbox v-model="Country" value="India" label="India"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="Countrydialog=false">Apply</v-btn>
                                </v-col>
                              </v-row>
                            </v-row>
                          </v-card>
                        </v-dialog>
                      </div>
                      <div  class="flex ">
                        <v-row >
                          <v-col cols="4">
                            <h2>Citizenship</h2>
                          </v-col>
                          <v-col cols="4">
                            <h2>{{ Citizenship }}</h2>
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
                                  <h2 class="mt-2 font-bold">Select Country</h2>
                                  <v-spacer></v-spacer>
                                  <v-icon class="text-h4" @click="Citizenshipdialog=false">mdi-close</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field  variant="outlined"><span class="mdi mdi-magnify text-2xl"></span></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div >
                                  <v-checkbox v-model="Citizenship" value="India" label="India"></v-checkbox>
                                </div>
                              </v-col>
                              <v-row>
                                <v-col cols="5">
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn>Reset</v-btn>
                                </v-col>
                                <v-col cols="3.5">
                                  <v-btn @click="Citizenshipdialog=false">Apply</v-btn>
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
              </v-card>
            </v-dialog>
            </div>
          
          <v-container>
           
              <v-card class="mb-5" >
                <v-row v-for="profile in profileList" :key="profile.id" >
                  <v-col    class=" text-center w-full lg:w-1/2   p-3 "  >
                    <NuxtLink  :to="`/${profile.id}`">
                      <v-img :width="210"  class="p-24 mx-auto my-5  rounded-xl" cover aspect-ratio="16/9" v-model:src="profile.photos" >
                        <!-- cover src="https://img.freepik.com/free-photo/portrait-young-man-talking-phone-walking-street_231208-2764.jpg"  -->
                      </v-img>
                    </NuxtLink>
                  </v-col>
                  <v-col >
                    <v-col class="text-left    w-full md:w-1/2 px-5 flex flex-col">
                            <v-row><span class="mdi mdi-shield-check text-blue mt-3  ">id verified</span></v-row>
                            <v-row class="font-bold text-h5 mt-4">{{ profile.name }}</v-row>
                            <!-- <v-row class="text-gray-400 mt-4">M09872334 | Last seen few hour ago</v-row> -->
                            <v-row class="text-left mt-3">
                              <div >
                                <h2>{{ profile.age }}<span class="mx-4">,{{ profile.height }} </span>Adhithiya <span class="mx-4">M.SC. BPO / KPO /ITes </span> </h2>
                                <h2 >{{ profile.Profession }} <span class="mx-4">{{ profile.lives }}</span>  </h2>
                                <h2 class="mt-4 text-gray-400">Interested in her ?</h2>
                                <h2  >Connect Now</h2>
                                <!-- <div class="my-2">
                                  <v-btn class=" border border-black rounded-xl"><span class="mdi mdi-close text-2xl"></span>Dont'show</v-btn>
                                  <v-btn class=" border border-black rounded-xl ml-3 bg-orange"><span class="mdi mdi-check text-2xl"></span>Send Interest</v-btn>
                                </div> -->
                              </div>
                            </v-row>
                            
                    </v-col>
                  </v-col>
                </v-row>
              </v-card >
             
          </v-container>
        </v-col>
      </v-row>
      
  </v-container>

</template>
<script setup>
 const tab = ref(null)
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
 const star = ref('Any')
 const Religious = ref('Hindu')
 const Caste = ref('Hindu')
 const Dhosam = ref('Doesnot Matter')
 const Occupation = ref('Any')
 const AnnualIncome = ref('Any')
 const EmploymentType = ref('Any')
 const Education = ref('Any')
 const Country = ref('Any')
 const Citizenship = ref('Any')
 const profiles = ref([''])
const show =ref(false)
const supabase = useSupabaseClient()

const profileList = ref([])

onMounted(async() =>{
  let { data: profiles, error } = await supabase
  .from('profiles')
  .select('*')
  profileList.value = profiles
})
// const search = async () =>{
//   const { data, error } = await supabase
//   .from('profiles')
//   .select()
//   .eq('age', min_age.value )
//   console.log(data)
//   console.log(profiles)

// }

definePageMeta({
  layout: 'indexlayout',
})
    
 
</script>