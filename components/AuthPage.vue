<template>
 <form class="row flex-center flex" @submit.prevent="handleLogin">
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
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value,password: password.value })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}


</script>



