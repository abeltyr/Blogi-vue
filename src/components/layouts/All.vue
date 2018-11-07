<template lang="html">
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
      style="background:#DFEBF7;">
      <Slider></Slider>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="#6aaac0"
      dark
      app
      fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-0">
        <!-- eslint-disable-next-line -->
        <v-toolbar-side-icon v-on:click.stop="drawer = !drawer" class="hidden-lg-and-up ml-0" style="color:#3A5766;">
        </v-toolbar-side-icon>
          <a href="/#/" class="hidden-xs-only"> 
              <v-avatar size="95px" tile>
                <img
                  src="@/assets/logo.png"
                  alt="avatar"
                >
              </v-avatar>
          </a>
          <a href="/#/" class="hidden-sm-and-up"> 
              <v-avatar size="45px" tile>
                <img
                  src="@/assets/logo2.png"
                  alt="avatar"
                >
              </v-avatar>
          </a>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="search_m = !search_m">
          <v-icon  style="color:#33505E ; font-weight:1000;">search</v-icon>
        </v-btn>
        <v-tooltip bottom v-if="me != '' ">
          <v-btn slot="activator" icon @click="favorite_m = !favorite_m">
            <v-icon  style="color:#33505E ; font-weight:10;">local_activity</v-icon>
          </v-btn>
          <span>Favorite lists</span>
        </v-tooltip>
        <v-tooltip bottom v-if="me != '' ">
          <v-btn slot="activator" icon @click="readlater_m = !readlater_m">
             <v-icon  style="color:#33505E ; font-weight:1000;">collections_bookmark</v-icon>
          </v-btn>
          <span >Bookmark lists</span>
        </v-tooltip>
        <div v-if="me != '' ">
          <v-btn icon large>
            <v-avatar size="42px" tile>
              <img
                src="@/assets/profile.jpg"
                alt="avatar"
                style="border-radius:50px;"
              >
            </v-avatar>
          </v-btn>
        </div>
        <div  v-if="!(me != '')">
          <v-btn icon large  @click="signup = !signup" >
            <v-avatar size="45px" tile>
              <img
                src="@/assets/login.png"
                alt="avatar"
                style="border-radius:50px;"
              >
            </v-avatar>
              <img src=""/>
          </v-btn>
        </div>
    </v-toolbar>
    <v-content style="background:#DFEBF7;">
      <router-view></router-view>      
    </v-content>
    <div v-if="me != '' ">
      <v-btn
        fab
        bottom
        right
        color="blue"
        dark
        fixed
        class="mb-5"
        @click="dialog = !dialog">
        <v-icon style="font-weight:500; font-size:20px; ">border_color</v-icon>
      </v-btn>
    </div>
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
        <Newpost></Newpost>
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
        <Search></Search>
      </v-card>
    </v-dialog>

    <v-dialog v-model="signup" fullscreen hide-overlay transition style="margin:0px; padding:0px">
      <v-card  style=" margin:0px;">
        <v-toolbar dark color="#A6C7D2">
          <v-btn icon dark @click.native="signup = false">
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
        <Favorite></Favorite>
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
        <Bookmark></Bookmark>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import Bookmark from "@/components/blog/Bookmark";
import Favorite from "@/components/blog/Favorite";
import Slider from "@/components/layouts/Slider";
import Newpost from "@/components/blog/Newpost";
import Search from "@/components/blog/Search";
const token = localStorage.getItem("token");
export default {
  components: {
    Slider: Slider,
    Newpost: Newpost,
    Search: Search,
    Favorite: Favorite,
    Bookmark: Bookmark
  },
  data: () => ({
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
    readlater_m: false,
    me: [],
    signup: false
  }),
  created: function() {
    this.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (this.width < 1264) {
      this.drawer = false;
    }
    if (token) {
      this.me = this.$jwt.decode(token);
    }
  }
};
</script>


<style>
#inspire {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background: #dfebf7;
  min-width: 320px;
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
