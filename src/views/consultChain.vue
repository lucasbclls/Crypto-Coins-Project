<template>
  <div>

    <v-container class="grey lighten-5">
      <v-row no-gutters>

        <v-col cols="4">
          <v-card class="pa-2" outlined tile>

            <div>
              <v-card elevation="10" shaped tile>
                <strong>Date of consult: </strong><br>
                <input type="date" v-model="data" id="inputDate" />
                <h2>Preço da na data selecionada:</h2>
                <tr>
                  <td>preço da moeda em BRL R$: {{ coinBrl }}</td>
                  <td>preço da moeda em USD $:{{ coinUsd }}</td>
                  <td>Preço da moeda em EUR: {{ coinEur }}</td>
                  <td>a data selecionada foi: {{ name }}</td>
                </tr>
                <v-container fluid>

                  <select v-model="coinValue" class="bg-slate-200 border border-red-600	">
                    <option disabled value="">Selecione uma criptomoeda</option>
                    <option v-for="moedas in moeda" :value="moedas.value" :key="moedas.id">
                      {{ moedas.label }}
                    </option>
                  </select>





                </v-container>
                <v-btn color="primary" elevation="4" x-large v-on:click="enviarData(), convertData()"> Consult</v-btn>
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


    <!--RETURN COIN-->




    <!--RETURN COIN-->


    <!--Tratamentos de erros-->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <p v-if="errorData" class="error-message">{{ errorData }}</p>
    <p v-if="errorNull" class="error-message">{{ errorNull }}</p>
    <!--Tratamentos de erros-->

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {

      coinBrl: null,
      coinEur: null,
      coinUsd: null,
      data: "",
      name: "",
      valueSelect: "",
      errorMessage: "",
      errorData: "",
      errorNull: "",
      moeda: [
        { value: "bitcoin", label: "Bitcoin (BTC)" },
        { value: "ethereum", label: "Ethereum (ETH)" },
        { value: "cosmos", label: "Atom (ATC)" },
      ],

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





    };
  },

  methods: {
    convertData() {
      try {
        if (this.valueSelect == null) {
          this.errorData = alert("Moeda não reconhecida");
        }
        this.name = this.data.split("-").reverse().join("-");
        this.valueSelect = this.coinValue;
        this.enviarData()

      } catch (error) {

      }
    },

    enviarData() {
      const selectDate = new Date(this.name);
      const currentDate = new Date();
      if (!this.data.trim()) {
        this.errorNull = alert('Favor selecionar uma data para que possa ser feita a consulta.')
      }
      if (selectDate > currentDate) {
        this.errorMessage = alert("Favor Selecionar uma data valida.");
        return;
      }



      const url = `https://api.coingecko.com/api/v3/coins/${this.valueSelect}/history?date=${this.name}`;
      axios
        .get(url)
        .then((resp) => {
          this.coinBrl = resp.data.market_data.current_price.brl;
          this.coinUsd = resp.data.market_data.current_price.usd;
          this.coinEur = resp.data.market_data.current_price.eur;
        })
        .catch((error) => {

        });
    },
  },
};


</script>

<style></style>