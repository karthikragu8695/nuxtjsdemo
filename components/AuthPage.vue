<template>
 <form class="row flex-center flex" @submit.prevent="handleLogin">
  <!-- <div>Current Count: {{ counter.loggedIn }}</div> -->
<v-container>
        <v-row align="center" justify="center">
            <v-col justify="center" align="center" cols="12">
              
                <v-card max-width="700px">
                  
                    <v-card-text>
                      <v-text-field label="Name" v-model="name"  variant="outlined"></v-text-field>
                      <v-radio-group inline   >
                            <v-radio label="Male"  class="border border-black pr-5"  value="one"></v-radio>
                            <v-radio label="Female" class="border border-black pr-5 ml-5"  value="two"></v-radio>
                      </v-radio-group>
                      <v-text-field label="Mobile Number" v-model="mobile"  variant="outlined"></v-text-field>
                      <v-text-field v-model="email" type="email" label="Enter Your Email" variant="outlined"></v-text-field>
                      <v-text-field v-model="password" type="password" label="Enter Your Password" variant="outlined"></v-text-field>
                      <!-- <v-menu v-model="date_menu" :close-on-content-click="false">
                        <template v-slot:activator="{ props }">
                          <v-text-field @click="date_menu = true" v-model="dob" v-bind="props" label="Date of birth"></v-text-field>
                        </template>
                        <v-date-picker v-model="date"></v-date-picker>
                      </v-menu> -->
                      <v-text-field @click="date_menu = true" v-model="dob" label="Date of birth">
                        <v-menu  v-model="date_menu" :close-on-content-click="false">
                          <v-date-picker @update:model-value="setDob" :model-value="date"></v-date-picker>
                        </v-menu>
                      </v-text-field>
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
const mobile = ref('')
const date = ref(null)
let date_menu = ref(false)
let dob = ref(null)
console.log(counter);

// with autocompletion ✨
//counter.$patch({ count: counter.count + 8 })
// or using an action instead
//counter.increment()

function setDob() {
  dob.value = new Date(date.value).toLocaleDateString('en-IN')
  console.log(date.value);
  date_menu.value = false
}

const handleLogin = async () => {
  try {
    loading.value = true
    const { data,error } = await supabase.auth.signUp({ email: email.value,password: password.value })
    if (data.user)  {
      // console.log(data);
      await supabase
        .from('profiles')
        .insert([
          {  name: name.value, mobile: +mobile.value },
      ])
      .then((res) => {
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



