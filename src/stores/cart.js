import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

const carStore = defineStore('cart', {
  // state 概念同「data」，在此可以使用箭頭函式
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0
    }
  },
  // actions 概念同「methods」
  actions: {
    getCart () {
      axios.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total
          // console.log(res)
          console.log('購物車:data from pinia', this.carts)
        })
    },
    addToCart (productId, qty = 1) {
      const data = {
        data: {
          product_id: productId,
          qty
        }
      }
      axios.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, data)
        .then(res => {
          console.log('加入購物車', res)
          this.getCart()
        })
    },
    deleteItem (item) {
      axios.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          console.log('刪除購物車品項', res)
          this.getCart()
        })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      axios.put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.cart = res.data.data
          console.log('更新購物車', this.cart)
          this.getCart()
          this.loadingItem = ''
        })
    }
  },

  getters: {
  }
})
export default carStore
