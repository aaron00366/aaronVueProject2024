<template>
    <header class="header_section" :class="{ sticky: isSticky }" ref="header_sectionDOM">
        <div class="content_wrap">
          <div class="container maxw_1560 pe-5 ps-3">
            <div class="row align-items-center">

              <div class="col-lg-2 col-md-6 col-6">
                <div class="brand_logo">
                  <RouterLink  to="/" class="brand_link" >
                    <img src="../assets/image/logo/logo_white_1x.png" srcset="" alt="logo_not_found">
                  </RouterLink>
                </div>
              </div>

              <div class="col-lg-10 col-md-6 col-6">
                <nav class="main_menu navbar navbar-expand-lg">
                  <button class="mobile_menu_btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                      <i class="bi bi-list"></i>
                    </span>
                  </button>
                  <div class="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
                    <ul class="main_menu_list ul_li">
                      <li>
                        <RouterLink class="nav-link" to="/products" role="button">
                          {{ $t('menu.productContent') }}
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink class="nav-link"  to="/about" role="button">{{ $t('menu.aboutUs') }}</RouterLink>
                      </li>
                      <li>
                        <RouterLink class="nav-link" to="/articles" role="button">
                          {{ $t('menu.blog') }}
                        </RouterLink>
                      </li>
                    </ul>
                  </div>

                  <ul class="header_btns_group ul_li_right">
                    <li class="d-flex align-items-center jusitify-content-center">
                      <button class="languageBtn" @click="switchToChinese">中文</button>
                      <span> | </span>
                      <button class="languageBtn" @click="switchToEnglish">English</button>
                    </li>
                    <li>
                      <button type="button" class="cart_btn" @click="openSiderbar">
                        <i class="bi bi-bag"></i>
                        <small class="cart_counter">{{ carts.length }}</small>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
    </header>
    <div class="sidebar-menu-wrapper" >
      <div class="cart_sidebar" ref="cart_sidebarDOM">
    <button type="button" class="close_btn" ref="slidbarClose" @click="closeSiderbar">
      <i class="bi bi-x"></i>
    </button>
    <h2 class="heading_title text-uppercase">購物車產品數量 - <span>{{carts.length}}</span></h2>

<div class="cart_items_list">
    <div class="cart_item" v-for="item in carts" :key="item.id">
        <div class="item_image">
        <img :src="item.product.imageUrl" alt="">
        </div>
        <div class="item_content">
        <h4 class="item_title">
            {{ item.product.title }}
        </h4>
        <span class="item_price">NT. {{ item.product.price }}</span>
        <button type="button" class="remove_btn" @click="deleteItem(item)">
            <i class="bi bi-x"></i>
        </button>
        </div>
    </div>
    </div>
    <div class="total_price text-uppercase">
    <span>總金額:</span>
    <span>{{ total }}</span>
    </div>
    <ul class="btns_group ul_li">
    <li>
    <RouterLink to="cart" class="btn btn_primary">查看購物車</RouterLink>
    </li>
    <li>
      <RouterLink to="checkout" class="btn btn_border border_black">結帳</RouterLink>
    </li>
    </ul>
</div>
<div class="cart_sidebar_overlay" ref="cart_sidebar_overlayDOM" @click="closeSiderbar"></div>
    </div>

    <RouterView></RouterView>

    <footerComponentVue></footerComponentVue>
</template>

<script>
import { RouterView } from 'vue-router'
import footerComponentVue from '../components/footerComponent.vue'
// import footerComponent from '../components/footerComponent.vue'
import carStore from '../stores/cart.js'
import { mapActions, mapState } from 'pinia'

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
      slidbarClose: '',
      isSticky: false
    }
  },
  computed: {
    ...mapState(carStore, ['carts', 'total', 'final_total'])
  },
  methods: {
    switchToEnglish () {
      this.$i18n.locale = 'en'
    },
    switchToChinese () {
      this.$i18n.locale = 'zh-TW'
    },
    ...mapActions(carStore, ['getCart', 'deleteItem']),
    // ...mapActions(languageStore, ['switchToEnglish', 'switchToChinese']),

    openSiderbar () {
      this.cart_sidebar.classList.add('active')
      this.cart_sidebar_overlay.classList.add('active')
    },
    closeSiderbar () {
      this.cart_sidebar.classList.remove('active')
      this.cart_sidebar_overlay.classList.remove('active')
    },
    handleScroll () {
      if (window.scrollY > 120) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    }
  },
  components: {
    RouterView,
    footerComponentVue
  },
  mounted () {
    // this.getData()
    this.getCart()
    this.cart_sidebar = this.$refs.cart_sidebarDOM
    this.cart_sidebar_overlay = this.$refs.cart_sidebar_overlayDOM
    this.slidbarClose = this.$refs.slidbarClose
    this.slidbarClose = this.$refs.header_sectionDOM
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss">
</style>
