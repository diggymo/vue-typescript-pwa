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
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <router-view></router-view>    
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
}
</script>
