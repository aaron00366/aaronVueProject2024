<template>
    <div class="container my-5">
        <form id="form" class="form-signin">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="username"
                    placeholder="name@example.com" required autofocus v-model="data.username">
                  <label for="username">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="password"
                    placeholder="Password" required v-model="data.password">
                  <label for="password">Password</label>
                </div>
                <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
                  登入
                </button>
              </form>
    </div>
</template>
<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      data: {
        username: '',
        password: ''
      },
      url: 'https://vue3-course-api.hexschool.io/v2',
      path: 'aaronshih2024'
    }
  },
  methods: {
    login () {
      this.$http.post(`${VITE_APP_URL}/admin/signin`, this.data)
        .then(res => {
          const { token, expired } = res.data
          console.log(token, expired)
          document.cookie = `aarontoken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin/products')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
