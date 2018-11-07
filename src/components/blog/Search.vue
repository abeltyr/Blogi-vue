<template lang="html" >
    <div>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs10 offset-xs1>
              <v-text-field
                :counter="100"
                label="Search Blog By Title"
                required
                class="mt-1"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()">
              </v-text-field>
            </v-flex>
            <v-flex lg5 offset-lg5 xs10 offset-xs3 md5 offset-md5 sm5 offset-sm5>
              <v-btn large color="success" >SEARCH</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
    </div>    
</template>
