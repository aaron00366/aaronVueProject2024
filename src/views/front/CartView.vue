<template>
    <section class="breadcrumb_section text-uppercase" style="background-image: url(../src/assets/image/innerHeroImg.jpeg);">
    <div class="container">
      <h1 class="page_title text-white wow fadeInUp" data-wow-delay=".1s">購物車</h1>
      <ul class="breadcrumb_nav ul_li wow fadeInUp" data-wow-delay=".2s">
        <li><a href="index.html"><i class="fas fa-home"></i> 首頁</a></li>
        <li>購物車</li>
      </ul>
    </div>
    <div class="breadcrumb_icon_wrap">
      <div class="container">
        <div class="breadcrumb_icon wow fadeInUp" data-wow-delay=".3s">
          <!-- <img src="../src/assets/image/icon_01"> -->
          <span class="bg_shape d-flex align-items-center justify-content-center">
            <div style="background-image: url(../src/assets/image/icon_01.png);background-size: cover;
            background-position: center center;
            width: 35px;
            height: 35px;
            transform: rotate(-45deg);"></div>
          </span>
        </div>
      </div>
    </div>
  </section>
    <section class="cart_section sec_ptb_120 bg_default_gray">
    <div class="container">
        <div class="cart_table">
        <table class="table">
            <thead>
                <tr>
                    <th class="bg-transparent">產品名稱</th>
                    <th class="bg-transparent">價格</th>
                    <th class="bg-transparent">數量</th>
                    <th class="bg-transparent">小計</th>
                </tr>
            </thead>
                <tbody>
                    <tr data-wow-delay=".1s" class="cart_item" v-for="item in carts" :key="item.id">
                    <td>
                        <div class="carttable_product_item">
                        <div class="item_image d-flex align-items-center justify-content-center">
                            <img :src="item.product.imageUrl" alt="">
                        </div>
                            <button type="button" class="remove_btn" @click="deleteItem(item)">
                                <i class="bi bi-x"></i>
                            </button>
                            <h3 class="item_title">{{ item.product.title }}</h3>
                        </div>
                    </td>
                    <td><span class="price_text1">NT. {{ item.product.price }}</span></td>
                    <td>
                    <div class="quantity_input">
                        <select name="" id="" class="form-control" v-model="item.qty" @change="updateCartItem(item)">
                            <option :value="i" v-for="i in 20" :key="`${i}dlskj`">{{i}}</option>
                            </select>
                    </div>
                    </td>
                    <td>
                        <span class="price_text2">NT. {{ item.total }}</span>
                    </td>
                    </tr>
                </tbody>
        </table>
        </div>
        <ul class="carttable_footer ul_li_right wow fadeInUp" data-wow-delay=".1s">
            <li>
                <div class="total_price text-uppercase">
                    <span>總計:</span>
                    <span>NT. {{ total }}</span>
                </div>
            </li>
            <!-- <li>
                <div class="total_price text-uppercase">
                    <span>total</span>
                    <span>$45,00</span>
                </div>
            </li> -->
            <li>
                <RouterLink class="btn btn_primary text-uppercase" to="checkout">結帳</RouterLink>
            </li>
        </ul>
    </div>
</section>
</template>
<script>
import carStore from '../../stores/cart.js'
import { mapActions, mapState } from 'pinia'

export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(carStore, ['carts', 'total', 'final_total'])
  },
  components:{
    Loading
  },
  methods: {
    ...mapActions(carStore, ['getCart', 'deleteItem', 'updateCartItem'])
  },
  mounted () {
    this.getCart()
  }
}
</script>
