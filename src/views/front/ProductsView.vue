<template>
  <section class="breadcrumb_section text-uppercase" style="background-image: url(../src/assets/image/innerHeroImg.jpeg);">
    <div class="container">
      <h1 class="page_title text-white wow fadeInUp" data-wow-delay=".1s">線上商店</h1>
      <ul class="breadcrumb_nav ul_li wow fadeInUp" data-wow-delay=".2s">
        <li><a href="index.html"><i class="fas fa-home"></i> 首頁</a></li>
        <li>線上商店</li>
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
  <section class="shop_section sec_ptb_120 bg_default_gray">
    <div class="container">
        <ul class="filters-button-group ul_li_center wow fadeInUp" data-wow-delay=".1s">
          <li><button class="button text-uppercase" v-bind:class="{'active': category === '全部'}" @:click="category = '全部'">全部</button></li>
          <li><button class="button text-uppercase" v-bind:class="{'active': category === '黃金烘培'}" @:click="category = '黃金烘培'">黃金烘培</button></li>
          <li><button class="button text-uppercase" v-bind:class="{'active': category === '中度烘培'}" @:click="category = '中度烘培'">中度烘培</button></li>
          <li><button class="button text-uppercase" v-bind:class="{'active': category === '深度烘培'}" @:click="category = '深度烘培'">深度烘培</button></li>
        </ul>
        <div class="row wow fadeInUp" data-wow-delay=".3s">
    <template v-for="item in products" :key="item.title">
      <div class="element-item col-lg-4 col-md-6 col-sm-6" v-if="item.category == category">
        <div class="shop_card wow fadeInUp" data-wow-delay=".1s">
          <div class="share_btns">
          <button type="button" class="share_btn">
            {{ item.category }}
          </button>

          </div>
          <RouterLink :to="`/product/${item.id}`" class="item_image">
          <img :src="item.imageUrl" alt="image_not_found">
          </RouterLink>
          <div class="item_content">
          <h3 class="item_title text-uppercase">
            <RouterLink :to="`/product/${item.id}`">{{ item.title }}</RouterLink>
          </h3>
          <div class="btns_group">
            <span class="item_price bg_default_brown">NT.{{ item.price }}</span>
            <button type="button" class="btn btn_border border_black text-uppercase"  @click="addToCart(item.id)">加入購物車</button>
          </div>
          </div>
        </div>
      </div>

      <div class="element-item col-lg-4 col-md-6 col-sm-6" v-else-if="category === '全部'">
        <div class="shop_card wow fadeInUp" data-wow-delay=".1s">
          <div class="share_btns">
            <button type="button" class="share_btn">
            {{ item.category }}
            </button>

          </div>
          <RouterLink :to="`/product/${item.id}`" class="item_image">
            <img :src="item.imageUrl" alt="image_not_found">
          </RouterLink>
          <div class="item_content">
            <h3 class="item_title text-uppercase">
            <RouterLink :to="`/product/${item.id}`">{{ item.title }}</RouterLink>
            </h3>
            <div class="btns_group">
            <span class="item_price bg_default_brown">NT.{{ item.price }}</span>
            <button type="button" class="btn btn_border border_black text-uppercase"  @click="addToCart(item.id)">加入購物車</button>
            </div>
          </div>
          </div>
        </div>
    </template>
        </div>
    </div>
  </section>

</template>
<script>
import carStore from '../../stores/cart'
import { mapActions } from 'pinia'
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      tempProduct: [],
      indexProduct: [],
      category: '全部',
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
      },
      cart_sidebar: '',
      cart_sidebar_overlay: '',
      slidbarClose: ''
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
    ...mapActions(carStore, ['getCart', 'addToCart'])
  },
  components: {
    RouterLink
  },
  mounted () {
    this.getData()
  }
}
</script>
