<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-center">Login</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 bg-light p-2">
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="email" />
          <small class="text-muted">User name: admin@example.com</small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="password" />
          <small class="text-muted">Password: admin</small>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click="login()">Login</button>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.email === "admin@example.com" || this.password === "admin") {
        this.$store.dispatch("toggleLogIn", true);
        this.$router.push("/dashboard");
      } else {
        this.$store.dispatch("toggleLogIn", false);
        alert("Not Valid");
      }
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.getLoginStatus;
    }
  }
};
</script>