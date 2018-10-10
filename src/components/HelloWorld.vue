
<template>
  <v-layout >
      <v-card style="width:100%">
        <v-container
          fluid
          grid-list-md
        >
        <!-- {{times}} -->
          <v-layout row wrap>
            <v-flex
              v-for="card in cards || time in times"
              xs12
              :key="card.title"
            >
            {{time}}
              <v-card class="bo mt-4">
                <v-img
                  :src="card.image"
                  height="250px"
                  width="100%"
                  >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="font_title">
                          <v-icon style="color: #fff; font-weight: 1000;" v-if="card.category === MUSIC">music_video</v-icon> 
                          <v-icon style="color: #fff; font-weight: 1000;" v-if="card.category === POLITICS">public</v-icon> 
                          <v-icon style="color: #fff; font-weight: 1000;" v-if="card.category === TECHNOLOGY">memory</v-icon> 
                          <v-icon style="color: #fff; font-weight: 1000;" v-if="card.category === CULTURE">bubble_chart</v-icon> 
                          <v-icon style="color: #fff; font-weight: 1000;" v-if="card.category === SPORT">rowing</v-icon> 
                          <v-icon style="color: #fff; font-weight: 1000;" v-if="card.category === ART">streetview</v-icon> 
                          <v-icon style="color: #fff; font-weight: 1000;" v-if="card.category === GAME">videogame_asset</v-icon> 
                          <!-- <v-icon style="color: #fff; font-weight: 1000;" v-if="card.category === art">layers</v-icon> 
                          <v-icon style="color: #fff; font-weight: 1000;" v-if="card.category === art">layers</v-icon>  -->
                          {{card.category}} </span><br>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <div style="text-align:center;" class=" font_top">
                  {{card.title}}
                </div>
                <v-card-title style="width:100%;  padding-right:0px" >
                    <div>                      
                      <div>
                      {{card.content}}
                      </div>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox >
                          <span >BY  
                            <a href="/#/as" class=" font_bottom">
                              {{card.user.full_name}} 
                            </a>
                          </span>
                        </v-flex>
                      </v-layout>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox >
                        <span class=" font_last">  
                            {{ card.createdAt}}
                        </span>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn 
                    color="#80d8ff"
                    class="black--text">
                    READ MORE
                  </v-btn>
                  <v-spacer></v-spacer>
                  <div
                    v-for="time in times"
                    :key="time">
                      <v-btn icon @click="bookmark">
                        <v-icon v-if="!time">bookmark_border</v-icon>
                        <v-icon v-if="time">bookmark</v-icon>
                      </v-btn>
                    </div>
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
    bookmark_tag: 0,
    MUSIC: "music",
    POLITICS: "politics",
    TECHNOLOGY: "technology",
    CULTURE: "culture",
    SPORT: "sport",
    ART: "art",
    GAME: "game",
    url: "http://localhost:4000/api/",
    cards: [],
    times: []
  }),
  methods: {
    bookmark() {
      if (this.bookmark_tag === 0) {
        this.bookmark_tag = 1;
      } else if (this.bookmark_tag === 1) {
        this.bookmark_tag = 0;
      }
    },
    fetchblog() {
      if (!navigator.onLine) {
        axios({
          method: "get",
          url: "http://localhost:4000/api/blog/all"
        })
          .then(response => {
            this.cards = response.data[1].rows;
            let num = 0;
            while (response.data[1].count > num) {
              if (token) {
                axios({
                  method: "get",
                  url:
                    "http://localhost:4000/api/blog/check/readLater/" +
                    response.data[1].rows[num].id,
                  headers: {
                    Authorization: token
                  }
                })
                  .then(respon => {
                    this.times.push(respon.data.bookmarked);
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }
              num++;
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.$message.error(
          "it looks like you are not currently connected to the internt please try again in while",
          10
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
  color: #057fb8;
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
  font-weight: 500;
  font-size: 15px;
  color: #059292;
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
</style>
