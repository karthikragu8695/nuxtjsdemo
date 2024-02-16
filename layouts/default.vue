<template>
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
    <v-app-bar :elevation="10">
        <v-app-bar-title><v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyvLdlSnwfyHe7Xoz4rNZcHdYJKlKnxUUkxMM7J92wSC8PCoT8IuiVgf3Qp5ykBFrBUg&usqp=CAU" class="w-20"></v-img></v-app-bar-title>
      <div class="text-4xl">
        <v-spacer></v-spacer>
        <v-btn   @click="show=true" size="large" class="text-orange px-3">Login </v-btn>
      </div>
      </v-app-bar>
       <div  class=" md:flex md:items-center md:w-auto w-full order-2 md:order-2"  id="menu">
      </div>
      </div>
      <v-dialog v-model="show" fullscreen  transition="slide-x-reverse-transition">
              <v-sheet class=" pa-12" rounded>
                <v-card class="mx-auto " width="344">
                  <h2 class="text-center mb-5 ">Hi,Welcome back</h2>
                  <v-form
                     @submit.prevent="signIn">
                    <v-text-field
                      v-model="email"
                      :readonly="loading"
                      class="mb-2"
                      clearable
                      label="Email"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      :readonly="loading"
                      clearable
                      label="Password"
                      placeholder="Enter your password"
                    ></v-text-field>
                    <br>
                    <v-btn
                      
                      :loading="loading"
                      block
                      color="success"
                      size="large"
                      type="submit"
                      variant="elevated">Sign In
                    </v-btn>
                    <div class="mx-auto text-center my-5">
                    Dont't have an account<a href="/auth"> signUp</a>
                    </div>
                  </v-form>
                </v-card>
              </v-sheet>
      </v-dialog>
<v-main>
  <NuxtPage/>
</v-main>
</template>
<script setup>
import { useCounterStore } from '@/stores/index'
const counter = useCounterStore()
const supabase = useSupabaseClient()
const loading = ref(false)
const email = ref('')
const show =ref (false)
const password = ref('')



const  signIn= async () => {
    loading.value = true
    const { data,error } = await supabase.auth.signInWithPassword(
      {
        email: email.value,
        password: password.value
      }
      
    )
    if (data.user)  {
      console.log(data);
      navigateTo ('/')
    }else{
      loading.value=false
      console.log(error)
    }
console.log(email)
  }
   
</script>

<!-- <script>
  export default {
    data: () => ({
      form: false,
      email: null,
      password: null,
      loading: false,
      show:false
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
  }
</script> -->