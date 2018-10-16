<template>
<v-layout>
  <!-- for everything else -->
  <v-card style="width:100%; background:transparent; border:0px; box-shadow:0px 0px 0xp;"  class="hidden-xs-only">
    <v-container fluid grid-list-md >
      <v-layout row wrap>
        <div v-if="none" style="width:100%; margin-top:4%;">
            <v-flex xs12 v-if="tokens === 0 ">
              <img
                src="@/assets/none.png"
                height="500px"
                width="100%"
                class="ml-1"
                style="border-radius:6px;"/>
              
            </v-flex>
            <v-flex xs12 v-if="tokens != 0 ">
              <img
                src="@/assets/nonel.png"
                height="500px"
                width="100%"
                class="ml-1"
                style="border-radius:6px;"/>              
            </v-flex>
        </div>
        <div v-if="loading" style="width:100%; margin-top:4%;">
          <a-card :loading="loading" >
            loading
          </a-card>
        </div>
        <div v-if="loading" style="width:100%; margin-top:4%;">
          <a-card :loading="loading" >
            loading
          </a-card>
        </div>
        <div v-if="loading" style="width:100%; margin-top:4%;">
          <a-card :loading="loading" >
            loading
          </a-card>
        </div>
        <div v-if="loading" style="width:100%; margin-top:4%;">
          <a-card :loading="loading" >
            loading
          </a-card>
        </div>
        <div v-if="loading" style="width:100%; margin-top:4%;">
          <a-card :loading="loading" >
            loading
          </a-card>
        </div>
        <div v-if="loading" style="width:100%; margin-top:4%;">
          <a-card :loading="loading" >
            loading
          </a-card>
        </div>
        <v-flex
          v-for="card in cards"
          xs12
          :key="card.title">
          <v-card color="cyan darken-2" class="blue-grey" style="margin-top:4%; border-radius: 10px">
            <v-layout>
              <v-flex xs5>
                <v-img
                  :src="card.image"
                  height="230px"
                  width="100%"
                  class="ml-1"
                  style="border-radius:6px;"
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      <span class="font_titlet">
                        <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === MUSIC">music_video</v-icon> 
                        <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === POLITICS">public</v-icon> 
                        <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === TECHNOLOGY">memory</v-icon> 
                        <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === CULTURE">bubble_chart</v-icon> 
                        <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === SPORT">rowing</v-icon> 
                        <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === ART">streetview</v-icon> 
                        <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === GAME">videogame_asset</v-icon> 
                        <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === Education">school</v-icon> 
                        {{card.category}} </span>
                    </div>
                    <div  class=" font_topt mt-2 ml-5">
                      {{card.title}}
                    </div>
                    <v-card-title style="width:100%;  overflow:hidden;" >
                      <div  style="width:100%;  overflow:hidden;" >   
                        <span class="contentt">
                          {{card.content | truncate(300, '...')}}
                        </span>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox >
                              <span >
                                <span style="color:#fff;">
                                  BY
                                </span>    
                                <router-link :to="{name: 'User', params:{id : card.user_id, name : card.user.full_name}}" class=" font_bottomt"> 
                                      {{card.user.full_name}} 
                                </router-link>
                              </span>
                            </v-flex>
                          </v-layout>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox >
                            <span class=" font_last">  
                                {{ moment(card.createdAt).format('D MMMM YYYY')}}
                            </span>
                          </v-flex>
                        </v-layout>
                      </div>
                    </v-card-title>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              <router-link :to="{name: 'Readblog', params:{id : card.id, title : card.title}}"> 
                <v-btn  outline style="  color: #4dd0e1;  font-weight: 1000;  border: 3px solid #4dd0e1; border-radius: 9px;">
                  READ MORE
                </v-btn>
              </router-link>
              <v-spacer></v-spacer>
              <v-btn fab dark small color="pink" class="mr-3 mb-1">
                <v-icon dark >favorite</v-icon>
              </v-btn>
              <v-btn icon disabled>
                <span class="content mr-4 red--text">
                  {{card.like}}
                </span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>










