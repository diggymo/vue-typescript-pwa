<template>
  <article class="media">
    <div class="media-left">
        <figure class="image is-64x64">
            <img :src=image alt="Image">
        </figure>
    </div>
    <div class="media-content">
        <div class="content">
            <strong>{{ username }}</strong>
            &nbsp;&nbsp;
            <b-icon
            size="is-small"
            icon="user"></b-icon>
            <small>{{ friendNumber }}</small>
            &nbsp;&nbsp;
            <b-icon
                size="is-small"
                icon="sign-in-alt"></b-icon>
            <small>{{ lastLogin }}</small>
            &nbsp;&nbsp;
             <b-icon
                size="is-small"
                icon="home"></b-icon>
            <small>{{ ownBranch }}</small>
            <br>
            {{ lastTweet }}
            <blockquote>
                {{ introduction }}
            </blockquote>
            <router-link :to=getDetailLink() class="button is-dark is-small">
             <b-icon pack="fas" icon="check"></b-icon>
                <span>詳しく</span>
            </router-link>
            &nbsp;&nbsp;                
            <button class="button is-info is-small">
                <b-icon pack="fas" icon="envelope"></b-icon>
                <span>DM</span>
            </button>
            <br>
        </div>
        <nav class="level is-mobile">
        </nav>
    </div>
</article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "my-article",
  props: {
    username: String,
    introduction: String,
    lastTweet: String,
    friendNumber: Number,
    address: String,
    image: String,
    lastLogin: String,
    ownBranch: String
  },
  components: {},
  data() {
    return {};
  },
  methods: {
      getDetailLink(){
        return '/users/' + this.username
      }
  }
});
</script>
