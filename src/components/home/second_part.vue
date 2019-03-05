<template>
        <div id="box">
            <p>中微信通-定制服务</p>
            <div class="my-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in imgList" :key="index" @mouseenter.stop="onMouseOver(index)" @mouseleave.stop="onMouseOut(index)">
                        <div class="swiper-content">
                            <img :src="item.src" alt=""/>
                            <div class="server_text">
                                <p class="content_title">{{item.title}}</p>
                                <div class="dott_box">
                                    <img src="../../../static/img/home/line.png" alt="">
                                </div>
                                <p class="content_p">{{item.content}}</p>
                            </div>
                            <!--图片阴影-->
                            <div class="positon_bg" >
                                <img :src="item.icon" alt="">
                            </div>
                            <!--悬浮上去的效果-->
                            <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                                <div class="hover_bg" @click="toClickLnkk(index)" v-if="index==tempIndexes">
                                    <p>{{item.alertInfo.title}}</p>
                                    <p>{{item.alertInfo.info}}</p>
                                    <div>
                                        了解详情
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <!--如果你需要分页-->
                <!--如果你需要前进后退按钮-->
                <div class="back swiper-button-next">
                    <img src="../../../static/img/home/back.png"  alt="">
                </div>
                <div class="forward swiper-button-next">
                    <img  src="../../../static/img/home/forward.png" alt="">
                </div>
            </div>
        </div>
</template>

<script>

    import Swiper from 'swiper';

    export default {
        name: "swiper_map",
        data() {
            return {
                tempIndex: 0,
                imgList: [
                    {
                        src: './static/img/home/banner_2_1.png',
                        icon:'./static/img/home/shop.png',
                        title: '连锁门店',
                        content: '厂家门店消费者 一键打通',
                        alertInfo:{
                            title:"连锁门店小程序",
                            info:"厂家门店消费者 一键打通"
                        }

                    },
                    {
                        src: './static/img/home/banner_2_2.png',
                        icon:'./static/img/home/trader.png',
                        title: '电商',
                        content: '快速可视化搭建独立平台',
                        alertInfo:{
                            title:"电商小程序",
                            info:"快速可视化搭建独立平台"
                        }
                    },
                    {
                        src: './static/img/home/banner_2_3.png',
                        icon:'./static/img/home/video.png',
                        title: '直播/音视频',
                        content: '实时高品质无障碍交流',
                        alertInfo:{
                            title:"直播/音视频小程序",
                            info:"实时高品质无障碍交流"
                        }
                    },
                    {
                        src: './static/img/home/banner_2_4.png',
                        icon:'./static/img/home/ai.png',
                        title: 'AI应用',
                        content: '云端存储 各种各样应用',
                        alertInfo:{
                            title:"AI应用小程序",
                            info:"云端存储 各种各样应用"
                        }
                    },

                    {
                        src: './static/img/home/banner_2_5.png',
                        icon:'./static/img/home/icon_2_5.png',
                        title: '新零售',
                        content: '新的零售方式专属营销管理系统',
                        alertInfo:{
                            title:"新零售小程序",
                            info:"新的零售方式专属营销管理系统"
                        }
                    },
                    {
                        src: './static/img/home/banner_2_6.png',
                        icon:'./static/img/home/icon_2_6.png',
                        title: '餐饮',
                        content: '堂食外卖预定 随心随用',
                        alertInfo:{
                            title:"餐饮小程序",
                            info:"堂食外卖预定 随心随用"
                        }
                    }
                ],
                tempIndexes:-1
            }
        },
        mounted() {
            this.slideInit();
        },
        methods: {
            //
            slideInit(){
                var mySwiper = new Swiper('.my-swiper', {
                    // 一行显示slider的个数
                    slidesPerView: 4,
                    // 定义slides的数量多少为一组
                    slidesPerGroup: 4,

                    pagination: {
                        el: '.swiper-pagination',

                        // 设为true, 点击分页器的指示点分页器会控制Swiper切换
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.back',
                        prevEl: '.forward',
                    }
                })
            },
            changeBorder(index) {
                this.tempIndex = index;
            },
            //鼠标悬浮
            onMouseOver(index){
                this.tempIndexes = index
            },
            onMouseOut(index){
                this.tempIndexes = -1;

            },
            //跳转连接
            toClickLnkk(index){
                if(index == 1){

                }else if(index == 2){

                }else if(index == 3){

                }else if(index == 4){

                }else if(index == 5){

                }
            }

        }
    }
