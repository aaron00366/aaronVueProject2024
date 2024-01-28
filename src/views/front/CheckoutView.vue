<template>
    <section class="breadcrumb_section text-uppercase" style="background-image: url(../src/assets/image/innerHeroImg.jpeg);">
    <div class="container">
      <h1 class="page_title text-white wow fadeInUp" data-wow-delay=".1s">個人資訊</h1>
      <ul class="breadcrumb_nav ul_li wow fadeInUp" data-wow-delay=".2s">
        <li><a href="index.html"><i class="fas fa-home"></i> 首頁</a></li>
        <li>個人資訊</li>
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
        <div class="container container_boxed">
            <div class="checkout_form">
                <form action="#">
                    <h3 class="form_title text-uppercase wow fadeInUp">個人資料</h3>
                    <div class="row wow fadeInUp" data-wow-delay=".3s">
                        <div class="col-lg-6">
                        <div class="form_item">
                            <h4 class="form_field_title">姓名<sup class="text-danger">*</sup></h4>
                            <input type="text" name="name" placeholder="請輸入姓名" v-model="orderData.data.user.name">
                        </div>
                        </div>

                        <div class="col-lg-6">
                        <div class="form_item">
                            <h4 class="form_field_title">電話<sup class="text-danger">*</sup></h4>
                            <input type="tel" name="lastname" placeholder="請輸入電話" v-model="orderData.data.user.tel">
                        </div>
                        </div>

                        <div class="col-lg-6">
                        <div class="form_item">
                            <h4 class="form_field_title">email<sup class="text-danger">*</sup></h4>
                            <input type="mail" name="mail" placeholder="請輸入email" v-model="orderData.data.user.email">
                        </div>
                        </div>

                        <div class="col-lg-6">
                        <div class="form_item">
                            <h4 class="form_field_title">地址<sup class="text-danger">*</sup></h4>
                            <input type="text" name="address" placeholder="請輸入送貨地址" v-model="orderData.data.user.address">
                        </div>
                        </div>
                    </div>

                    <div class="form_item wow fadeInUp" data-wow-delay=".4s">
                        <h4 class="form_field_title">留言</h4>
                        <textarea name="message" placeholder="請輸入留言" v-model="orderData.data.message"></textarea>
                    </div>
                </form>
                <div class="checkout_form_footer wow fadeInUp" data-wow-delay=".5s">
                    <span class="total_price"><strong>總計:</strong> NT. {{ total }}</span>
                    <a class="btn btn_primary text-uppercase" href="" @click.prevent="addOrder()">送出訂單</a>
                </div>
            </div>
        </div>
        </section>
</template>

<script>
import Swal from 'sweetalert2'
import carStore from '../../stores/cart.js'
import { mapActions, mapState } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
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
  computed: {
    ...mapState(carStore, ['carts', 'total', 'final_total'])
  },
  methods: {
    addOrder () {
      const data = this.orderData
      this.$http.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order`, data)
        .then((res) => {
          console.log('加入order:', res.data)
          // alert('成功訂購')
          Swal.fire({
            title: "成功訂購",
            // text: "That thing is still around?",
            icon: "success"
          });
          this.getCart()
        })
        .catch(err => {
          console.log(err)
        })
    },
    ...mapActions(carStore, ['getCart', 'deleteItem', 'updateCartItem'])
  },
  mounted () {
    this.getCart()
  }
}
</script>
