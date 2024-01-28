<template>
  <section class="slider_section slider_dark homeBanner">
          <div class="main_slider pb-0 wow fadeInUp" data-wow-delay=".1s">
            <div class="slider_item text-white" style="background-image: url(../src/assets/image/img_01.png);">
              <div class="container">
                <div class="row justify-content-lg-start justify-content-md-center">
                  <div class="col-lg-6 col-md-8">
                    <h3 class="title_text text-white"  data-aos="fade-up">
                      {{ $t('header.titleText') }}
                    </h3>
                    <p data-aos="fade-up" data-aos-delay="300">
                      {{ $t('header.subtitleText') }}
                    </p>
                    <ul class="btns_group ul_li"  data-aos="fade-up" data-aos-delay="500">
                      <li><RouterLink to="/products" class="btn btn_primary">{{ $t('header.actBtn') }}</RouterLink></li>
                      <!-- <li><a class="btn border_white" href="shop_details.html">購買咖啡豆</a></li> -->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slider_social_wrap" style="height:38px">
            <div class="container maxw_1560">
            </div>
          </div>
  </section>
  <!-- 特色 -->
  <section class="feature_primary_section">
          <div class="container">
            <div class="row feature_primary_section_row">
              <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-down">
                <div class="feature_primary wow fadeInUp" data-wow-delay=".1s">
                  <div class="item_icon">
                    <span class="item_serial">1</span>
                    <span class="d-flex align-items-center justify-content-center">
                    <div style="background-image: url(../src/assets/image/icon_01.png);background-size: cover;
                    background-position: center center;
                    width: 35px;
                    height: 35px;"></div>
                  </span>
                  </div>
                  <h3 class="item_title">獨特風味</h3>
                  <p class="mb-0">
                    我們的咖啡，散發著獨特且撲鼻的風味，成為您味蕾的美好享受
                  </p>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-down" data-aos-delay="50">
                <div class="feature_primary wow fadeInUp" data-wow-delay=".2s">
                  <div class="item_icon">
                    <span class="item_serial">2</span>
                    <span class="d-flex align-items-center justify-content-center">
                    <div style="background-image: url(../src/assets/image/icon_02.png);background-size: cover;
                    background-position: center center;
                    width: 35px;
                    height: 35px;"></div>
                  </span>
                  </div>
                  <h3 class="item_title">新鮮烘焙</h3>
                  <p class="mb-0">
                    每一杯咖啡都是由新鮮烘焙的豆子製作而成，帶來源源不絕的美味香氣
                  </p>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-down" data-aos-delay="100">
                <div class="feature_primary wow fadeInUp" data-wow-delay=".3s">
                  <div class="item_icon">
                    <span class="item_serial">3</span>
                    <span class="d-flex align-items-center justify-content-center">
                    <div style="background-image: url(../src/assets/image/icon_03.png);background-size: cover;
                    background-position: center center;
                    width: 35px;
                    height: 35px;"></div>
                  </span>
                  </div>
                  <h3 class="item_title">精選咖啡豆</h3>
                  <p class="mb-0">
                    精心挑選的咖啡豆，讓您品嚐到高品質且豐富口感的咖啡體驗
                  </p>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-down" data-aos-delay="150">
                <div class="feature_primary wow fadeInUp" data-wow-delay=".4s">
                  <div class="item_icon">
                    <span class="item_serial">4</span>
                    <span class="d-flex align-items-center justify-content-center">
                    <div style="background-image: url(../src/assets/image/icon_04.png);background-size: cover;
                    background-position: center center;
                    width: 35px;
                    height: 35px;"></div>
                  </span>
                  </div>
                  <h3 class="item_title">獨特氛圍</h3>
                  <p class="mb-0">
                    我們咖啡店特有的氛圍，營造出讓人流連忘返的獨特魅力與舒適感
                  </p>
                </div>
              </div>
            </div>
          </div>
  </section>
  <!-- 首頁六個產品 -->
  <section class="shop_section sec_ptb_120 bg_gray">
          <div class="container">
            <div class="section_title">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-8">
                  <h2 class="small_title wow fadeInUp" data-wow-delay=".1s">
                    <i class="bi bi-cup-hot-fill"></i>
                   線上商店</h2>
                  <h3 class="big_title wow fadeInUp" data-wow-delay=".2s">
                    我們的最新產品
                  </h3>
                </div>

                <div class="col-lg-6 col-md-4">
                  <div class="abtn_wrap text-lg-end text-md-end wow fadeInUp" data-wow-delay=".3s">
                    <a class="btn btn_border border_black" href="shop.html">查看所有產品</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 col-sm-6" v-for="item in indexProduct" :key="item.title" >
                <div class="shop_card" data-aos="fade-down">
                  <div class="share_btns">
                    <div class="share_btn">
                      {{ item.category }}
                    </div>
                  </div>
                  <a class="item_image" href="shop_details.html">
                    <img :src="item.imageUrl" alt="image_not_found">
                  </a>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="shop_details.html">{{ item.title }}</a>
                    </h3>
                    <div class="btns_group">
                      <span class="item_price bg_default_brown">NT.{{ item.price }}</span>
                      <button type="button" class="btn btn_border border_black"  @click="addToCart(item.id)">加入購物車</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </section>
  <!-- 關於我們 -->
  <section class="about_section sec_ptb_120">
          <div class="container">
            <div class="row align-items-center justify-content-lg-between">
              <div class="col-lg-6 col-md-6 order-last"  data-aos="fade-left">
                <div class="about_image1 wow fadeInRight" data-wow-delay=".1s">
                  <!-- <img src="assets/images/cafeImg.jpg" alt="image_not_found"> -->
                  <div class="w-100" style="background-image: url(../src/assets/image/cafeImg.jpg);background-size: cover;
            background-position: center center;padding: 188px;background-repeat: no-repeat;"></div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6"  data-aos="fade-right" data-aos-delay="50">
                <div class="about_content">
                  <div class="section_title">
                    <h2 class="small_title"><i class="bi bi-cup-hot-fill"></i>關於我們</h2>
                    <h3 class="big_title wow fadeInUp" data-wow-delay=".1s">
                      我們的咖啡之旅
                    </h3>
                  </div>
                  <ul class="about_info ul_li_block">
                    <li class="wow fadeInUp" data-wow-delay=".3s">
                      <h4>追尋咖啡的精髓</h4>
                      <p class="mb-0">
                        我們的旅程始於對咖啡深厚的熱愛，我們探尋著咖啡的各種風味、文化和技藝。
                      </p>
                    </li>
                    <li class="wow fadeInUp" data-wow-delay=".4s">
                      <h4>品質與匠心烘焙</h4>
                      <p class="mb-0">
                        我們堅持高品質的咖啡豆和匠心烘焙，為您打造精緻、細膩的咖啡饗宴。
                      </p>
                    </li>
                    <li class="wow fadeInUp" data-wow-delay=".3s">
                      <h4>共享、交流與溫暖</h4>
                      <p class="mb-0">
                        我們努力營造一個溫馨的社區空間，促進人與人之間的交流與共享。
                      </p>
                    </li>
                    <li class="wow fadeInUp" data-wow-delay=".3s">
                      <h4>融合創意的咖啡體驗</h4>
                      <p class="mb-0">
                        我們熱衷於創新與藝術，為您帶來融合創意的獨特咖啡體驗，每一杯都是我們對熱情的表達。
                      </p>
                    </li>
                  </ul>
                  <ul class="btns_group ul_li wow fadeInUp" data-wow-delay=".5s">
                    <li>
                      <RouterLink class="btn btn_primary" to="/about" >查看更多</RouterLink>
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  </section>
  <!-- offer -->
  <section class="offer_section">
          <div class="container-fluid p-0">
            <div class="row g-0">
              <div class="col-lg-4"  data-aos="fade-right">
                <div class="offer_video wow fadeIn" data-wow-delay=".1s">
                  <div class="overlay"></div>
                  <!-- <img src="assets/images/offerImg.jpg" alt="image_not_found"> -->
                  <div class="w-100" style="background-image: url(../src/assets/image/offerImg.jpg);background-size: cover;
            background-position: center center;padding: 188px;background-repeat: no-repeat;"></div>
                </div>
              </div>

              <div class="col-lg-8" data-aos="fade-left" data-aos-delay="50">
                <div class="offer_area">
                  <div class="offer_content">
                    <div class="section_title">
                      <h2 class="small_title wow fadeInUp" data-wow-delay=".1s"><i class="bi bi-cup-hot-fill"></i> 我們提供</h2>
                      <h3 class="big_title wow fadeInUp" data-wow-delay=".2s">
                        精選咖啡文化：<br>我們獨特的品味與服務
                      </h3>
                    </div>

                    <p class="wow fadeInUp" data-wow-delay=".3s">
                      我們不僅提供咖啡，更為您帶來的是一種生活方式和品味體驗。我們精心挑選世界各地最優質的咖啡豆，以最細膩的烘焙工藝呈現出鮮明的風味和豐富的層次感。無論您是熱愛濃縮咖啡、拿鐵、卡布奇諾，還是熱衷於品嘗各種特色手沖咖啡，我們都能滿足您的口味和喜好。此外，我們也提供精選的咖啡豆供您購買，讓您可以在家中同樣享受到我們店裡的美味咖啡。我們店內氛圍舒適，是與朋友聚會、與摯愛共度時光的絕佳場所。無論您是咖啡愛好者，或僅是想要放鬆休閒的一刻，我們都期待為您帶來最美好的咖啡體驗。
                    </p>
                  </div>
                </div>

                <div class="row g-0">
                  <div class="offerinfo_col col-lg-4">
                    <div class="offer_info_item table_reservation_contact wow fadeInUp" data-wow-delay=".1s">
                      <h3 class="offer_info_title">訂位. . . .<i class="fal fa-heart"></i></h3>
                      <ul class="ul_li_block">
                        <li>
                          <div class="item_icon">
                            <i class="bi bi-telephone-fill"></i>
                          </div>
                          <div class="item_content">
                            <span>(02) 23346789</span>
                            <span>+886 0978-724-555</span>
                          </div>
                        </li>
                        <li>
                          <div class="item_icon">
                            <i class="bi bi-envelope-fill"></i>
                          </div>
                          <div class="item_content">
                            <span>coffeee@webmail.com</span>
                            <span>coffeeee@mail.com</span>
                          </div>
                        </li>
                        <li>
                          <div class="item_icon">
                            <i class="bi bi-house-add-fill"></i>
                          </div>
                          <div class="item_content">
                            <span>08744,Sadar pur 8973</span>
                            <span>08744,Sadar pur 8973</span>
                          </div>
                        </li>
                      </ul>
                      <a class="btn btn_secondary" href="contact.html">聯絡我們</a>
                    </div>
                  </div>

                  <div class="offerinfo_col col-lg-4">
                    <div class="offer_info_item opening_time text-white wow fadeInUp" data-wow-delay=".2s" style="background-image: url(../src/assets/image/offer/bg_01.png);">
                      <h3 class="offer_info_title text-white">營業時間. . . . <i class="fal fa-clock"></i></h3>
                      <ul class="ul_li_block">
                        <li>
                          星期一
                          <span>9:00 - 18:00</span>
                        </li>
                        <li>
                          星期二
                          <span>10:00 - 18:00</span>
                        </li>
                        <li>
                          星期三
                          <span>11:00 - 18:00</span>
                        </li>
                        <li>
                          星期四
                          <span>12:00 - 18:00</span>
                        </li>
                        <li>
                          星期五
                          <span>14:00 - 18:00</span>
                        </li>
                        <li>
                          星期六
                          <span>16:00 - 18:00</span>
                        </li>
                        <li>
                          星期日
                          <span>休息</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </section>
  <!-- 文章 -->
  <section class="blog_section sec_ptb_120">
          <div class="container">
            <div class="section_title text-center">
              <h2 class="small_title wow fadeInUp" data-wow-delay=".1s">
                <i class="bi bi-cup-hot-fill"></i>
                 相關文章</h2>
              <h3 class="big_title wow fadeInUp" data-wow-delay=".2s">最新文章</h3>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 col-sm-6" v-for="item in indexArticles" :key="item.id" data-aos="fade-down">
                <div class="blog_grid">
                  <a class="item_image" href="blog_details.html">
                    <img :src="item.imageUrl" alt="image_not_found" style="object-fit: cover;height: 250px;">
                  </a>
                  <div class="item_content">
                    <h3 class="item_title">
                      <a href="blog_details.html">{{ item.title }}</a>
                    </h3>
                    <p class="multiline-ellipsis">
                      {{ item.description }}
                    </p>
                    <a class="btn_text" href="blog_details.html"><span>查看更多</span>
                      <i class="bi bi-arrow-right-short"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="load_more text-center wow fadeInUp" data-wow-delay=".1s">
              <RouterLink class="btn btn_border border_black" to="/articles" role="button">
              相關文章
                </RouterLink>
            </div>

          </div>
  </section>
