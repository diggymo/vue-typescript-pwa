<template>
    <section>
        <!-- <button class="button block" @click="activeTab = 1">Set Music</button> -->
        <b-tabs position="is-centered" v-model="activeTab">
            <b-tab-item label="基本情報">
                <!-- <base-info></base-info> -->
            </b-tab-item>
            <b-tab-item label="近況">
                <!-- <activity></activity> -->
            </b-tab-item>
            <b-tab-item label="関連する友達">
                <!-- <friends></friends> -->
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script lang="ts">
import Vue from "vue"
import axios from "../axios/myAxios"

// import BaseInfo from "./partials/base-info.vue"
// import Activity from "./partials/activity.vue"
// import friends from "./partials/friends.vue"

export default Vue.extend ({
    name: "search",
    data() {
        return {
                activeTab: 0            
        }
    },
    // components: {
    //     BaseInfo,
    //     Activity,
    //     friends
    // }
});

</script>
