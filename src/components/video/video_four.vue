<template>
    <div class="four_video_page">
        <div class="mar1200">
            <div class="three_video_content">
                <div class="three_video_info">
                    <p>实时互动 助力各行业服务模式创新</p>
                    <p>自适应网络变化，智能无回声降噪处理<br/>满足多场景通话需要</p>
                    <div class="btn_text">
                        <p @click="goMake()">
                            立即制作
                        </p>
                    </div>
                </div>
                <img src="../../../static/img/home/video_2.png" alt="">
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
        height: 600px;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .three_video_content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }

    .three_video_content > img {
        margin-top:94px;
        width: 423px;
        height: 412px;
    }

    .three_video_info {
        margin-top:100px;
        width: 460px;
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
        line-height: 33px;
    }

    .btn_text{
        height:40px;
        text-align: left;
        display:flex;
        justify-content: flex-start;
        width:460px;
    }
    .btn_text>p {
        background: #00ABB5;
        border: 1px solid #00ABB5;
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