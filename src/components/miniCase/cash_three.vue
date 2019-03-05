<template>
    <div class="four_video_page">
        <div class="mar1200">
            <div class="three_video_content">
                <div class="three_video_info">
                    <p>专为电商行业打造的小程序解决方案</p>
                    <p>提供丰富齐全的电商玩法，拼团、优惠券、推广等功能。帮助商家搭建独立的电商轻平台， 免去其他平台的入驻费用，同时还拥有自己的流量闭环。</p>
                    <div class="btn_text">
                        <p @click="goMake()">
                            立即制作
                        </p>
                    </div>
                </div>
                <img src="../../../static/img/home/cash_t1_icon.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "video_four",
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
            //立即制作
            goMake(){

            }
        }
    }
</script>

<style scoped>
    .four_video_page {
        width: 100%;
        height: 700px;
        background: #F9F6F6;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .three_video_content {
        padding-top: 91px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }

    .three_video_content > img {
        width: 534px;
        height: 412px;
    }

    .three_video_info {
        width: 480px;
        margin-top: 9px;
    }

    .three_video_info > p:nth-child(1) {
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.80);
    }

    .three_video_info > p:nth-child(2) {
        margin-top: 40px;
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        line-height: 33px;
        color: rgba(0,0,0,0.70);
    }

    .btn_text{
        height:40px;
        text-align: left;
        display:flex;
        justify-content: flex-start;
        width:460px;
    }
    .btn_text>p {
        border: 1px solid #E62E3D;
        background: #E62E3D;
        border-radius: 4px;
        margin-top: 96px;
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        width: 160px;
        height: 40px;
        line-height:40px;
    }
</style>