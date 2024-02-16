<template>
 <form ref="form" class="row flex-center flex" @submit.prevent="handleLogin">
  <!-- <div>Current Count: {{ counter.loggedIn }}</div> -->
<v-container>
        <v-row align="center" justify="center">
            <v-col justify="center" align="center" cols="12">
                <v-card max-width="700px">
                    <v-card-text>
                      <v-text-field label="Name" v-model="name" :rules="firstNameRules"  :counter="10" variant="outlined" required></v-text-field>
                      
                      <v-radio-group inline v-model="gender"  >
                            <v-radio label="Male"    class="border border-black pr-5"  value="male"></v-radio>
                            <v-radio label="Female"  class="border border-black pr-5 ml-5"  value="female"></v-radio>
                      </v-radio-group>
                       <v-row v-model="dob" >
                        <v-col cols="3">
                        <v-select
                        label="Day"
                        :items="['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15']"
                        variant="outlined"
                        :rules="dobRules1"
                        v-model="date"
                        required
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-select
                        label="Month"
                        v-model="Month"
                        :rules="dobRules2"
                        :items="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec',]"
                        variant="outlined"
                        required
                        ></v-select>
                    </v-col>
                    <v-col cols="5">
                        <v-select
                        label="Year"
                        :rules="dobRules3"
                        v-model="year"
                        :items="['2002', '2001', '2000', '1999', '1998', '1997','1996','1995','1994','1993','1992','1991','1990']"
                        variant="outlined"
                        required
                        ></v-select>
                    </v-col>
                      </v-row>
                      <v-select  v-model="MaritalStatus" label="Marital Status"
                      :rules="[v => !!v || 'MaritalStatus is required']"
                            :items="['Never Married', 'Windower', 'Divorced', 'Awaiting Divorce']"
                            variant="outlined" required>
                      </v-select>
                      <v-select
                        v-model="caste"
                        label="Caste"
                      :rules="[v => !!v || 'Caste is required']"
                      required
                        :items="['Intercaste', 'Irani', 'Others', 'Parsi','Dont wish to specify']"
                        variant="outlined">
                      </v-select>
                      <v-row>
                        <v-col cols="6">
                          <v-text-field v-model="FatherName" :rules="fateherNameRules" label="Father Name" required variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field v-model="FatherOccupation  " :rules="fateherNameOccupation" required label="Father Occupation" variant="outlined"></v-text-field>
                        </v-col>
                      </v-row>
                      
                      <v-row>
                        <v-col cols="6">
                        <v-text-field v-model="MotherName" label="Mother Name" :rules="motherNameRules" required variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                        <v-text-field v-model="MotherOccupation" label="MotherOccupation" required :rules="motherOccupation" variant="outlined"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6">
                            <v-text-field label="Age" v-model="age"  :rules="AgeRules" required variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="Height" v-model="height" :rules="HeightRules" required variant="outlined"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-select
                            label="Religion"
                            v-model="Religion"
                            :rules="[v => !!v || 'Religion is required']"
                            :items="['Hindu', 'Muslim', 'Christian']"
                            required
                            variant="outlined">
                       </v-select>
                       <v-select
                            label="Education"
                            v-model="Education"
                            :rules="[v => !!v || 'Education is required']"
                            :items="['UG', 'PG', 'SSLC','HSLC','Diplomo',]"
                            variant="outlined"
                            required>
                        </v-select>
                        <v-select
                            label="Profession"
                            v-model="Profession"
                            :rules="[v => !!v || 'Profession is required']"
                            :items="['Doctor', 'IT', 'Non IT','Bussiness','Civil','Goverment Job','Others']"
                            required
                            variant="outlined">
                        </v-select>
                        <v-row>
                          <v-col cols="12">
                          <v-text-field label="lives" v-model="lives" :rules="livesRules"  variant="outlined" required></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <v-text-field label="ElderBrother" type="number" v-model="ElderBrothers" variant="outlined"></v-text-field>
                          </v-col>
                          <v-col cols="6">
                         <v-text-field label="YoungerBrother" v-model="YoungerBrother" type="number" variant="outlined" ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <v-text-field label="ElderSister" type="number" v-model="ElderSister" variant="outlined" ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                         <v-text-field label="YoungerSister" v-model="YoungerSister" type="number" variant="outlined"  ></v-text-field>
                          </v-col>
                        </v-row>
                        
                      <v-text-field label="Rashi" :rules="RashiRules" v-model="Rashi"  variant="outlined" required></v-text-field>
                      <v-text-field label="Nadchathiram " :rules="NadchathiramRules"  v-model="Nadchathiram" required variant="outlined"></v-text-field>
                      <v-text-field label="Thosam" :rules="ThosamRules" v-model="Thosam" required variant="outlined"></v-text-field>
                      <v-text-field  v-model="FamilyGod"  label="Family God" variant="outlined"></v-text-field>
                      <v-text-field label="Mobile Number" :rules="MobileRules" v-model="mobile" required variant="outlined"></v-text-field>
                      <v-text-field v-model="email" type="email" label="Enter Your Email" variant="outlined"></v-text-field>
                      <v-text-field v-model="password" type="password" label="Enter Your Password" variant="outlined"></v-text-field>
                      <v-row>
                        <v-col cols="6" >
                          <v-file-input  v-model="photos" prepend-icon="mdi-camera"  variant="outlined" label="Photo Upload"></v-file-input>
                        </v-col>
                        
                      </v-row>

                      <!-- <v-menu v-model="date_menu" :close-on-content-click="false">
                        <template v-slot:activator="{ props }">
                          <v-text-field @click="date_menu = true" v-model="dob" v-bind="props" label="Date of birth"></v-text-field>
                        </template>
                        <v-date-picker v-model="date"></v-date-picker>
                      </v-menu>
                      <v-text-field @click="date_menu = true" v-model="dob" label="Date of birth">
                        <v-menu  v-model="date_menu" :close-on-content-click="false">
                          <v-date-picker @update:model-value="setDob" :model-value="date"></v-date-picker>
                        </v-menu>
                      </v-text-field> -->
                    </v-card-text>
                    <v-card-actions>
                        <v-btn type="submit" :loading="loading" block variant="outlined" color="green">sign up</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </form>
  </template>
