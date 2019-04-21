
<template>
    <div id=content>
        <div class="header"></div>
        <div class="section">
            <div class="show">
                <div class="image_box">
                    <img class="border" v-bind:src="site.show" usemap="#imglink"/>
                    <map name="imglink">
                        <area class="map_area" shape="rect" coords="100,100,360,200" v-bind:href="site.href" v-bind:title="site.title" />
                    </map>
                </div>
        
                <div class="info_box">
                    <div class="user_info">
                        <div class="user_icon">
                            <a v-bind:href="link_qqwqqk.href" v-bind:title="link_qqwqqk.title"><img class="user_icon_css" v-bind:src="link_qqwqqk.show"></a>
                        </div>
                        <p class="user_name">{{link_qqwqqk.title}}</p>
                        <div class="user_links">
                            <a v-bind:href="link_QQ.href" v-bind:title="link_QQ.title"><img v-bind:src="link_QQ.show" class="user_link_css"></a>
                            <a v-bind:href="link_WeChat.href" v-bind:title="link_WeChat.title"><img v-bind:src="link_WeChat.show" class="user_link_css"></a>
                        </div>
                    </div>

                    <div class="old_info">
                        <button type="button" class="btn_old" v-on:click="browse_old()">old version</button>
                    </div>
                </div>
            </div>
        
            <div class="list">
                <VueScroll :ops = "ops">
                    <div class="list_form" v-bind:style="{ width: siteFormLength }">
                        <template v-for="item in sites">
                            <div class="site_box" :key="item.title">
                                <img class="site_icon" v-bind:src="item.icon" v-on:click="clickItem(item)"/><br/>
                                <input class="site_name" type="input" v-bind:value="item.title" v-bind:style="{ backgroundColor: isActive(item) ? '#66ccff' : 'white' }" readonly/>
                            </div>
                        </template>
                    </div>
                </VueScroll>
            </div>
        </div>

        <div class="footer"></div>
    </div>
</template>

<script>
    import VueScroll from 'vuescroll';
    export default {
        name: "app",
        components: { VueScroll },
        data: function(){
            return{
                ops: {
                    vueScroll: { mode: 'native', sizeStrategy: 'percent', detectResize: true},
                    scrollPanel: { initialScrollY: false, initialScrollX: false, scrollingX: true, scrollingY: true, speed: 300, easing: undefined, verticalNativeBarPos: 'right'},
                    rail: { background: 'transparent', opacity: 0, size: '6px', specifyBorderRadius: false, gutterOfEnds: null, gutterOfSide: '2px', keepShow: false},
                    bar: { showDelay: 500, onlyShowBarOnScroll: true, keepShow: false, background: '#66CCFF', opacity: 1, hoverStyle: false, specifyBorderRadius: false, minSize: false, size: '6px', disable: false}
                },
                link_qqwqqk:{
                    "title":"五月钦铭",
                    "show":"src/images/usericon1.jpg",
                    "href":"#"
                },
                link_QQ:{
                    "title":"QQ",
                    "show":"src/images/usericon2.jpg",
                    "href":"#"
                },
                link_WeChat:{
                    "title":"WeChat",
                    "show":"src/images/usericon3.jpg",
                    "href":"#"
                },

                sites: [],
                site: {
                    "title":"Alchemy",
                    "show":"src/images/navigation/Alchemy_show.jpg",
                    "href":"#"
                }
            }
        },
        computed:{
            siteFormLength: function(){
                let formLength = this.sites.length * 170;
                return String(formLength) + 'px';
            }
        },
        methods: {
            browse_old: function(){
                let url="https://qqwqqk.github.io/old_qqwqqk.github.io/";
                window.open(url); 
            },
            isActive:function (message) {
                return message === this.site;
            },
            clickItem: function (message) {
                this.site = message;
            }
        },
        created: function(){
            let url = "./src/analog_interface/site_list.json";
            fetch(url).then(res => res.json())
                .then((data) => {
                    this.sites = data.site_list;
                    if(this.sites.length > 0){
                         this.site = this.sites[0];
                    }
                })
                .catch((e) => console.log("loading site_list.json error ! \n " + e))
        }
        
    }
</script>

<style scoped>
    .content{ width: 100%; height: 100%; margin: auto; }
    .header{ width: 800px; height: 80px; margin: auto; }
    .section{ width: 800px;height: 640px; margin: auto; background-color:transparent; }
    .footer{ width: 800px; height: 80px; margin: auto;}

    .show{ width: 800px; height: 460px; margin: auto;}
    .image_box{ width: 560px; height: 420px; float:left; margin: 20px 10px 20px 20px; border-radius: 10px; background-color:transparent; overflow:hidden;}
    .map_area{ outline: none;}
    .border{ width: 560px; height: 400px; margin: 10px 0;}

    .info_box{ width: 180px; height: 420px; float: right; margin: 20px 20px 20px 10px; border-radius: 24px; background-color: rgba(249,233,195,0.6);}
    .user_info{ width: 140px; height: 220px; margin: 20px; float: left;}
    .user_icon{ width: 100px; height: 100px; margin: 20px 20px 5px 20px;}
    .user_name{ width: 100px; height: 30px; margin: 0 20px; text-align:center; line-height: 30px;}
    .user_links{ width: 100px; height: 40px; margin: 5px 20px 20px 20px;}
    .user_icon_css{ width: 100px; height: 100px; border-radius: 50px; border: none;}
    .user_link_css{ width: 40px; height: 40px; border-radius: 20px; border: none;}

    .old_info{ width: 140px; height: 120px; margin: 20px; text-align: center; float: left;}
    .btn_old{  width: 100px; height: 40px; margin: auto; outline: none; background-color: deepskyblue; border: none; border-radius: 8px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;}
    .btn_old:hover{ background-color: #66ccff;}

    .list{ width:780px; height: 160px; padding: 0 50px; margin:10px;}
    .list_form{ width: 680px; height: 160px; font-size: 0; white-space :nowrap;}
    .site_box{ width: 150px; height: 140px; margin: 0 10px; float: left; border-radius: 20px; border: 5px solid rgba(220,220,220,0.5); overflow: hidden; font-size: 0;}
    .site_icon{ width: 140px; height: 100px; background-color: transparent; border: none;}
    .site_name{ width: 140px; height: 30px; text-align: center; border: none; outline:none;}
</style>