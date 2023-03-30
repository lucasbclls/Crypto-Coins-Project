<template>
  <div>
    <h2>Selecione uma criptomoeda:</h2>
    <select>
      dacxi
    </select>

    <h2>Selecione uma data e hora:</h2>
    <input type="date" v-model="data" />
    <button v-on:click="enviarData">Enviar</button>

    <h2>Preço da na data selecionada:</h2>
    <tr>
      <td> preço da moeda em BRL R$: {{ coinBrl }}</td>
      <td>preço da moeda em USD $:{{ coinUsd }} </td>
      <td>Preço da moeda em EUR: {{ coinEur }}</td>
      <td> a data selecionada foi: {{ name }}</td>
    </tr>
  </div>

  <!--
  <v-container class="grey lighten-5">
    <v-row no-gutters>

      <v-col cols="4">
        <v-card class="pa-2" outlined tile>
          <div>
            <v-card elevation="10" shaped tile>
              <strong>Start of consult:</strong> 
              <strong>Time of consult: </strong>
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
  </v-container> -->
</template>

<script>
import axios from 'axios'
export default {

  name: 'Home',
  data() {
    return {
      coinBrl: [''],
      coinEur: [''],
      coinUsd: [''],
      data: "",
      name: ""
    }
  },
  mounted() {
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-03-2022`)
      .then(resp => {
      this.coinBrl = resp.data.market_data.current_price.brl
      this.coinUsd = resp.data.market_data.current_price.usd
      this.coinEur = resp.data.market_data.current_price.eur
 

      })
      .catch(error => {
        console.log(error)
      })
  },
    
   /* dataTime.get('/coins').then(resp => {
      this.coinBrl = resp.data.market_data.current_price.brl
      this.coinUsd = resp.data.market_data.current_price.usd
      this.coinEur = resp.data.market_data.current_price.eur

    }),
      dataTime.get(`/date`)
      .then(response => {
        this.user = response.data
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  
    
  }, */
  
  methods: {
  enviarData(e) {
      this.name = this.data.split("-").reverse().join("-")
      console.log(this.name)  
  },  
 
  } 
}





/*
}
 
 
 
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

}*/

</script>

<style></style>