<template>
  <div>
    <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>

  </div>
</template>

<script>

export default {
  name: 'Home',

  data() {
    return {
      headers: [
        {
          text: 'Coin',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Position', value: 'protein' },
        { text: 'Price', value: 'calories' },
        { text: 'Price Change', value: 'fat' },
        { text: '24h Value', value: 'carbs' },
      ],
      desserts: [{
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 20,
        iron: 1,
      },

      ]
     
    }
  }
}
  
  

  


 

</script>

<style></style>