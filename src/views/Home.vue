<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for crypto Select..." type="text" name="search" @keyup="searchCoin()"
          v-model="textSearch" />

        <tr>
          <th> Position</th>
          <th>Coin</th>
          <th>
            Name
          </th>
          <th>
            Symbol
          </th>
          <th>
            Current Price
          </th>
          <th>
            Price Change (24h)
          </th>
          <th>
            Market Cap
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(coins, index) in filteredCoins" :key="coins.id">
          <td>{{ index + 1 }} </td>
          <td> <img :src="coins.image" style="width: 2rem"> </td>
          <td>{{ coins.id.toUpperCase() }}</td>
          <td>{{ coins.symbol }}</td>
          <td>{{ coins.current_price }}</td>
          <td :class="[coins.market_cap_change_24h > 0 ? 'text-green-500' : 'text-red-600',]">
            {{ coins.market_cap_change_24h }} %
          </td>
          <td>$ {{ coins.market_cap.toLocaleString() }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>

import api from '@/services/api.js'

export default {
  name: 'Home',
  data() {
    return {
      coin: [],
      filteredCoins: [],
      textSearch: "",
    }
  },
  mounted() {
    api.get('/coins').then(response => {
      this.coin = response.data
      this.filteredCoins = response.data
    })
  },
  methods: {
    searchCoin() {
      this.filteredCoins = this.coin.filter((coin) => 
      coin.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(this.textSearch.toLowerCase()) );
    }
  },


}

</script>

<style></style>