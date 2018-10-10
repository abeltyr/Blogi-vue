<template lang="html">
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
      style="background:#DFEBF7;">
      <v-list dense>
          <v-layout row align-center class="mt-3">
            <v-flex xs6>
              <v-subheader >
                <v-icon style="color:#39657B ; font-size:25px;" class="mr-2 mt-2">layers</v-icon>
                <h3 class="mt-3 cati" >
                  CATEGORI
                </h3>
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
            </v-flex>
          </v-layout>
            <a href="#/yes" style="text-decoration: none; margin-top:10%;">
            <v-list>
              <!-- eslint-disable-next-line -->
              <v-list-tile ripple v-on:click="">
                <v-list-tile-action>
                  <v-icon class="ml-4" style="color:#39657B ; font-size:25px;">music_video</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title style="color:#39657B ; font-size:18px;" class="ml-3">
                    MUSIC
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            </a>
            <a href="#/yes" style="text-decoration: none; margin-top:10%;">
            <v-list>
              <!-- eslint-disable-next-line -->
              <v-list-tile ripple v-on:click="">
                <v-list-tile-action>
                  <v-icon class="ml-4" style="color:#39657B ; font-size:25px;">public</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title style="color:#39657B ; font-size:18px;" class="ml-3">
                    POLITICS
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            </a>
            <a href="#/yes" style="text-decoration: none; margin-top:10%;">
            <v-list>
              <!-- eslint-disable-next-line -->
              <v-list-tile ripple v-on:click="">
                <v-list-tile-action>
                  <v-icon class="ml-4" style="color:#39657B ; font-size:25px;">memory</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title style="color:#39657B ; font-size:18px;" class="ml-3">
                    TECHNOLOGY
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            </a>
            <a href="#/yes" style="text-decoration: none; margin-top:10%;">
            <v-list>
              <!-- eslint-disable-next-line -->
              <v-list-tile ripple v-on:click="">
                <v-list-tile-action>
                  <v-icon class="ml-4" style="color:#39657B ; font-size:25px;">bubble_chart</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title style="color:#39657B ; font-size:18px;" class="ml-3">
                    CULTURE
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            </a>
            <a href="#/yes" style="text-decoration: none; margin-top:10%;">
            <v-list>
              <!-- eslint-disable-next-line -->
              <v-list-tile ripple v-on:click="">
                <v-list-tile-action>
                  <v-icon class="ml-4" style="color:#39657B ; font-size:25px;">rowing</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title style="color:#39657B ; font-size:18px;" class="ml-3">
                    SPORT
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            </a>
            <a href="#/yes" style="text-decoration: none; margin-top:10%;">
            <v-list>
              <!-- eslint-disable-next-line -->
              <v-list-tile ripple v-on:click="">
                <v-list-tile-action>
                  <v-icon class="ml-4" style="color:#39657B ; font-size:25px;">streetview</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title style="color:#39657B ; font-size:18px;" class="ml-3">
                    ART
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            </a>
            <a href="#/yes" style="text-decoration: none; margin-top:10%;">
            <v-list>
              <!-- eslint-disable-next-line -->
              <v-list-tile ripple v-on:click="">
                <v-list-tile-action>
                  <!-- eslint-disable-next-line -->
                  <v-icon class="ml-4" style="color:#39657B ; font-size:25px;">videogame_asset</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title style="color:#39657B ; font-size:18px;" class="ml-3">
                    GAME
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            </a>
            <a href="#/yes" style="text-decoration: none; margin-top:10%;">
            <v-list>
              <!-- eslint-disable-next-line -->
              <v-list-tile ripple v-on:click="">
                <v-list-tile-action>
                  <!-- eslint-disable-next-line -->
                  <v-icon class="ml-4" style="color:#39657B ; font-size:25px;">school</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title style="color:#39657B ; font-size:18px;" class="ml-3">
                    EDUCATION
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            </a>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="#A6C7D2"
      dark
      app
      fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-0">
        <!-- eslint-disable-next-line -->
        <v-toolbar-side-icon v-on:click.stop="drawer = !drawer" class="hidden-lg-and-up ml-0" style="color:#3A5766;">
        </v-toolbar-side-icon>
        <span style="">
        <v-avatar size="95px" tile>
          <img
            src="@/assets/logo.png"
            alt="avatar"
          >
        </v-avatar></span>
      </v-toolbar-title>


      <v-spacer></v-spacer>
        <v-btn icon @click="search_m = !search_m">
          <v-icon  style="color:#33505E ; font-weight:1000;">search</v-icon>
        </v-btn>
        <v-tooltip bottom>
          <v-btn slot="activator" icon @click="favorite_m = !favorite_m">
            <v-icon  style="color:#33505E ; font-weight:10;">local_activity</v-icon>
          </v-btn>
          <span>Favorite lists</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" icon @click="readlater_m = !readlater_m">
             <v-icon  style="color:#33505E ; font-weight:1000;">collections_bookmark</v-icon>
          </v-btn>
          <span >Bookmark lists</span>
        </v-tooltip>
      <v-btn icon large>
        <v-avatar size="42px" tile>
          <img
            src="@/assets/profile.jpg"
            alt="avatar"
            style="border-radius:50px;"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>      
    </v-content>
    <v-btn
      fab
      bottom
      right
      color="blue"
      dark
      fixed
      class="mb-5"
      @click="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition style="margin:0px; padding:0px">
      <v-card  style=" margin:0px;">
        <v-toolbar dark color="#A6C7D2">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon style="color:#33505E ; font-weight:5000; font-size:40px">keyboard_backspace</v-icon>
          </v-btn>
          <v-toolbar-title style="color:#33505E ; font-weight:1000;">Write a Blog</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon large disabled>
              <v-avatar size="46px" tile>
                <img
                  src="@/assets/profile.jpg"
                  alt="avatar"
                  style="border-radius:50px;"
                >
              </v-avatar>
            </v-btn>  
          </v-toolbar-items>
        </v-toolbar>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12>

              <v-text-field
                v-model="name"
                prepend-icon="notes"
                :error-messages="nameErrors"
                :counter="20"
                label="Title"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="photo"
                placeholder="Image"
                :value="image"
                disabled
              ></v-text-field>
            </v-flex>
            <v-flex lg5 offset-lg5 xs10 offset-xs3 md5 offset-md5 sm5 offset-sm5>
              <v-btn large color="success" @click="image_tags">Get Image</v-btn>
            </v-flex>
            <v-flex v-if="image_tag" xs12>
              <v-text-field
                v-model="name"
                prepend-icon="party_mode"
                :error-messages="nameErrors"
                :counter="30"
                label="Enter Key word"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
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
                      d-flex
                    >
                      <v-card flat tile class="d-flex" >
                          <v-img
                            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                            aspect-ratio="1"
                            @click="image = `https://picsum.photos/500/300?image=${n * 5 + 10}`"
                            class="grey lighten-2"
                          >
                          <v-layout
                            slot="placeholder"
                            fill-height
                            align-center
                            justify-center
                            ma-0
                          >
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
          <!-- <v-btn flat color="primary">More</v-btn> -->
          <v-spacer></v-spacer>
          <!-- <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn> -->
          <v-btn class="btnnn" style="background: #A6C7D2; color: #33505e;" @click="blog_save">Upload</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="search_m" fullscreen hide-overlay transition style="margin:0px; padding:0px">
      <v-card  style=" margin:0px;">
        <v-toolbar dark color="#A6C7D2">
          <v-btn icon dark @click.native="search_m = false">
            <v-icon style="color:#33505E ; font-weight:5000; font-size:40px">keyboard_backspace</v-icon>
          </v-btn>
          <v-toolbar-title style="color:#33505E ; font-weight:1000;"  class="mt-2">Search for Blogs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon large disabled>
              <v-avatar size="46px" tile>
                <img
                  src="@/assets/profile.jpg"
                  alt="avatar"
                  style="border-radius:50px;"
                >
              </v-avatar>
            </v-btn>  
          </v-toolbar-items>
        </v-toolbar>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs10 offset-xs1>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="100"
                label="Search Blog By Title"
                required
                class="mt-1"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()">
              </v-text-field>
            </v-flex>
            <v-flex lg5 offset-lg5 xs10 offset-xs3 md5 offset-md5 sm5 offset-sm5>
              <v-btn large color="success" @click="image_tags">SEARCH</v-btn>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>


    <v-dialog v-model="favorite_m" fullscreen hide-overlay transition style="margin:0px; padding:0px">
      <v-card  style=" margin:0px;">
        <v-toolbar dark color="#A6C7D2">
          <v-btn icon dark @click.native="favorite_m = false">
            <v-icon style="color:#33505E ; font-weight:5000; font-size:40px">keyboard_backspace</v-icon>
          </v-btn>
          <v-toolbar-title style="color:#33505E ; font-weight:1000;" class="mt-2">Favorite blogs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon large disabled>
              <v-avatar size="46px" tile>
                <img
                  src="@/assets/profile.jpg"
                  alt="avatar"
                  style="border-radius:50px;"
                >
              </v-avatar>
            </v-btn>  
          </v-toolbar-items>
        </v-toolbar>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>

          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="readlater_m" fullscreen hide-overlay transition style="margin:0px; padding:0px">
      <v-card  style=" margin:0px;">
        <v-toolbar dark color="#A6C7D2">
          <v-btn icon dark @click.native="readlater_m = false">
            <v-icon style="color:#33505E ; font-weight:5000; font-size:40px">keyboard_backspace</v-icon>
          </v-btn>
          <v-toolbar-title style="color:#33505E ; font-weight:1000;" class="mt-2">Bookmarked blogs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon large disabled>
              <v-avatar size="46px" tile>
                <img
                  src="@/assets/profile.jpg"
                  alt="avatar"
                  style="border-radius:50px;"
                >
              </v-avatar>
            </v-btn>  
          </v-toolbar-items>
        </v-toolbar>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>

          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    image: "",
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    drawer: true,
    width: "",
    image_tag: 0,
    image_sup: 0,
    search_m: false,
    favorite_m: false,
    readlater_m: false
  }),
  props: {
    source: String
  },
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
    },
    blog_save() {}
  },
  watch: {},
  // eslint-disable-next-line
  created: function() {
    this.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (this.width < 1264) {
      this.drawer = false;
    }
    // eslint-disable-next-line
  }
};
// eslint-disable-next-line
</script>


<style>
#inspire {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background: #dfebf7;
}
.cati {
  color: #075379;
  font-size: 20px;
  font-style: initial;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.itc {
  color: #05a0e7;
}
.t_area {
  height: 50vh;
  width: 100%;
  border: 2px solid grey;
  border-radius: 15px;
  padding: 15px;
}
.btnnn {
  text-transform: uppercase;
  width: 100%;

  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 25px;
  font-weight: 800;
}
</style>
