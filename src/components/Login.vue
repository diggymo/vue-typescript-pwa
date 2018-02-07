<template>
  <div>
    <section class="hero is-warning is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            ログイン
          </h1>
          <div class="columns">
            <div class="column is-4">
              <b-field horizontal label="Username">
                  <b-input name="username" maxlength="10"></b-input>
              </b-field>
              <b-field horizontal label="Password">
                  <b-input name="password" type="password" maxlength="10"></b-input>
              </b-field>
              <a class="button is-danger" @click="login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Login extends Vue {
  username: string;
  password: string;
  login() {
    return axios
      .get("/api/v1/login", {
        data: {
          username: this.username,
          password: this.password
        }
      })
      .then(response => console.log(response));
  }
}
</script>
