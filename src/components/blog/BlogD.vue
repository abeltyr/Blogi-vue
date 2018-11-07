<template lang="html">
    <div>
        <v-flex xs12>
            <div>
                <v-layout >
                    <v-flex x12 md12W>
                        <a-card :loading="loading"  class="card_all">
                          <!-- image -->
                          <v-card flat tile class="d-flex mb-3" style="margin:0px;">
                            <v-img
                                :src="blog.image"
                                :lazy-src="user.image"
                                aspect-ratio="1"
                                height="350px"
                                class="grey lighten-2"
                                style="border-radius:20px; ">
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
                          <!--edit -->
                          <template class="ant-card-actions" slot="actions" v-if="me.id === blog.id">
                            <a-icon type="edit" />
                            <a-icon type="delete" />
                          </template>
                          <!-- Writer detailes -->
                          <v-avatar size="62px" tile>
                            <img
                              :src="user.image"
                              alt="avatar"
                              style="border-radius:50px;">
                          </v-avatar>
                          <span class="font_name ml-3"> 
                              <router-link :to="{name: 'User', params:{id : blog.user_id, name : user.name}}" style="color:#515151; "> 
                                    {{user.name}} 
                              </router-link>
                          </span>
                          <!-- title -->
                          <v-container fill-height fluid>
                            <v-layout fill-height>
                              <v-flex md4 style="text-align:center;">
                              </v-flex>
                              <v-flex xs12 md8 style="text-align:center;">
                                <span class="font_titlea" > 
                                {{blog.title}} 
                                </span><br>
                              </v-flex>
                            </v-layout>
                          </v-container>
                          <!-- dat -->
                          <v-layout fill-height class="mt-3">
                            <v-flex xs12 align-end flexbox>
                              <span class=" font_last ">  
                                  <v-icon style="color:#212121; font-weight:500; font-size:20px;">today</v-icon>
                                    {{ moment(blog.createdAt).format('D MMMM YYYY')}}
                              </span>
                            </v-flex>
                          </v-layout>
                        </a-card>
                        <a-card :loading="loading" style="width: 95%; margin-left:2.5%; padding-bottom:10vh; margin-top:5%; background:transparent; text-align: left; border-bottom:1px solid grey;">
                          <span class="font_name"> 
                              {{blog.content}}
                          </span>
                        </a-card>
                        <a-card :loading="loading" style="width: 95%; margin-left:2.5%; background:transparent;  margin-bottom:3vh;">
                          
                          <v-layout row>
                            <v-flex xs12 sm-12 class="mb-4">
                              <v-layout justify-space-around>
                                <v-btn icon v-if="!liked" @click="likeds">
                                  <v-icon large color="red" style="font-size:40px;">favorite_border</v-icon>
                                </v-btn>
                                <v-btn icon v-if="liked" @click="likeds">
                                  <v-icon large color="red" style="font-size:40px;">favorite</v-icon>
                                </v-btn>
                                <v-btn icon v-if="!commented">
                                  <v-icon large color="blue-grey"  style="font-size:40px;">chat</v-icon>
                                </v-btn>
                                <v-btn icon @click="sheet = true" >
                                  <v-icon large color="blue" style="font-size:40px;">share</v-icon>
                                </v-btn>
                              </v-layout>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex sm4 class="hidden-xs-only" style="text-align:center; ">
                              <v-card  tile flat style="background:transparent;" >
                                <span style="font-size:20px; color:#ff0000;">
                                  {{likes}}  loves 
                                </span>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 class="hidden-sm-and-up ml-3" style="text-align:left; ">
                              <v-card  tile flat style="background:transparent;" >
                                <span style="font-size:20px; color:#ff0000;">
                                  {{likes}}  loves 
                                </span>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </a-card>
                        <a-card style="background:transparent;" >
                          <v-card  tile flat style="background:transparent;">
                            <v-btn fab dark small color="blue" style="width:40px; height:40px;">
                              <v-icon style="font-size:20px" >chat</v-icon>
                            </v-btn>
                            <span class="mb-1" style="font-size:20px">
                              {{Tcomments}} Comments
                            </span>
                          </v-card>
                          <v-card v-for="comment in comments" key="comment.user_id" class="hidden-sm-and-up mt-3" style="border-radius:9px; box-shadow:1px 5px 10px grey">
                            <a-card>
                              <v-layout raw>
                                <v-flex xs-12>
                                  <v-avatar size="42px" tile>
                                    <img
                                      :src="comment.image"
                                      alt="avatar"
                                      style="border-radius:9px;">
                                  </v-avatar>
                                  <span style="margin-left:2%; font-weight:bold; font-size:16px;"> 
                                      {{comment.name}}
                                  </span>
                                </v-flex>
                                <v-flex xs-0 style="text-align:right;">
                                  <v-btn icon slot="extra" v-if="me.id != comment.user_id">
                                    <v-icon style="color:#ff0000;">delete</v-icon>
                                  </v-btn>
                                </v-flex>
                              </v-layout>
                            </a-card>
                            <a-card>
                              {{comment.comments}}
                            </a-card>
                          </v-card>
                          <v-card v-for="comment in comments" key="comment.user_id" style="width:70%; margin-left:15%; border-radius:9px; box-shadow:1px 5px 10px grey;" class="hidden-xs-only mt-3">
                            <a-card>
                              <v-layout raw>
                                <v-flex xs-10>
                                  <v-avatar size="52px" tile>
                                    <img
                                      :src="comment.image"
                                      alt="avatar"
                                      style="border-radius:50px;">
                                  </v-avatar>
                                  <span class="font_name ml-3"> 
                                      {{comment.name}}
                                  </span>
                                </v-flex>
                                <v-flex xs-1 style="text-align:right;">
                                  <v-btn icon slot="extra" v-if="me.id === comment.user_id">
                                    <v-icon style="color:#ff0000;">delete</v-icon>
                                  </v-btn>
                                </v-flex>
                              </v-layout>
                            </a-card>
                            <a-card>
                              {{comment.comments}}
                            </a-card>
                          </v-card>
                        </a-card>
                        <div class="text-xs-center">
                            <v-bottom-sheet v-model="sheet">
                              <v-list>
                                <v-subheader>Share </v-subheader>
                                <v-list-tile
                                  v-for="tile in tiles"
                                  :key="tile.title"
                                  @click="sheet = false"
                                >
                                  <v-list-tile-avatar>
                                    <v-avatar size="32px" tile>
                                      <img
                                        :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                                        :alt="tile.title"
                                      >
                                    </v-avatar>
                                  </v-list-tile-avatar>
                                  <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                                </v-list-tile>
                              </v-list>
                            </v-bottom-sheet>
                          </div>  
                    </v-flex>
                </v-layout>
            </div>
        </v-flex>
    </div>
