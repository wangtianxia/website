<template>
    <div class="ai_two_page">
        <div class="mar1200">
            <div class="title_info">
                <p>云智AI-应用服务</p>
                <ul class="ai_list">
                    <li v-for="(item,index) in dataList" :key="index"  @mouseover="mouseOver(index)"
                        @click="toClick(index)">
                        <div class="img_bg" :class="[tempIndexes == index?className:className2]">
                            <img :src="item.img" alt="">
                        </div>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ai_two",
        data() {
            return {
                dataList: [
                    {
                        img: './static/img/home/ai_t1.png',
                        title: '智能鉴黄'
                    },
                    {
                        img: './static/img/home/ai_t2.png',
                        title: '图片标签'
                    },
                    {
                        img: './static/img/home/ai_t3.png',
                        title: '文字识别'
                    },
                    {
                        img: './static/img/home/ai_t4.png',
                        title: '人脸识别'
                    },
                    {
                        img: './static/img/home/ai_t5.png',
                        title: '人脸核身'
                    },
                    {
                        img: './static/img/home/ai_t6.png',
                        title: '人脸支付'
                    },
                    {
                        img: './static/img/home/ai_t7.png',
                        title: '人脸融合'
                    },
                    {
                        img: './static/img/home/ai_t8.png',
                        title: '语音识别'
                    },
                    {
                        img: './static/img/home/ai_t9.png',
                        title: '语音合成'
                    },
                    {
                        img: './static/img/home/ai_t10.png',
                        title: '身纹识别'
                    },
                    {
                        img: './static/img/home/ai_t11.png',
                        title: '智能小钛'
                    },
                    {
                        img: './static/img/home/ai_t12.png',
                        title: '智能外呼叫机器人'
                    },
                    {
                        img: './static/img/home/ai_t13.png',
                        title: '文智自然语音处理'
                    },
                    {
                        img: './static/img/home/ai_t14.png',
                        title: '机器翻译'
                    },
                    {
                        img: './static/img/home/ai_t15.png',
                        title: '腾讯云小微'
                    },
                    {
                        img: './static/img/home/ai_t16.png',
                        title: '知识图谱'
                    },
                    {
                        img: './static/img/home/ai_t17.png',
                        title: '内容理解'
                    },
                    {
                        img: './static/img/home/ai_t18.png',
                        title: '智能钛机器学习'
                    }
                ],
                className:'img_bg',
                className2:'img_bg',
                tempIndexes:0
            }
        },
        mounted() {
        },
        methods: {
            //鼠标滑入
            mouseOver(index) {
                this.tempIndexes = index;
                this.className = 'img_bg img_hover_bg'
            },
            //鼠标移出
            toClick(index) {
            }

        }
    }
</script>

<style lang="less" scoped>
    .ai_two_page {
        width: 100%;
        height: 831px;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }
    .title_info{
        width:100%;
        padding-top:94px;
        text-align:center;
    }
    .title_info>p{
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
    }

    .ai_list {
        margin:0 auto;
        margin-top: 46px;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: wrap;

    }

    .ai_list > li {
        width:calc(100% / 6);
        height: 165px;
        text-align: center;
        margin-bottom:30px;

    }

    .img_bg {
        width: 120px;
        height:120px;
        text-align: center;
        background: rgba(18,16,36,0.05);
        border-radius:50%;
        margin:0 auto;
        position:relative;
    }
    .img_hover_bg{
        width: 120px;
        height:120px;
        text-align: center;
        background: rgba(18,16,36,0.05);
        border-radius:50%;
        margin:0 auto;
        position:relative;
        border: 2px solid rgb(80,79,93);
        box-sizing: border-box;
    }

    .img_bg > img {
        max-width: 48px;
        height:48px;
        display:inline-block;
        vertical-align: middle;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
    .ai_list > li>p {
        width:100%;
        margin-top: 20px;
        text-align: center;
        font-family: PingFang-SC-Medium;
        font-size: 18px;
        color: rgba(0,0,0,0.80);
    }

</style>