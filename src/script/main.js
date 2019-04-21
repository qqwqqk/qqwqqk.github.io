import '../style/main.css';
import Vue from 'vue';
import Content from '../vue/main.vue';
import VueScroll from 'vuescroll';

new Vue({
    el:'#root',
    template:'<Content/>',
    components:{ Content }
});

Vue.use(VueScroll, {
    ops: {},                    // 在这里设置全局默认配置
    name: 'vueScroll'           // 在这里自定义组件名字，默认是vueScroll
});