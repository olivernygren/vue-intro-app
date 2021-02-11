const app = Vue.createApp({
  data() {
    return {
      url: 'https://olivernygrenweb.se/',
      showBoots: true,
      boots: [
        { title: 'Green Boots', brand: 'Vagabond', img: './assets/green.jpg', isFav: false, price: 799 },
        { title: 'Brown Boots', brand: 'Adidas', img: './assets/brown.jpg', isFav: false, price: 999 },
        { title: 'Red Boots', brand: 'Louis Vuitton', img: './assets/red.jpg', isFav: false, price: 1299 }
      ]
    }
  },
  methods: {
    toggleShowBoots() {
      this.showBoots = !this.showBoots
    },
    toggleFavs(boot) {
      boot.isFav = !boot.isFav
    }
  },
  // computed: {
  //   filteredBoots() {
  //     return this.boots.filter((boot) => boot.isFav)
  //   }
  // }
})

app.mount('#app')