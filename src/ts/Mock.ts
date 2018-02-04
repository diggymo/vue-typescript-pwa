// tsファイルが存在していないと、tsconfigでエラーが表示されるので仕方なく定義

import Vue from "vue";


let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
    </div>
    `,
    data: { name: "World" },
    methods: {
        messageLog(message: string) {
            console.log(message);
            alert(message)
        }
    }
});