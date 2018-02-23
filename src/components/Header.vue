<template>
  <div>
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hero title
          </h1>
          <h2 class="subtitle">
            Hero subtitle
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li><router-link to="/home">HOME</router-link></li>
              <li><router-link to="/mypage">マイページ</router-link></li>
              <li><router-link to="/users">探す</router-link></li>
              <li><a @click="$emit('logout')">ログアウト</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <transition name="slide-fade" mode="out-in">                  
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
}
</script>

<style>
/* enter、 leave アニメーションで異なる間隔やタイミング関数を利用することができます */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(500px);
  opacity: 0;
}

</style>