</template>

<style>
.card_all {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  box-shadow: 1px 10px 20px grey;
  border-radius: 9px;
}
.ca {
  width: 80%;
  margin-left: 10%;
  margin-top: 5%;
  box-shadow: 1px 15px 10px grey;
}
.ca:hover {
  box-shadow: 1px 20px 10px grey;
}
.font_name {
  font-weight: 1000;
  font-size: 18px;
  text-transform: uppercase;
}
.font_titlea {
  font-weight: 700;
  font-size: 25px;
  color: #04ad91;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.font_bottomt {
  font-weight: 500;
  font-size: 23px;
  color: #00cfeb;
  background: transparent;
  text-transform: uppercase;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.font_last {
  font-weight: 600;
  font-size: 19px;
  color: #212121;
  text-transform: uppercase;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
@media (max-width: 900px) {
  .font_bottomt {
    font-weight: 500;
    font-size: 14px;
    color: #00cfeb;
    background: transparent;
    text-transform: uppercase;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  .font_last {
    font-weight: 600;
    font-size: 15px;
    color: #212121;
    text-transform: uppercase;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  .font_name {
    font-weight: 1000;
    font-size: 14px;
    text-transform: uppercase;
  }
}
</style>


<script>
import axios from "axios";

const token = localStorage.getItem("token");

export default {
  data() {
    return {
      id: 0,
      MUSIC: "music",
      POLITICS: "politics",
      TECHNOLOGY: "technology",
      CULTURE: "culture",
      SPORT: "sport",
      ART: "art",
      GAME: "game",
      Education: "education",
      blog: [],
      comments: [],
      num_comment: 0,
      user: [],
      loading: false,
      me: [],
      sheet: false,
      tiles: [
        { img: "keep.png", title: "Keep" },
        { img: "inbox.png", title: "Inbox" },
        { img: "hangouts.png", title: "Hangouts" },
        { img: "messenger.png", title: "Messenger" },
        { img: "google.png", title: "Google+" }
      ],
      liked: 0,
      likes: "",
      comments: [],
      Tcomments: "",
      commented: 0
    };
  },
  link(id) {
    return "#/Readblog/" + title + id;
  },
  created: function() {
    this.readblog();
    if (token) {
      this.me = this.$jwt.decode(token);
    }
  },
  watch: {},
  methods: {
    readblog() {
      this.loading = true;
      this.id = this.$route.params.id;
      axios({
        method: "get",
        url: "http://localhost:4000/api/blog/" + this.id,
        headers: {
          Authorization: token
        }
      })
        .then(response => {
          this.blog = response.data[0].data;
          this.likes = this.blog.like;
          this.num_comment = response.data[2].comments.count;
          this.comments = response.data[2].comments.rows;
          this.Tcomments = response.data[2].comments.count;
          this.user = response.data[3].User;
          this.loading = false;
          axios({
            method: "get",
            url: "http://localhost:4000/api/check/like/" + this.blog.id,
            headers: {
              Authorization: token
            }
          })
            .then(respon => {
              this.liked = respon.data.liked;
            })
            .catch(error => {
              console.log(error);
              if (error.response.status === 401) {
                localStorage.removeItem("token");
              }
            });

          axios({
            method: "get",
            url:
              "http://localhost:4000/api/feedback/check/comment/" +
              this.blog.id,
            headers: {
              Authorization: token
            }
          })
            .then(response => {
              this.commented = response.data.commented;
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
          this.loading = true;
          this.$message.error(
            "Something went wrong. Please refresh the page!",
            10000
          );
          if (error.response.status === 401) {
            localStorage.removeItem("token");
          }
        });
    },
    likeds() {
      if (this.liked === 0) {
        this.liked = 1;
        axios({
          method: "get",
          url: "http://localhost:4000/api/like/" + this.blog.id,
          headers: {
            Authorization: token
          }
        })
          .then(response => {
            if (response.data) {
              this.liked = 1;
              this.likes = this.likes + 1;
            }
          })
          .catch(error => {
            console.log(error);
            this.liked = 0;
          });
      } else if (this.liked === 1) {
        this.liked = 0;
        axios({
          method: "get",
          url: "http://localhost:4000/api//unlike/" + this.blog.id,
          headers: {
            Authorization: token
          },
          data: {
            followed_id: this.user.id
          }
        })
          .then(response => {
            if (response.data) {
              this.liked = 0;
              this.likes = this.likes - 1;
            }
          })
          .catch(error => {
            console.log(error.status);
            this.liked = 1;
          });
      }
    }
  }
};
</script>