</script>

<style lang="less" scoped>

    //测试 start
    #box {
        width: 1200px;
        margin:40px auto;
        background:#fff;
        /*height:498px;*/
        .my-swiper {
            width: 1200px;
            padding-top: 50px;
            padding-bottom: 50px;
            overflow: hidden;
            position:relative;
        }

        .swiper-slide {
            width: 270px;
            height: 220px;
            background-position: center;
            background-size: cover;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        .swiper-content{
            box-sizing: border-box;
            position:relative;
            overflow: hidden;
            background: #FFFFFF;
            box-shadow: 0 0 8px 2px rgba(58,116,221,0.10);
            border-radius: 4px;

        }

        .swiper-content > img {
            width: 270px;
            height:153px;
        }

        //阴影背景
        .positon_bg{
            width:270px;
            height:153px;
            background: rgba(58,116,221,0.40);
            position:absolute;
            top:0;
            z-index:0;
            margin:0 auto;
            vertical-align: middle;
            text-align:center;
            border-radius:4px;
        }
        .positon_bg>img{
            width:32.8px;
            text-align:center;
            display:inline-block;
            margin-top:25%;
        }
        //悬浮上去的效果
        .hover_bg{
            width:270px;
            height:220px;
            background:#fff;
            position:absolute;
            top:0;
            z-index:2;
            animation-duration: 0.3s;
            animation-fill-mode: both;
            cursor: pointer;
            border-radius: 4px;
        }

        .hover_bg>p:nth-child(1){
            text-align:center;
            font-family: PingFang-SC-Medium;
            font-size: 20px;
            color: rgba(0,0,0,0.70);
            margin-top:42px;
        }
        .hover_bg>p:nth-child(2){
            text-align:center;
            font-family: PingFang-SC-Medium;
            font-size: 20px;
            color: rgba(0,0,0,0.70);
            margin:27px auto;
        }
        .hover_bg>div{
            border: 1px solid #3A74DD;
            border-radius: 4px;
            width:160px;
            height:40px;
            line-height:40px;
            text-align:center;
            margin:0 auto;
            font-family: PingFang-SC-Medium;
            font-size: 14px;
            color: #3A74DD;
        }


        //  end

        .service_info {
            width: 1200px;
            height: 556px;

        }

        .service_info > p:nth-child(1) {
            text-align: center;
            margin-top: 100px;
            font-family: PingFang-SC-Medium;
            font-size: 24px;
            color: rgba(0, 0, 0, 0.80);
            letter-spacing: 0;
            margin-bottom: 50px;

        }

        .server_container {
            width: 1200px;
            height: 220px;
            position: relative;

        }

        .content_title {
            margin-top: 6px;
            font-family: PingFang-SC-Medium;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.80);
        }

        .content_p {
            font-family: PingFang-SC-Medium;
            font-size: 13px;
            color: rgba(0, 0, 0, 0.40);
            margin-top: 5px;
        }


        .forward {
            width: 50px;
            height: 50px;
            background: rgba(58, 116, 221, 0.50);
            border-radius: 2px;
            text-align: center;
            line-height: 48px;
            left: 0;
        }

        .back {
            width: 50px;
            height: 50px;
            background: rgba(58, 116, 221, 0.50);
            border-radius: 2px;
            text-align: center;
            line-height: 48px;
            right: 0;

        }

        .forward > img {
            width: 13.8px;
            height: 24px;
            display: inline-block;
            vertical-align: middle;
        }

        .back > img {
            width: 13.8px;
            height: 24px;
            display: inline-block;
            vertical-align: middle;
        }

        .changeBorder {

        }

        .server_text {
            height: 67px;
            text-align:center;
        }

        .dott_box {
            width: 100%;
        }

        .dott_box > img {
            width: 15%;
        }

    }
    #box>p{
        text-align:center;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
        margin-top:94px;
    }

</style>