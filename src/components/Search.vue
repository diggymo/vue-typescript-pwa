<template>
    <div>
        <div class="columns m-t-10">
            <div class="column is-3 m-t-10">
                <div class="field is-grouped">
                <a class="button is-rounded is-success">地図から探す</a>
                <a class="button is-rounded is-success">現在地から探す</a>
                <a class="button is-rounded is-success">所属教会から探す</a>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-10 is-offset-1">
                <div class="box">
                    <my-article v-for="user in userList" 
                    :key="user.username"
                    :username="user.username"
                    :introduction="user.introduction"
                    :lastTweet="user.lastTweet"
                    :friendNumber="user.friendNumber"
                    :address="user.address"
                    :image="user.image"
                    :lastLogin="user.lastLogin"
                    :own-branch="user.ownBranch">
                    </my-article>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import axios from "../axios/myAxios"
import MyArticle from './partials/my-article.vue'

// axios.get
var userList = new Array<any>()

userList.push({
    username: "IT速報",
    introduction: "はじめましてー！京都の河原町大教会に所属しています！",
    lastTweet: "うんち漏らしたあ",
    friendNumber: 120,
    address: "大阪市",
    image: "https://pbs.twimg.com/profile_images/955812904078462982/LmypHtzG_bigger.jpg",
    lastLogin: "5時間前",
    ownBranch: "河原町"
})
userList.push({
    username: "IT速報２",
    introduction: "あfぐぃぽgjrわpgjわ＠げ＠wがえprw＠おhkjらえ＠は＠えhgかえへあは",
    lastTweet: "うんち漏らしたあ",
    friendNumber: 120,
    address: "大阪市",
    image: "https://pbs.twimg.com/profile_images/955812904078462982/LmypHtzG_bigger.jpg",
    lastLogin: "5時間前",
    ownBranch: "敷島"
})
userList.push({
    username: "IT速報3",
    introduction: "はじめましてー",
    lastTweet: "うんち漏らしたあ",
    friendNumber: 120,
    address: "大阪市",
    image: "https://pbs.twimg.com/profile_images/955812904078462982/LmypHtzG_bigger.jpg",
    lastLogin: "5時間前",
    ownBranch: "北陸"
})

export default Vue.extend ({
    name: "search",
    data() {
        return {
            userList:  userList
        }
    },
    components: {
        MyArticle
    }
});

</script>
