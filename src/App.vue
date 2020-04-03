<template>
  <div id="app">
    <header class="bg-dark text-white">
      <router-link :to="isLogin ? '/dashboard' : '/'" class="text-white reset">Take Notes</router-link>
      <router-link
        to="/add"
        class="btn btn-success btn-sm float-right mt-2"
        v-show="isLogin"
      >Add New Note</router-link>
      <button
        class="btn btn-danger btn-sm float-left mt-2"
        v-show="isLogin"
        @click="logout()"
      >Logout</button>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isLogin() {
      return this.$store.getters.getLoginStatus;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("toggleLogIn", false);
      this.$router.push("/");
    }
  }
};
</script>

<style>
header {
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
}
</style>
