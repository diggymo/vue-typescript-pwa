<template>
  <section class="hero is-info is-fullheight">
      <div class="hero-body">
          <div class="container has-text-centered">
              <div class="column is-6 is-offset-3">
                  <h1 class="title">404</h1><br>
                  <router-link class="button is-warning" to="/session">Login</router-link>
              </div>
          </div>
      </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
  name: string = "hello";
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA"
    };
  }
}
</script>

<style>
    .hero.is-info {
        background: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
        ), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
</style>