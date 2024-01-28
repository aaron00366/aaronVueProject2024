<template>
    <section class="breadcrumb_section text-uppercase" style="background-image: url(../src/assets/image/innerHeroImg.jpeg);">
    <div class="container">
      <h1 class="page_title text-white wow fadeInUp" data-wow-delay=".1s">相關文章</h1>
      <ul class="breadcrumb_nav ul_li wow fadeInUp" data-wow-delay=".2s">
        <li><a href="index.html"><i class="fas fa-home"></i> 首頁</a></li>
        <li>相關文章</li>
      </ul>
    </div>
    <div class="breadcrumb_icon_wrap">
      <div class="container">
        <div class="breadcrumb_icon wow fadeInUp" data-wow-delay=".3s">
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
  <section class="blog_section sec_ptb_120 bg_default_gray">
          <div class="container">
            <div class="row justify-content-lg-between justify-content-md-center justify-content-sm-center">

              <div class="col-lg-8 col-md-8">
                <div class="blog_standard" v-for="item in articles" :key="item.id" data-aos="fade-down">
                  <RouterLink class="item_image" :to="`/article/${item.id}`">
                    <img :src="item.imageUrl" alt="image_not_found" style="object-fit: cover
                    ;height: 280px;">
                  </RouterLink>
                  <div class="item_content">
                    <ul class="post_meta ul_li">
                      <li>
                        <i class="bi bi-person-fill"></i> {{ item.author }}</li>
                      <li>
                        <i class="bi bi-calendar-fill"></i> {{ new Date(item.create_at) }}</li>
                    </ul>
                    <h3 class="item_title text-uppercase">
                      <RouterLink :to="`/article/${item.id}`">{{ item.title }}</RouterLink>
                    </h3>
                    <p class="multiline-ellipsis">
                      {{ item.description }}
                    </p>
                    <RouterLink class="btn btn_primary" :to="`/article/${item.id}`">查看更多</RouterLink>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default{
    data() {
        return {
            articles: []
        }
    },
    methods: {
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
    },
    mounted() {
        this.getArticles()
    },
}
</script>