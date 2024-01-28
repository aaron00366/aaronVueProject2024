<template>
  <RouterView />
</template>
  
  <script>
  const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
  import AOS from 'aos'
  import 'aos/dist/aos.css'
  export default {
    data () {
      return {
        products: [],
        tempProduct: [],
        indexProduct: [],
        category: '全部',
        cart: {},
        cartLength: 1,
        orderData: {
          data: {
            user: {
              name: '',
              email: '',
              tel: '',
              address: ''
            },
            message: ''
          }
        }
      }
    },
    methods: {
      getData () {
        const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`
  
        this.$http.get(url)
          .then((response) => {
            this.products = response.data.products
            console.log(response.data.products)
          })
          .catch((err) => {
            console.log(err)
          })
      },
      getCarts () {
        this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
          .then((res) => {
            this.cart = res.data.data
            this.cartLength = this.cart.carts.length
            console.log('購物車', this.cart.carts.length)
          })
      }
    },
  
    mounted () {
      this.getData()
      this.getCarts()
      AOS.init({
        duration: 900,
      })
    }
  }
  </script>
  
  <style lang="scss">
  
  </style>
  