<!-- for mobile-->
      <v-card style="width:100%; background:transparent;" class="hidden-sm-and-up">
        <v-container
          fluid
          grid-list-md
        >
        <div v-if="none" style="width:100%; margin-top:4%;">
            <v-flex xs12 v-if="tokens === 0 ">
              <img
                src="@/assets/none.png"
                height="300px"
                width="100%"
                class="ml-1"
                style="border-radius:6px;"/>
              
            </v-flex>
            <v-flex xs12 v-if="tokens != 0 ">
              <img
                src="@/assets/nonel.png"
                height="300px"
                width="100%"
                class="ml-1"
                style="border-radius:6px;"/>              
            </v-flex>
        </div>
          <v-layout row wrap>
            <div v-if="loading" style="width:100%; margin-top:10%;">
              <a-card :loading="loading" >
                loading
              </a-card>
            </div>
            <div v-if="loading" style="width:100%; margin-top:10%;">
              <a-card :loading="loading" >
                loading
              </a-card>
            </div>
            <div v-if="loading" style="width:100%; margin-top:10%;">
              <a-card :loading="loading" >
                loading
              </a-card>
            </div>
            <div v-if="loading" style="width:100%; margin-top:10%;">
              <a-card :loading="loading" >
                loading
              </a-card>
            </div>
           
            <v-flex
              v-for="card in cards"
              xs12
              :key="card.title">
              <v-card class="bo mt-4 blue-grey">
                <v-img
                  :src="card.image"
                  height="250px"
                  width="100%"
                  >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="font_title">
                          <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === MUSIC">music_video</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === POLITICS">public</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === TECHNOLOGY">memory</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === CULTURE">bubble_chart</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === SPORT">rowing</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === ART">streetview</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === GAME">videogame_asset</v-icon> 
                          <v-icon style="color: #fff; font-weight: 500;" v-if="card.category === Education">school</v-icon> 
                          {{card.category}} </span><br>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <div style="text-align:center;" class="font_topt mt-2">
                  {{card.title}}
                </div>
                <v-card-title style="width:100%;  overflow:hidden;" >
                    <div>   
                      <span class="content">
                        {{card.content | truncate(300, '...')}}
                        
                      </span>
                      
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox >
                          <span>
                            <span style="color:#fff;">
                              BY
                            </span>     
                            <router-link :to="{name: 'User', params:{id : card.user_id, name : card.user.full_name}}" class=" font_bottom"> 
                                  {{card.user.full_name}} 
                            </router-link>
                          </span>
                        </v-flex>
                      </v-layout>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox >
                        <span class=" font_last">  
                            {{ moment(card.createdAt).format('D MMMM YYYY')}}
                        </span>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-card-title>
                <v-card-actions>

                  <router-link :to="{name: 'Readblog', params:{id : card.id, title : card.title}}"> 
                      <v-btn  outline style="  color: #4dd0e1;  font-weight: 1000;  border: 3px solid #4dd0e1; border-radius: 9px;">
                        READ MORE
                      </v-btn>
                  </router-link>
                  
                  <v-spacer></v-spacer>
                    <v-btn fab dark small color="pink" class="mr-3 mb-1">
                        <v-icon dark >favorite</v-icon>
                    </v-btn>
                    <v-btn icon disabled>
                      <span class="content mr-4 red--text">
                        {{card.like}}
                      </span>
                    </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
  </v-layout>
</template>

<script>
import axios from "axios";
import moment from "moment";

const token = localStorage.getItem("token");
export default {
  data: () => ({
    loading: false,
    bookmark_tag: 0,
    MUSIC: "music",
    POLITICS: "politics",
    TECHNOLOGY: "technology",
    CULTURE: "culture",
    SPORT: "sport",
    ART: "art",
    GAME: "game",
    Education: "education",
    url: "http://localhost:4000/api/",
    cards: [],
    times: [],
    tokens: 0,
    none: false
  }),
  methods: {
    fetchblog() {
      if (token) {
        this.tokens = token;
      }
      if (!navigator.onLine) {
        this.loading = true;
        axios({
          method: "get",
          url: "http://localhost:4000/api/blog/all/Category/culture"
        })
          .then(response => {
            this.cards = response.data[1].rows;
            this.loading = false;
            if (response.data[1].count === 0) {
              this.none = true;
            }
          })
          .catch(error => {
            console.log(error);
            this.loading = true;
            this.$message.error(
              "Something went wrong. Please refresh the page!",
              10000
            );
          });
      } else {
        this.loading = true;
        this.$message.error(
          "it looks like you are not currently connected to the internt please try again in when you are",
          50
        );
      }
    }
  },
  created: function() {
    this.fetchblog();
  }
};
</script>

<style>
.font_top {
  font-weight: 900;
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.font_topt {
  font-weight: 1000;
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.content {
  font-weight: 400;
  font-size: 15px;
  color: #ddd;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.contentt {
  font-weight: 400;
  font-size: 15px;
  color: #ddd;
  display: inline;
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
.font_titlet {
  font-weight: 1000;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.font_bottom {
  font-weight: 800;
  font-size: 15px;
  color: #00cfeb;
  background: transparent;
  text-transform: uppercase;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.font_bottomt {
  font-weight: 800;
  font-size: 15px;
  color: #00cfeb;
  background: transparent;
  text-transform: uppercase;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.font_last {
  font-weight: 600;
  font-size: 17px;
  color: #fff;
  text-transform: uppercase;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.bo {
  border-radius: 9px;
  box-shadow: 2px 15px 12px grey;
}
.redl {
  color: #00acc1;
  font-weight: 600;
  border: 2px solid #00acc1;
  border-radius: 9px;
}
</style>
