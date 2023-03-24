<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>

      <v-col cols="4">
        <v-card class="pa-2" outlined tile>
          <div>
            <v-card elevation="10" shaped tile>
              <strong>Start of consult:</strong> <input id="date" type="date"> <br>
              <strong>Time of consult: </strong><input id="time" type="time"> <br>
              <v-container fluid>
                ,
                <v-row>
                  <v-combobox v-model="select" :items="items" label="Chain Select" multiple outlined dense></v-combobox>
                </v-row>
              </v-container>
              <v-btn color="primary" elevation="4" x-large> Consult</v-btn>
            </v-card>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" outlined tile>
          <div>
            <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from '@/services/api.js'

export default {
  data() {
    return {
      coin: [],
      filteredCoins: [],
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
      mounted() {
        api.get('/coins').then(response => {
          this.coin = response.data
          this.filteredCoins = response.data
          console.log(this.filteredCoins)
        })
      }

    }

  }
}
</script>

<style></style>