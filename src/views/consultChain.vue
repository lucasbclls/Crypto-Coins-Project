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
      </style> 
      <template>
        
      </template>
      
      <script>
      export default {
        methods:{
        listCoins(){
          this.loading = true;
          this.$http.get(
            "coins/markets?vs_currency=brl&ids=bitcoin%2C%20dacxi%2C%20ethereum%2C%20cosmos"
          )
          .then(resp => {
            this.loading = true;
            if(resp.status == 200){
              this.coins = resp.data.map(coin => {
                return {
                  ...coin, 
                  current_price: `R$ ${coin.current_price.toLocaleString()}`,
                  price_change_24h: parseFloat(`${coin.price_change_24h.toFixed(2)}`),
                  // price_change_24h: 2,
                  market_cap: `R$ ${coin.market_cap.toLocaleString()}`,
                };
              })
              this.coinsName = resp.data
            } else{
              console.log(resp.message)
            }
          }).finally(()=> this.loading = false)
        },
        search(){
          this.loading = true;
          this.$http.get(
            `coins/${this.selectedCoin}/history?date=${this.date}&localization=brl`
          ).then(resp => {
            const coin = resp.data;
            if(!coin.market_data){
              this.snackbar(
                "Data not found", 
                "error"
              )
            }
            this.coins = [{
              name: coin.name,
              symbol: coin.symbol,
              current_price: `R$ ${coin.market_data.current_price.brl.toFixed(2).toLocaleString()}`,
              price_change_24h: "- ",
              market_cap: `R$ ${coin.market_data.market_cap.brl.toFixed(2).toLocaleString()}`,
              image: coin.image.small
            }]
          }).catch((resp) => {
              this.snackbar(
                resp.response.data.error, 
                "error"
              )
            }
          ).finally(() => this.loading = false)
        },
        snackbar(message, color){
          this.snackbarOptions = {
            active: true,
            message,
            color 
          }
        }
      },

      }
      </script>
      
      <style>
      
      </style>

    -->
    <template>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Coin</th>
              <th>
                Name
              </th>
              <th >
                Symbol
              </th>
              <th >
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
            <tr
              v-for="coins in coin"
              :key="coins.name"
            > <td> <img :src="coins.image" style="width: 2rem"> </td>
              <td>{{ coins.id.toUpperCase() }}</td>
              <td>{{ coins.symbol }}</td>
              <td>{{ coins.current_price }}</td>
              <td>{{ coins.market_cap_change_24h}}</td>
              <td>{{ coins.market_cap }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
    