<template>
  <div>
    <footer class="footer_section text-white deco_wrap" style="background-image: url(../src/assets/image/footerImg.png);">
    <div class="overlay"></div>
    <div class="footer_widget_area">
      <div class="container">
        <div class="row justify-content-lg-between">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="footer_widget footer_about wow fadeInUp" data-wow-delay=".1s">
              <div class="brand_logo">
                <a class="brand_link" href="index.html">
                  <img src="../assets/image/logo/logo_white_1x.png" srcset="" alt="logo">
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="footer_widget footer_contact wow fadeInUp" data-wow-delay=".2s">
              <h3 class="footer_widget_title text-uppercase">聯絡我們</h3>
              <ul class="ul_li_block">
                <li><strong>{{ $t('footer.address') }}</strong> 台北市大同區哈哈哈路111號F</li>
                <li><strong>email:</strong> coffeeeee@gmail.com</li>
                <li><strong>{{ $t('footer.tel') }}</strong> (02) 2445-2133</li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="footer_widget footer_opening_time wow fadeInUp" data-wow-delay=".3s">
              <h3 class="footer_widget_title text-uppercase">{{ $t('footer.openingHours') }}</h3>
              <ul class="ul_li_block">
                <li>
                  {{ $t('footer.Mon') }}
                  <span>9:00 - 18:00</span>
                </li>
                <li>
                  {{ $t('footer.Tue') }}
                  <span>10:00 - 18:00</span>
                </li>
                <li>
                  {{ $t('footer.Wed') }}
                  <span>11:00 - 18:00</span>
                </li>
                <li>
                  {{ $t('footer.Thu') }}
                  <span>12:00 - 18:00</span>
                </li>
                <li>
                  {{ $t('footer.Fri') }}
                  <span>14:00 - 18:00</span>
                </li>
                <li>
                  {{ $t('footer.Sat') }}
                  <span>16:00 - 18:00</span>
                </li>
                <li>
                  {{ $t('footer.Sun') }}
                  <span>休息</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="footer_bottom text-center">
        <p class="copyright_text mb-0 text-white" data-wow-delay=".2s">
          {{ $t('footer.personalSideProject') }}
        </p>
      </div>
    </div>
</footer>
  </div>
</template>

<script>
export default {
  name: 'footerComponent',
  data() {
    return {
      footer: 'footer',
    }
  },
  methods: {
    switchToChinese() {
      this.$i18n.locale = 'zh-TW'
    },
    switchToEnglish() {
      this.$i18n.locale = 'en'
    },
  },
}
</script>