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
    <section class="details_section shop_details sec_ptb_120 bg_default_gray">
        <div class="container">

        <div class="row justify-content-lg-between justify-content-md-center justify-content-sm-center">
        <div class="col-lg-6 col-md-7">
        <!-- product img -->
        <div class="d-flex justify-content-center bg-white">
            <img :src="product.imageUrl" alt="">
        </div>
        </div>

        <div class="col-lg-6 col-md-7">
        <div class="details_content wow fadeInUp" data-wow-delay=".2s">
        <div class="details_flex_title">
        <h2 class="details_title text-uppercase">{{ product.title }}</h2>
        </div>
        <p>
        {{product.description}}
        </p>
        <div class="details_price">
        <strong class="price_text">NT. {{ product.price }}</strong>
         </div>
         <ul class="btns_group ul_li">
         <li>
         <div class="quantity_input quantity_boxed">
         <h4 class="quantity_title text-uppercase">數量</h4>
         <form action="#">
        <button type="button" class="input_number_decrement">–</button>
        <input class="input_number" type="text" value="2">
        <button type="button" class="input_number_increment">+</button>
         </form>
         </div>
         </li>
         <li>
            <button type="button" class="btn btn_border border_black text-uppercase"  @click="addToCart(item.id)">加入購物車</button>
        </li>
         </ul>
         </div>
        </div>
        </div>

        <div class="product_description_wrap wow fadeInUp" data-wow-delay=".3s">
         <ul class="tabs_nav ul_li nav" role="tablist">
        <li>
        <button class="active" data-bs-toggle="tab" data-bs-target="#product_description" type="button" role="tab" aria-selected="true">產品敘述</button>
        </li>
        <li>
        <button data-bs-toggle="tab" data-bs-target="#product_additional_info" type="button" role="tab" aria-selected="false">產品內容</button>
        </li>
         </ul>
         <div class="tab-content">
        <div class="tab-pane fade show active" id="product_description" role="tabpanel">
        <p class="mb-0">
        {{ product.description}}
        </p>
        </div>
        <div class="tab-pane fade" id="product_additional_info" role="tabpanel">
        <p class="mb-0">
        {{ product.content }}
        </p>
        </div>
         </div>
        </div>

        <div class="related_products">
        <h4 class="area_title text-uppercase mb-0 wow fadeInUp" data-wow-delay=".1s">相關產品</h4>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6" v-for="item in CategoryProducts" :key="item.id">
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
        </div>
        </div>
        </div>
        </section>
</template>
<script>
import carStore from '../../stores/cart'
import { mapActions } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {},
      CategoryProducts: {}
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then(res => {
          this.product = res.data.product
          console.log(this.product)
          this.getCategoryProducts()
        })
    },
    getCategoryProducts () {
      const { category } = this.product
      this.$http(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products?category=${category}`)
        .then(res => {
          this.CategoryProducts = res.data.products
          console.log('相似', res)
        })
    },
    ...mapActions(carStore, ['addToCart'])
  },
  mounted () {
    this.getProduct()
  }
}
</script>
