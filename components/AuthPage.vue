<template>
 <form class="row flex-center flex" @submit.prevent="handleLogin">
  <!-- <div>Current Count: {{ counter.loggedIn }}</div> -->
<v-container>
        <v-row align="center" justify="center">
            <v-col justify="center" align="center" cols="12">
                <v-card max-width="700px" title="sign in">
                    <v-card-text>
                        <v-text-field v-model="email" type="email" label="Email"></v-text-field>
                        <v-text-field v-model="password" type="password" label="Password"></v-text-field>
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

console.log(counter);

// with autocompletion ✨
//counter.$patch({ count: counter.count + 8 })
// or using an action instead
//counter.increment()
const handleLogin = async () => {
  try {
    loading.value = true
    const { data,error } = await supabase.auth.signInWithPassword({ email: email.value,password: password.value })
    if (data)  {
      console.log(data);
      navigateTo('/')
      console.log("login successfull")
    }
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
// watch(user, () => {
//   if (user.value) {
//     return navigateTo('/')
//   }
// }, { immediate: true })

</script>



