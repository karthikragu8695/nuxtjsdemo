<template>
    <v-container >
        <v-btn @click="dialog=true">Add Profile</v-btn> 
        <v-card class="mt-10">
        <v-data-table
          :headers="headers"
          :items="items"
          item-value="name">
            <template v-slot:[`item.dob`]="{ item }">
                {{toLocalDate(item.dob)}}
            </template>
        </v-data-table>
        </v-card>
            <v-dialog v-model="dialog"  fullscreen :scrim="false" transition="slide-x-reverse-transition">
                <v-list>
                    <v-form ref="form" @submit.prevent="Add">
                 <v-row align="center" justify="center">
                    <v-col justify="center" align="center" cols="12">
                        <v-card >
                            <v-card-text>
                                <v-row class="flex">
                                    <v-col cols="2" class="bg-red py-3" @click="dialog=false">Cancel</v-col><v-spacer/>
                                    <v-col  cols="2" class="bg-green py-3" >Save</v-col>
                                </v-row>
                            <v-text-field label="Name" v-model="name" :rules="firstNameRules"  :counter="10" required class="mt-10"  variant="outlined"></v-text-field>
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
                                required
                                v-model="date">
                            </v-select>
                            </v-col>
                            <v-col cols="4">
                                <v-select
                                label="Month"
                                v-model="Month"
                                :rules="dobRules2"
                                required
                                :items="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec',]"
                                variant="outlined"
                                ></v-select>
                            </v-col>
                            <v-col cols="5">
                                <v-select
                                label="Year"
                                v-model="year"
                                :rules="dobRules3"
                                required
                                :items="['2002', '2001', '2000', '1999', '1998', '1997','1996','1995','1994','1993','1992','1991','1990']"
                                variant="outlined"
                                ></v-select>
                            </v-col>
                            </v-row>
                            <v-select  v-model="MaritalStatus" label="Marital Status"
                                    :rules="[v => !!v || 'MaritalStatus is required']"
                                    :items="['Never Married', 'Windower', 'Divorced', 'Awaiting Divorce']"
                                    variant="outlined">
                            </v-select>
                            <v-select
                                v-model="caste"
                                label="Caste"
                                :rules="[v => !!v || 'Caste is required']"
                                :items="['Intercaste', 'Irani', 'Others', 'Parsi','Dont wish to specify']"
                                variant="outlined">
                            </v-select>
                            <v-row>
                                <v-col cols="6">
                                <v-text-field v-model="FatherName" label="Father Name"  :rules="fateherNameRules" required  variant="outlined"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                <v-text-field v-model="FatherOccupation " label="Father Occupation" :rules="fateherNameOccupation" required variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>
                            
                            <v-row>
                                <v-col cols="6">
                                <v-text-field v-model="MotherName" label="Mother Name"  :rules="motherNameRules" required variant="outlined"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                <v-text-field v-model="MotherOccupation" label="MotherOccupation"  required :rules="motherOccupation"  variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6">
                                <v-text-field v-model="age" label="Age" :rules="AgeRules" required variant="outlined"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                <v-text-field v-model="height" label="Height" :rules="HeightRules" required variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>
                
                            <v-select
                                    label="Religion"
                                    v-model="Religion"
                                    :rules="[v => !!v || 'Religion is required']"
                                    :items="['Hindu', 'Muslim', 'Christian']"
                                    variant="outlined">
                            </v-select>
                            <v-select
                                    label="Education"
                                    v-model="Education"
                                    :rules="[v => !!v || 'Education is required']"
                                    :items="['UG', 'PG', 'SSLC','HSLC','Diplomo',]"
                                    variant="outlined">
                                </v-select>
                                <v-select
                                    label="Profession"
                                    v-model="Profession"
                                    :rules="[v => !!v || 'Profession is required']"
                                    :items="['Doctor', 'IT', 'Non IT','Business','Civil','Goverment Job','Others']"
                                    variant="outlined">
                                </v-select>
                                <v-row>
                                <v-col cols="6">
                                    <v-text-field label="ElderBrother" type="number" v-model="ElderBrothers"  variant="outlined"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                <v-text-field label="YoungerBrother" v-model="YoungerBrother" type="number" variant="outlined"></v-text-field>
                                </v-col>
                                </v-row>
                                <v-row>
                                <v-col cols="6">
                                    <v-text-field label="ElderSister" type="number" v-model="ElderSister" variant="outlined"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                <v-text-field label="YoungerSister" v-model="YoungerSister" type="number" variant="outlined"></v-text-field>
                                </v-col>
                                </v-row>
                                
                            <v-text-field label="lives" v-model="lives" :rules="livesRules" required variant="outlined"></v-text-field>
                            <v-text-field label="Rashi" v-model="Rashi" :rules="RashiRules" required variant="outlined"></v-text-field>
                            <v-text-field label="Nadchathiram" v-model="Nadchathiram"  :rules="ThosamRules"  required variant="outlined"></v-text-field>
                            <v-text-field label="Thosam" v-model="Thosam" required variant="outlined"></v-text-field>
                            <v-text-field  v-model="FamilyGod"  label="Family God" variant="outlined"></v-text-field>
                            <v-text-field label="Mobile Number" v-model="mobile" :rules="MobileRules" required  variant="outlined"></v-text-field>
                            </v-card-text>
                            <v-row>
                              <v-col cols="6" >
                                <v-file-input  v-model="photos" prepend-icon="mdi-camera"  variant="outlined" label="Photo Upload"></v-file-input>
                              </v-col>
                            </v-row>
                            <v-card-actions>
                                <v-btn type="submit" :loading="loading" block variant="outlined" color="green">Add profile</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                 </v-row>
            </v-form>
          </v-list>
        </v-dialog>
    </v-container>
