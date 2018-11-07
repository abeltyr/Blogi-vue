<template lang="html">
<div>
    <div class="alls">
        <div class="ima_left ">
            <div class="text-xs-center">
                <v-avatar size="135px">
                    <img class="img-circle elevation-10 mb-5" src="@/assets/profile.jpg">
                </v-avatar>
                <div class="headline nan"> <span style="font-weight:bold; text-transform: uppercase;">{{user.full_name}}</span></div>
                <div v-if="me != '' ">
                    <v-chip label color="blue-grey" text-color="blue-grey" outline style="border-radius:9px; border:2px solid #212121;">
                        <v-avatar>
                            <v-icon>portrait</v-icon>
                        </v-avatar>
                        Followers  {{followers}}
                    </v-chip>
                    <v-chip label color="blue-grey" text-color="blue-grey" outline style="border-radius:9px; border:2px solid #212121;" v-if="user.id === me.id" >
                        <v-avatar>
                            <v-icon>people_outline</v-icon>
                        </v-avatar>
                        Following  {{following}}
                    </v-chip>                        
                </div>
                <div v-if="me != '' ">
                    <v-btn   v-if="!follow_tag" @click="foll" label  outline  style="border-radius:9px; border:2px solid #00bb00;">
                        <v-icon text-color="blue-grey" class="mr-3" style="color:#00bb00;">person_add</v-icon>
                        <span text-color="blue-grey" style="color:#007700;">
                            Follow
                        </span> 
                    </v-btn>
                    <v-btn   v-if="follow_tag" @click="foll" label  outline  style="border-radius:9px; border:2px solid #00bb00;">
                        <v-icon text-color="success" class="mr-3 " style="color:#00bb00;">group</v-icon>
                        <span text-color="success" style="color:#007700;">
                            Following
                        </span> 
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
    <v-content>
      <v-container class="ima">
        <v-layout row wrap align-center>
            <v-flex xs12 md4 class="ami_left">
                <div class="text-xs-center">
                    <v-avatar size="135px">
                        <img class="img-circle elevation-10 mb-5" src="@/assets/profile.jpg">
                    </v-avatar>
                    <div class="headline nan"> <span style="font-weight:bold; text-transform: uppercase;">{{user.full_name}}</span></div>
                    <div v-if="me != '' ">
                        <v-chip label color="blue-grey" text-color="blue-grey" outline style="border-radius:9px; border:2px solid #212121;">
                            <v-avatar>
                                <v-icon>portrait</v-icon>
                            </v-avatar>
                            Followers  {{followers}}
                        </v-chip>
                        <v-chip label color="blue-grey" text-color="blue-grey" outline style="border-radius:9px; border:2px solid #212121;" v-if="user.id === me.id" >
                            <v-avatar>
                                <v-icon>people_outline</v-icon>
                            </v-avatar>
                            Following  {{following}}
                        </v-chip>                        
                    </div>
                    <div v-if="me != '' ">
                        <v-btn   v-if="!follow_tag" @click="foll" label  outline  style="border-radius:9px; border:2px solid #00bb00;">
                            <v-icon text-color="blue-grey" class="mr-3" style="color:#00bb00;">person_add</v-icon>
                            <span text-color="blue-grey" style="color:#007700;">
                                Follow
                            </span> 
                        </v-btn>
                        <v-btn   v-if="follow_tag" @click="foll" label  outline  style="border-radius:9px; border:2px solid #00bb00;">
                            <v-icon text-color="success" class="mr-3 " style="color:#00bb00;">group</v-icon>
                            <span text-color="success" style="color:#007700;">
                                Following
                            </span> 
                        </v-btn>
                    </div>
                </div>
            </v-flex>
          <v-flex xs12 md9 offset-md3 sm12 >
            <div v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="170px"
                  :src="post.image"
                >
                  <v-container fill-height fluid>
                    <v-layout  fill-height>
                      <v-flex xs12 align-end d-flex>
                        <span class="font_title">
                          <v-icon style="color: #fff; font-weight: 500;" v-if="post.category === MUSIC">music_video</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="post.category === POLITICS">public</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="post.category === TECHNOLOGY">memory</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="post.category === CULTURE">bubble_chart</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="post.category === SPORT">rowing</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="post.category === ART">streetview</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="post.category === GAME">videogame_asset</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="post.category === Education">school</v-icon> 
                        {{ post.category }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <div style="text-align:center;" class=" font_top">
                  {{post.title}}
                </div>
                <v-card-title style="width:100%;  overflow:hidden;" >
                    <div>   
                      <span class="content">
                        {{post.content}}
                      </span>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox >
                          <v-icon style="font-size:18px;">
                              date_range
                          </v-icon>
                        <span class=" font_last">  
                            {{ post.createdAt}}
                        </span>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <router-link :to="{name: 'Readblog', params:{id : post.id, title : post.title}}"> 
                      <v-btn  color="#80d8ff" class="black--text">
                        READ MORE
                      </v-btn>
                  </router-link>
                  <v-spacer></v-spacer>
                    <v-btn fab dark small color="pink" class="mr-3 mb-1">
                        <v-icon dark >favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <span class="content mr-4 red--text">
                        {{post.like}}
                      </span>
                    </v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>         
        </v-layout>
      </v-container>
    </v-content>
</div>
</template>

<script>
import axios from "axios";

const token = localStorage.getItem("token");

export default {
  data() {
    return {
      id: 0,
      url: "http://localhost:4000/",
      posts: [],
      comments: [],
      num_comment: 0,
      user: [],
      MUSIC: "music",
      POLITICS: "politics",
      TECHNOLOGY: "technology",
      CULTURE: "culture",
      SPORT: "sport",
      ART: "art",
      GAME: "game",
      Education: "education",
      followers: 0,
      token: token,
      following: 0,
      follow_tag: 0,
      me: []
    };
  },
  link(id) {
    return "#/Readblog/" + title + id;
  },
  created: function() {
    this.myblogs();
    if (token) {
      this.me = this.$jwt.decode(token);
    }
  },
  watch: {},
  methods: {
    myblogs() {
      this.id = this.$route.params.id;
      axios({
        method: "get",
        url: "http://localhost:4000/api/blog/user/" + this.id
      })
        .then(response => {
          this.user = response.data[1];
          this.posts = response.data[1].blogs;
          axios({
            method: "post",
            url: "http://localhost:4000/api/User/Followers",
            headers: {
              Authorization: token
            },
            data: {
              followed_id: this.user.id
            }
          })
            .then(response => {
              this.followers = response.data.followers;
            })
            .catch(error => {
              if (error.response.status === 401) {
                localStorage.removeItem("token");
              }
            });

          axios({
            method: "get",
            url: "http://localhost:4000/api/Following/User",
            headers: {
              Authorization: token
            }
          })
            .then(response => {
              this.following = response.data.following;
            })
            .catch(error => {
              console.log(error);
              if (error.response.status === 401) {
                localStorage.removeItem("token");
              }
            });

          axios({
            method: "post",
            url: "http://localhost:4000/api/Check/User",
            headers: {
              Authorization: token
            },
            data: {
              followed_id: this.user.id
            }
          })
            .then(response => {
              this.follow_tag = response.data.following;
            })
            .catch(error => {
              console.log(error);
              if (error.response.status === 401) {
                localStorage.removeItem("token");
              }
            });
        })
        .catch(error => {
          console.log(error);
        });
    },
    foll() {
      if (this.follow_tag === 0) {
        this.follow_tag = 1;
        axios({
          method: "post",
          url: "http://localhost:4000/api//Follow/User",
          headers: {
            Authorization: token
          },
          data: {
            followed_id: this.user.id
          }
        })
          .then(response => {
            if (response.data) {
              this.follow_tag = 1;
              this.followers = this.followers + 1;
            }
          })
          .catch(error => {
            console.log(error);
            this.followers = this.followers - 1;
            this.follow_tag = 0;
            if (error.response.status === 401) {
              localStorage.removeItem("token");
            }
          });
      } else if (this.follow_tag === 1) {
        this.follow_tag = 0;
        axios({
          method: "delete",
          url: "http://localhost:4000/api//Unfollow/User",
          headers: {
            Authorization: token
          },
          data: {
            followed_id: this.user.id
          }
        })
          .then(response => {
            if (response.data) {
              this.follow_tag = 0;
              this.followers = this.followers - 1;
            }
          })
          .catch(error => {
            console.log(error);
            this.follow_tag = 1;
            this.followers = this.followers + 1;
            if (error.response.status === 401) {
              localStorage.removeItem("token");
            }
          });
      }
    }
  }
};
</script>


<style>
.font_top {
  font-weight: 900;
  font-size: 25px;
  color: #057fb8;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.content {
  font-weight: 600;
  font-size: 15px;
  color: #414141;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.font_title {
  font-weight: 1000;
  font-size: 22px;
  color: #fff;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.font_bottom {
  font-weight: 900;
  font-size: 16px;
  color: #057474;
  background: transparent;
  text-transform: uppercase;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.font_last {
  font-weight: 500;
  font-size: 15px;
  color: #212121;
  text-transform: uppercase;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.bo {
  border-radius: 9px;
  box-shadow: 2px 15px 12px grey;
}
@media (min-width: 1500px) {
  .ima_left {
    float: left;
    position: absolute;
    width: 70vh;
    padding-top: 35vh;
    height: 100vh;
    position: fixed;
  }
}
@media (min-width: 1300px) {
  .ima_left {
    float: left;
    position: absolute;
    width: 50vh;
    padding-top: 35vh;
    height: 100vh;
    position: fixed;
  }
}
@media (min-width: 1200px) {
  .ima_left {
    float: left;
    position: absolute;
    width: 50vh;
    padding-top: 35vh;
    height: 100vh;
    position: fixed;
  }
}
@media (min-width: 1100px) {
  .ima_left {
    float: left;
    position: absolute;
    width: 35vh;
    padding-top: 35vh;
    height: 100vh;
    position: fixed;
  }
}
@media (min-width: 1000px) {
  .ima_left {
    float: left;
    position: absolute;
    width: 55vh;
    padding-top: 35vh;
    height: 100vh;
    position: fixed;
  }
}
@media (min-width: 959px) {
  .ima_left {
    float: left;
    position: absolute;
    width: 35vh;
    padding-top: 35vh;
    height: 100vh;
    position: fixed;
  }
}
@media (max-width: 959px) {
  .ima_left {
    display: none !important;
  }
}
@media (min-width: 960px) {
  .ami_left {
    display: none !important;
  }
}

.alls {
  display: block;
  width: 20vh;
}
</style>
