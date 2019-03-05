<template>
    <div class="five_video_page">
        <div class="mar1200">
            <div class="five_video_content">
                <p>产品核心优势</p>
                <ul class="five_video_list">
                    <li v-for="(item,index) in fiveList" :key="index" @mouseover="changeNav(index)" @mouseleave="mouseleave(index)">
                        <img :src="item.img" alt="">
                        <div class="five_video_info">
                            <p>{{item.title}}</p>
                            <p>{{item.content}}</p>
                        </div>
                        <!--悬浮的效果-->
                        <!--<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">-->
                            <div class="hover_white_bg" @click="toClickLnkk(index)" v-if="index==tempIndexes">
                                <img :src="item.hover_img" alt="">
                                <div class="hover_white_content">
                                    <p>{{item.title}}</p>
                                    <p>{{item.content}}</p>
                                </div>
                            </div>
                        <!--</transition>-->
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "video_five",
        data() {
            return {
                fiveList:[
                    {
                        img:'./static/img/home/n_s1.png',
                        hover_img:'./static/img/home/s_s1.png',
                        title:'零基础快速对接',
                        content:'专为小程序打造的一站式音视频解决方案，无需具备音视频基础知识，简单易用，功能强大'
                    },
                    {
                        img:'./static/img/home/n_s2.png',
                        hover_img:'./static/img/home/s_s2.png',
                        title:'极卓越的音视频品质',
                        content:'基于RTMP技术实现，端到端延时小于400ms，抗800ms的网络抖动，自适应网络变化，智能无回声降噪处理'
                    },
                    {
                        img:'./static/img/home/n_s3.png',
                        hover_img:'./static/img/home/s_s3.png',
                        title:'跨平台互融互通',
                        content:'支持微信小程序与Android、iOS、PC、Web主流平台互通；满足一对一、一对多的实时音视频通话场景需要'
                    },
                    {
                        img:'./static/img/home/n_s4.png',
                        hover_img:'./static/img/home/s_s4.png',
                        title:'一体化部署方案',
                        content:'腾讯云提供购买后，简单获取参数配置单到小程序平台即可'
                    }
                ],
                tempIndexes:-1
            }
        },
        mounted() {

        },
        methods: {
            changeNav(index){
                this.tempIndexes = index;
            },
            mouseleave(index){
                this.tempIndexes = -1
            },
            toClickLnkk(index){

            }
        }
    }
</script>

<style scoped>
    .five_video_page {
        width: 100%;
        height: 600px;
        background: rgba(0,171,181,0.90);
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .five_video_content {
        padding-top:94px;
        width: 100%;
    }
    .five_video_content>p{
        text-align:center;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: #FFFFFF;

    }
    .five_video_list{
        margin-top:46px;
        width:100%;
        text-align:center;
        display:flex;
        justify-content: flex-start;
        align-content: center;
        position:relative;
    }
    .five_video_list>li{
        width:calc(100% / 4);
        height:344px;
    }
    .five_video_list>li>img{
        width:160px;
        height:160px;
        margin-top:20px;
    }
    .five_video_info{
        width:249px;
        text-align:center;
        margin:0 auto;

    }
    .five_video_info>p:nth-child(1){
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: #fff;
        margin-top:50px;
    }

    .five_video_info>p:nth-child(2){
        margin-top:19px;
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: #fff;
        text-align: center;
        line-height:18px;
        display: -webkit-box;   /*多行省略号*/
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;

    }
    .hover_white_bg{
        width:300px;
        height:344px;
        background:#fff;
        position:absolute;
        top:0;
        z-index:99;
        animation-duration: 0.3s;
        animation-fill-mode: both;
        box-shadow: 0 2px 8px 2px #028F97;
        border-radius: 4px;

    }
    .hover_white_bg>img{
        width:160px;
        height:160px;
        margin-top:20px;
    }
    .hover_white_content{
        width:249px;
        text-align:center;
        margin:0 auto;
    }
    .hover_white_content>p:nth-child(1){
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: #19B3BC;
        margin-top:50px;
    }
    .hover_white_content>p:nth-child(2){
        margin-top:19px;
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: #19B3BC;
        text-align: center;
        line-height:18px;
        display: -webkit-box;   /*多行省略号*/
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }

</style>