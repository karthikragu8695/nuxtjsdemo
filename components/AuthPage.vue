<template>
    <v-container>
    <v-sheet class="bg-deep-purple pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form
          v-model="form"
          @submit.prevent="signUpNewUser"
          >
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Email">
          </v-text-field>
  
          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Password"
            placeholder="Enter your password">
          </v-text-field>
          <br>
          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated">
            Sign up
          </v-btn>
          <!-- <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="SignIn"
            variant="elevated">
            Sign In
          </v-btn> -->
        </v-form>
      </v-card>
    </v-sheet>
</v-container>
  </template>



 <script>
 export default {
   data: () => ({
     form: false,
     email: null,
     password: null,
     loading: false,
     error:false,
     errortext:''
     
   }),
   

   methods: {
    async  signUpNewUser() {
      const supabase = useSupabaseClient()
       const { user, error } = await supabase.auth.signUp({
    email: 'karthik@email.com',
    password: '12345',
  }).catch((error)=>{
    this.errortext=error.message
  }   
    )},
    
  //   async signInWithEmail() {
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: 'example@email.com',
  //     password: 'example-password'
  //   })
  // },
     required (v) {
       return !!v || 'Field is required'
     },
   },
 }
 
 
</script>