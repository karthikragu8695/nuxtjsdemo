<template>
    <v-container>
        <v-card-text>
        <v-list lines="two" subheader>
          <v-col class="text-center">
            <v-avatar  color="grey" size="150" rounded="90">
                <v-img cover src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></v-img>
            </v-avatar>
          </v-col>
          <v-list   class="font-bold text-center  text-h5" >L.mathan</v-list>

        </v-list>
        <v-row class="mt-10">
            <v-col cols="6" >
               <label class="text-h5">name</label>
            </v-col>
            <v-col cols="6">
              <h2 class=""></h2>
            </v-col>
        </v-row>
        <v-row >
            <v-col cols="6">
                <label class="text-h5">dob</label>
            </v-col>
            <v-col cols="6">
                <h2></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">gender</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">FatherName</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">MotherName</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">FatherOccupation</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">MotherOccupation</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">mobile</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">MaritalStatus</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">caste</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">Religion</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">Education</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">Profession</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">Rashi</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">Nadchathiram</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">Thosam</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">ElderBrothers</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">YoungerBrother</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">ElderSister</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">YoungerSister</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="">
                <label class="text-h5">FamilyGod</label>
            </v-col>
            <v-col cols="6">
                <h2 ></h2>
            </v-col>
        </v-row>
      
    </v-card-text >
    </v-container>
</template>
<script setup>
const supabase = useSupabaseClient()
onMounted(async() => {
  let { data: profiles, error } = await supabase
  .from('profiles')
  .select('id')
  items.value = profiles
  console.log(data);
})
</script>