<script setup>
import { useCounterStore } from '@/stores/index'
const supabase = useSupabaseClient()
const loading = ref(false)
const user = useSupabaseUser()
const email = ref('')
const password = ref('')
const counter = useCounterStore()
const name = ref('')
const age = ref('')
const lives = ref('')
const height = ref('')
const mobile = ref('')
const MaritalStatus = ref(null)
const caste = ref(null)
const Religion = ref(null)
const Education = ref(null)
const Profession = ref(null)
const Rashi = ref(null)
const Nadchathiram = ref(null)
const Thosam = ref(null)
const ElderBrothers = ref(null)
const YoungerBrother = ref(null)
const ElderSister = ref(null)
const YoungerSister = ref(null)
const FatherName = ref(null)
const MotherName = ref(null)
const FatherOccupation = ref(null)
const MotherOccupation = ref(null)
const FamilyGod = ref(null)
const photos = ref(null)
const dob =ref(null)
const date = ref(null)
const Month = ref(null)
const year = ref(null)
const gender = ref(null)
let date_menu = ref(false)
const form = ref()


// let dob = ref(null)
  
// with autocompletion ✨
//counter.$patch({ count: counter.count + 8 })
// or using an action instead
//counter.increment()

// function setDob() {
//   dob.value = new Date(date.value).toLocaleDateString('en-IN')
//   console.log(date.value);
//   date_menu.value = false
// }
const firstNameRules = [
    value => {
      if (value?.length > 3) return true
      return 'First name must be at least 3 characters.'
    },
  ]
const fateherNameRules = [
    value => {
      if (value?.length > 3) return true
      return 'Father name must be at least 3 characters.'
    },
  ]
const motherNameRules = [
    value => {
      if (value?.length > 3) return true
      return 'Mother name must be at least 3 characters.'
    },
  ]
const motherOccupation = [
    value => {
      if (value?.length > 0) return true
      return 'Mother Occupation not set.'
    },
  ]
const fateherNameOccupation = [
    value => {
      if (value?.length > 0) return true
      return 'Father Occupation not set.'
    },
  ]
  const dobRules1 = [
    value => {
      if (value) return true
      return 'Date or not set '
    },
  ]
  const dobRules2 = [
    value => {
      if (value) return true
      return 'Month or not set '
    },
  ]
  const dobRules3 = [
    value => {
      if (value) return true
      return 'Year or not set '
    },
  ]
  const AgeRules = [
    value => {
      if (value) return true
      return 'Age or not set '
    },
  ]
  const HeightRules = [
    value => {
      if (value) return true
      return 'height or not set '
    },
  ]
  const livesRules = [
    value => {
      if (value?.length > 4) return true
      return 'lives area not '
    },
  ]
  const RashiRules = [
    value => {
      if (value?.length > 4) return true
      return 'Rashi are not  support'
    },
  ]
  const NadchathiramRules = [
    value => {
      if (value?.length > 4) return true
      return 'Nadchathiram are  not support '
    },
  ]
  const ThosamRules = [
    value => {
      if (value?.length > 4) return true
      return 'Thosam are  not support '
    },
  ]
  const MobileRules = [
    value => {
      if (value?.length > 10) return true
      return 'Mobile number error '
    },
  ]
const handleLogin = async (e) => {
  try { 
    loading.value = true
    const { data,error } = await supabase.auth.signUp({ 
      email: email.value,
      password: password.value
     })

    if (data.user)  {
      let profile = {  
            name: name.value, 
            age: age.value, 
            height: height.value, 
            lives: lives.value, 
            mobile: +mobile.value,
            gender : gender.value,
            MaritalStatus : MaritalStatus.value,
            caste :caste.value,
            Religion :Religion.value,
            Education :Education.value,
            Profession :Profession.value,
            Rashi :Rashi.value,
            Nadchathiram :Nadchathiram.value,
            Thosam :Thosam.value,
            ElderBrothers :ElderBrothers.value,
            YoungerBrother :YoungerBrother.value,
            ElderSister :ElderSister.value,
            YoungerSister :YoungerSister.value,
            FatherName :FatherName.value,
            MotherName :MotherName.value,
            FatherOccupation :FatherOccupation.value,
            MotherOccupation:MotherOccupation.value,
            FamilyGod:FamilyGod.value,
            dob: Date.parse(`${date.value} ${Month.value} ${year.value} 00:00:00 GMT`),
            type: 'user',
            photos:"https://myizzcmzjfnzaldgrqgw.supabase.co/storage/v1/object/public/images/photos/"+photos.value[0].name
      }
      const {data,error}= await supabase.storage.from('images').upload(`photos/${photos.value[0].name}`,photos.value[0])  
      await supabase
        .from('profiles')
        .insert([profile])
        .then((res) => {
        if(res.error) {
          navigateTo('/')
        }
      })
    }else{
      console.log(error)
    }
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
</script>



