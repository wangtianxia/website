<template>
    <div class="six_video_container">
        <div class="mar1200">
            <div class="six_video_content">
                <p>案例展示</p>
                <p class="block_bg1"></p>
                <p class="block_bg2">微直播</p>
                <ul class="six_video_box">
                    <li>
                        <img class="phone_bg" src="../../../static/img/home/phonoe1.png" alt="">
                        <img class="show_img_1" :src="show_img1" alt="">
                    </li>
                    <li>
                        <img class="phone_bg" src="../../../static/img/home/phonoe1.png" alt="">
                        <img class="show_img_1" :src="show_img2" alt="">
                    </li>
                    <li>
                        <div class="ma_img">
                            <img  :src="wx_img" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "video_six",
        data() {
            return {
                show_img1:'./static/img/1.jpg',
                show_img2:'./static/img/1.jpg',
                wx_img:'./static/img/weixin.png'
            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped>
    .six_video_container {
        width: 100%;
        height: 971px;
        background: #fff;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .six_video_content {
        width: 100%;
        margin: 0 auto;
        position: relative;
    }

    .six_video_content > p:nth-child(1) {
        text-align: center;
        padding-top: 94px;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.80);
    }

    .block_bg1 {
        position: absolute;
        top: 319px;
        left: 134px;
        z-index: 1;
        width: 505px;
        height: 160px;
        background: #F0EEEE;
    }

    .block_bg2 {
        position: absolute;
        top: 550px;
        right: 0;
        z-index: 1;
        width: 495px;
        height: 160px;
        line-height:160px;
        background: #F0EEEE;
        font-family: PingFang-SC-Bold;
        text-align:center;
        font-size: 30px;
        color: rgba(0,171,181,0.80);
    }

    .six_video_box{
        position:absolute;
        top:187px;
        z-index: 22;
        width:100%;
        height:160px;
        display:flex;
        justify-content: flex-start;
        align-content: flex-start;
    }
    .six_video_box>li{
        width:284px;
        height:560px;
        position:relative;
        overflow: hidden;
        margin:0 auto;
        border-radius:10px;

    }
    .phone_bg{
        max-width:280px;
        height:560px;
        position:absolute;
        z-index:5;

    }

    .ma_img{
        width:200px;
        height:200px;
        border: 2px solid #00ABB5;
        border-radius: 4px;
        position:absolute;
        top:100px;
        display:inline-block;
        text-align:center;
    }
    .ma_img>img{
        width:200px;
        height:200px;
        vertical-align: middle;
    }

    .show_img_1{
        /*width:100%;*/
        width:242PX;
        position:absolute;
        top:8%;
        left:8%;
        height:492px;
        z-index:0;

    }
</style>