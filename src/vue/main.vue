
<template>
    <div id=content>
        <div class="header"></div>
        <div class="section">
            <div class="show">
                <div class="image_box">
                    <img class="border" src="src/images/loading.gif" usemap="#imglink"/>
                    <map name="imglink">
                        <area shape="rect" coords="50,50,300,300" href="#" alt="loading test" />
                    </map>
                </div>
        
                <div class="info_box">
                    <div class="user_info">
                        <a class="user_icon" href="#" title="五月钦铭">
                            <img src="src/images/usericon1.jpg" alt="usericon1" class="user_icon_show">
                        </a>
                        <div class="user_link_show">
                            <p class="user_name">五月钦铭</p>
                            <a class="user_link1" href="#" title="link1">
                                <img src="src/images/usericon2.jpg" alt="usericon2" class="user_icon_link">
                            </a>
                            <a class="user_link2" href="#" title="link2">
                                <img src="src/images/usericon3.jpg" alt="usericon3" class="user_icon_link">
                            </a>
                        </div>
                    </div>

                    <div class="old_info">
                        <button type="button" class="btn_old" value="浏览旧主页" onclick="browse_old()"></button>
                    </div>
                </div>
            </div>
        
            <div class="list">
                
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>
    .content{ width: 100%; height: 100%; margin: auto;}
    /* 顶部信息格式 */
    .header{width: 800px; height: 80px; margin: auto;}
    /* 基本框架 */
    .section{ background-color:transparent; width: 800px;height: 600px; margin: auto;}
    /*框架窗口*/
    .show{ width: 800px; height: 460px; margin: auto;}
    /* 展示框架窗口 */
    .image_box{ width: 560px; height: 420px; float:left; margin-left: 20px; margin-top:20px; border-radius: 10px; overflow:hidden;}
    .border{ width: 560px; height: 400px; margin-top: 10px; margin-bottom: 10px;}
    /* 信息展示窗口 */
    .info_box{width: 180px; height: 420px; float:right; margin-right: 20px; margin-top:20px; border-radius: 24px; background-color: rgba(249,233,195,0.6);}
    .user_info{height: 220px; width: 140px; border: none; margin: 20px;}
    .user_link_show{ text-align:center; line-height: 36px;}
    .user_icon_show{ height: 100px; width: 100px; border-radius: 50px; border: none; margin: 20px 20px 10px 20px;}
    .user_icon_link{ height: 40px; width: 40px; border-radius: 20px; border: none; margin: 0px 5px 0px 5px;}
    .old_info{ height: 140px; width: 140px; border: none; margin: 20px; display: none;}
    .btn_old{height: 40px; width: 100px; outline: none; background-color: deepskyblue; border: none; border-radius: 8px; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;}
    .btn_old:hover{ background-color: dodgerblue;}
    /* 选择列表展示 */
    .list{ height: 140px; width:800px;}
    /* 尾部信息格式 */
    .footer{ width: 800px; height: 80px; margin: auto;}
</style>