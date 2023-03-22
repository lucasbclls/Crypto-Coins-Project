<!---


    <template >
        <div class="container bg-purple-500">
          <div class="row">
      
            <h1>Coin market</h1>
            <input type="text">
      
            <table >
              <thead>
                <tr>
                  <th v-for="title in titles" :key="title"> {{ title }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(coin, index) in coins" :key="coin.id">
                  <td> {{ index }}</td>
                  <td>
                    <img :src="coin.image" style="width: 2rem;">
                    <span>{{ coin.name }}</span>
                    <span class="ms-2 text-uppercase text-muted">{{ coin.symbol }} </span>
                  </td>
                  <td>
                    {{ coin.current_price }}
                  </td>
                  <td>
                    {{ coin.price_change_percentage_24h }} %
                  </td>
                  <td>
                    $ {{ coin.total_volume.toLocaleString() }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
      
      <script>
      export default {
        name: "consultChain",
        data() {
          return {
            coins: [],
            titles: [
              '#',
              'Coin',
              'Price',
              'Price Change',
              '24h Value',
            ]
          };
        },
        async mounted() {
          const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          );
          const data = await res.json();
          this.coins = data;
        },
      };
      </script>
      
      <style>

      
      * {
        margin:0;
        padding: 0;
      }
      </style> -->

