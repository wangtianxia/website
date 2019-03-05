<template>
    <div class="food_page">
        <div class="mar1200">
            <div class="three_video_content">
                <img src="../../../static/img/home/food_lcon.png" alt="">
                <div class="three_video_info">
                    <p>最适合餐饮行业的解决方案</p>
                    <p>满足点餐、外卖场景定制化需求，助力线下门店营销服务再次升级，打造新的流量入口，创造新财富</p>
                    <div class="btn_text">
                        <p @click="goMake()">
                            立即制作
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "food_three",
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
    .food_page {
        width: 100%;
        height: 700px;
        background: rgba(251,128,7,0.05);
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .three_video_content {
        padding-top: 92px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }

    .three_video_content > img {
        margin-top:9px;
        width: 338px;
        height: 412px;
    }

    .three_video_info {
        width: 460px;
        text-align: right;
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
        color: rgba(0, 0, 0, 0.80);
        text-align: right;
        line-height: 33px;
    }

    .btn_text{
        height:40px;
        text-align: right;
        display:flex;
        justify-content: flex-end;
        width:460px;
    }
    .btn_text>p {
        background: #FB8007;
        border-radius: 4px;
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