</template>
<script setup>
import { useCounterStore } from '@/stores/index'
const dialog =ref(false)
const supabase = useSupabaseClient()
const loading = ref(false)
const user = useSupabaseUser()
const email = ref('')
const password = ref('')
const counter = useCounterStore()
const name = ref('')
const age = ref('')
const height = ref('')
const lives = ref('')
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
const headers = [
    {
      title: 'Id',
      align: 'start',
      key: 'id',
    },
    {
      title: 'Name',
      align: 'end',
      key: 'name',
    },
    {
      title: 'Gender',
      align: 'end',
      key: 'gender',
    },
    {
      title: 'Date of birth',
      align: 'end',
      key: 'dob',
    },
    {
      title: 'MaritalStatus',
      align: 'end',
      key: 'MaritalStatus',
    },
    {
      title: 'Type',
      align: 'end',
      key: 'Admin',
    },]
const items = ref([])
const toLocalDate = (date) => {
    return new Date(+date).toLocaleDateString('en-IN')
}
onMounted(async() => {
  let { data: profiles, error } = await supabase
  .from('profiles')
  .select('*')
  items.value = profiles
  console.log(profiles);
})
const Add = async () => {
  try { 
    loading.value = true
    
    // const { data,error } = await supabase.auth.signUp({ 
    //   name: email.value,
    //   password: password.value
    //  })
    if (user)  {
      // console.log(data);
      let profile = {  
            name: name.value, 
            age: age.value, 
            height: height.value, 
            lives: lives.value, 
            photos:"https://myizzcmzjfnzaldgrqgw.supabase.co/storage/v1/object/public/images/photos/"+photos.value[0].name,
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
            type:'admin',
            dob: Date.parse(`${date.value} ${Month.value} ${year.value} 00:00:00 GMT`)
      }
      const {data,error}= await supabase.storage.from('images').upload(`photos/${photos.value[0].name}`,photos.value[0])  
      console.log(error)
      console.log(data);
      await supabase
        .from('profiles')
        .insert([profile])
        .select(`name,gender,dob,MaritalStatus`)
      .then((res) => {
        // if(profile){
        //   name.value = profile.name,
        //   gender.value =  profile.gender,
        //   dob.value = profile.dob,
        //   MaritalStatus.value = profile.MaritalStatus
        // }
        // console.log(profile)
         if(!res.error) {
          navigateTo('/')
          console.log("login successfull")
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