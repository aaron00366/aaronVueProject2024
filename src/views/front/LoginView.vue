<template>
  <div class="container mt-5">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <ToastMessages></ToastMessages>
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            v-model="user.username"
            required
            autofocus
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            v-model="user.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import emitter from '@/methods/eventBus'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    ToastMessages
  },
  data () {
    return {
      isLoading: false,
      user: {}
    }
  },
  provide () {
    return {
      emitter
    }
  },
  methods: {
    signIn () {
      const api = `${import.meta.env.VITE_APP_URL}/admin/signin`
      this.isLoading = true
      this.$http.post(api, this.user).then((response) => {
        const { token, expired } = response.data
        document.cookie = `hexToken=${token};expires=${new Date(expired)};`
        this.isLoading = false
        this.$router.push('/admin/products')
      }).catch((error) => {
        this.isLoading = false
        this.$httpMessageState(error.response, '登入')
      })
    }
  }
}
</script>
