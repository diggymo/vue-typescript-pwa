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
                  <b-input name="username" v-model="username" maxlength="20" minLength="6"></b-input>
              </b-field>
              <b-field horizontal label="Password">
                  <b-input name="password" v-model="password" type="password" maxlength="20" minLength="6"></b-input>
              </b-field>
              <!-- <button class="button is-danger" @click="login">Login</button> -->
              <button class="button is-danger" @click="$emit('login', username, password)">Login</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      username: "",
      password: ""
    };
  }
});
</script>
