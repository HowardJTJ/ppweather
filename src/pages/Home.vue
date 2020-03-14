<template>
  <v-container>
    <h1>5 Day Forecast</h1>
    <v-col  v-for="(forecast, xindex) in forecasts" :key="xindex" class="d-flex justify-center">
      <h2 class="ma-1">{{forecast[xindex].dayWeek}}</h2>
      <br>
      <v-card v-for="(item, yindex) in forecast" :key="yindex" class="ma-1" outlined max-width="180" max-height="200">
        <v-img v-if="item.weather[0].main == 'Clear'" class="white--text align-end" height="100px" src ="https://images.unsplash.com/12/sun-trees.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1794&q=80" >
          <v-card-title>{{item.weather[0].main}}</v-card-title>
        </v-img>
        <v-img v-if="item.weather[0].main == 'Clouds'" class="white--text align-end" height="100px" src ="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" >
          <v-card-title>{{item.weather[0].main}}</v-card-title>
        </v-img>
        <v-img v-if="item.weather[0].main == 'Rain'" class="white--text align-end" height="100px" src ="https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" >
          <v-card-title>{{item.weather[0].main}}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{item.temp}} Celsius</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>{{item.time}}</div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      forecasts: []
    };
  },
  methods: {
    getForecast: async function() {
      // this.forecasts = ;
      let response = await axios.get("http://localhost:3000/forecast/");
      this.forecasts = response.data.forecast;
    }
  },
  beforeMount() {
    this.getForecast();
  }
};
</script>