</template>

<script>

import carStore from '../../stores/cart'
import { mapActions, mapState } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      articles: [],
      indexArticles: [],
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
    getIndexSixData () {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products`
      this.$http.get(url)
        .then((response) => {
          this.indexProduct = (response.data.products).splice(0, 6)
          console.log('首頁產品',this.indexProduct)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getArticles () {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/articles`
      this.$http.get(url)
        .then((response) => {
          this.articles = response.data.articles
          console.log('文章',this.articles)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getIndexArticles () {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/articles`
      this.$http.get(url)
        .then((response) => {
          this.indexArticles = (response.data.articles).splice(0, 3)
          // console.log('前三篇文章',this.indexArticles)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ...mapActions(carStore, ['getCart', 'addToCart']),
    openSiderbar () {
      console.log('dsds')
    },
    // addToCart (productId, qty = 1) {
    //   const data = {
    //     product_id: productId,
    //     qty
    //   }
    //   this.$http.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
    //     .then((res) => {
    //       console.log('加入購物車:', res.data)
    //       this.getCarts()
    //       this.cartLength = this.cart.carts.length
    //       console.log('更新後的', this.cartLength)
    //       alert('成功加入')
    //     })
    // },
    deleteItem (item) {
      this.$http.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          console.log('刪除購物車品項', res)
          this.getCarts()
        })
    }
  },
  computed: {
    ...mapState(carStore, ['carts', 'total', 'final_total'])
  },
  mounted () {
    this.getData()
    this.getIndexSixData()
    this.getCart()
    this.getArticles()
    this.getIndexArticles()
  }
}
</script>

<style scoped>
</style>
