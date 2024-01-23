<template>
    <v-container>
        <p> {{ profile }} </p>
    </v-container>
</template>

<script setup>
const route = useRoute()
const supabase = useSupabaseClient()
let profile =ref(null)
const id = route.params.Id
onMounted (async()=>{
    
    let { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    profile.value = profiles
    console.log(profile);
})
</script>