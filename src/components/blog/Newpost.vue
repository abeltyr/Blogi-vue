<template lang="html">
    <div>
        <v-card  style=" margin:0px;">
            
            <v-container grid-list-sm class="pa-4">
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-text-field
                            v-model="name"
                            prepend-icon="notes"
                            :error-messages="nameErrors"
                            :counter="25"
                            label="Title"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field
                            prepend-icon="photo"
                            placeholder="Image"
                            :value="image"
                            disabled>
                        </v-text-field>
                    </v-flex>
                    <v-flex lg5 offset-lg5 xs10 offset-xs3 md5 offset-md5 sm5 offset-sm5>
                        <v-btn large color="success" @click="image_tags">Get Image</v-btn>
                    </v-flex>
                    <v-flex v-if="image_tag" xs12>
                        <v-text-field
                            v-model="image_name"
                            prepend-icon="party_mode"
                            :error-messages="imagenameErrors"
                            :counter="35"
                            label="Enter Key word"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()">
                        </v-text-field>
                        <v-flex lg5 offset-lg5 xs10 offset-xs3 md5 offset-md5 sm5 offset-sm5>
                            <v-btn large @click="image_sups" >Search</v-btn>
                        </v-flex>
                    </v-flex>
                    <v-flex xs12 sm8 offset-sm2  v-if="image_sup">
                        <v-card>
                            <v-container grid-list-sm fluid>
                                <v-layout row wrap>
                                    <v-flex
                                    v-for="n in 9"
                                    :key="n"
                                    xs4
                                    d-flex>
                                        <v-card flat tile class="d-flex" >
                                            <v-img
                                                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                                aspect-ratio="1"
                                                @click="image = `https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                                class="grey lighten-2">
                                                <v-layout
                                                    slot="placeholder"
                                                    fill-height
                                                    align-center
                                                    justify-center
                                                    ma-0 >
                                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                </v-layout>
                                            </v-img>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <textarea class="t_area"
                            label="Solo textarea"
                            placeholder="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                        ></textarea>
                    </v-flex>

                </v-layout>
            </v-container>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btnnn" style="background: #A6C7D2; color: #33505e;" >Upload</v-btn>
            </v-card-actions>
      </v-card>
    </div>
</template>


<script>
const token = localStorage.getItem("token");
export default {
  data: () => ({
    image: "",
    name: "",
    image_name: "",
    image_tag: 0,
    image_sup: 0,
    nameErrors: "",
    imagenameErrors: "",
    me: []
  }),
  methods: {
    image_tags() {
      if (this.image_tag === 0) {
        this.image_tag = 1;
      } else if (this.image_tag === 1) {
        this.image_tag = 0;
      }
    },
    image_sups() {
      if (this.image_sup === 0) {
        this.image_sup = 1;
      }
      // else if (this.image_sup === 1) {
      //   this.image_sup = 0;
      // }
    }
  },
  // eslint-disable-next-line
  created: function() {
    if (token) {
      this.me = this.$jwt.decode(token);
    }
  }
};
</script>