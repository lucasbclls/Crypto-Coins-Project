<template>
  <div>
    <h2>Selecione uma criptomoeda:</h2>
    <select>
    </select>

    <h2>Selecione uma data e hora:</h2>
    <input type="datetime-local" v-model="selectedDate" />

    <h2>Preço da na data selecionada:</h2>
    <tr>
      <td> preço da moeda em BRL R$: {{ resposta.brl }}</td> <br>
      <td>preço da moeda em USD $: {{ }}</td>
      <td></td>
    </tr>
    <p>Selecione uma criptomoeda e uma data e hora para ver o preço.</p>
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
import dataTime from '@/services/dataTime.js'

export default {

  name: 'Home',
  data() {
    return {
      resposta: [{
        brl: this.brl,
        usd: this.usd,
        eur: this.eur
      }],
    }
  },
  mounted() {
    dataTime.get('/coins').then(resp => {
      this.brl = resp.data.market_data.current_price.brl.append(this.brl, resposta)
      this.usd = resp.data.market_data.current_price.usd.JSON.parse()
      this.eur = resp.data.market_data.current_price.eur.JSON.parse()

    })
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