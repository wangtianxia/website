<template>
    <div class="ai_page">
        <img src="../../../static/img/home/ai_t_bg.png" alt="">
        <div class="ai_page_content">
            <div class="mar1200">
                <p class="ai_title">
                    AI应用-行业分类
                </p>
                <ul class="ai_page_list">
                    <li v-for="(item,index) in dataList" :key="index" @mouseover="onMouseOver(index)" @click="toClick(index)">
                        <div class="gray_bg" :class="[tempIndex == index ? className:className2]">
                            <p>{{item.title}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ai_three",
        data() {
            return {
                dataList:[
                    {title:'智能硬件'},
                    {title:'安防监控'},
                    {title:'地产物业'},
                    {title:'企业服务'},
                    {title:'零售商超'},
                    {title:'旅游酒店'},
                    {title:'赛事会展'},
                    {title:'市场营销'},
                     {title:'软件服务'},
                    {title:'新闻媒体'},

                    {title:'社交直播'},
                    {title:'电子商务'},
                    {title:'金融服务'},
                    {title:'教育培训'},
                    {title:'餐饮食品'},
                    {title:'交通出行'},
                    {title:'医疗健康'},
                    {title:'物流仓储'},
                    {title:'生产制造'},
                    {title:'农林牧渔'},

                    {title:'法律政务'},
                    {title:'社会服务'},
                    {title:'科学研究'},
                    {title:'游戏电玩'},
                    {title:'影视音乐'},
                    {title:'体育运动'},
                    {title:'智能手机'},
                    {title:'智能驾驶 '},
                    {title:'其他'}
                ],
                className:'gray_bg',
                className2:'gray_bg',
                tempIndex:0
            }
        },
        mounted() {

        },
        methods: {
            onMouseOver(index){
                this.tempIndex = index;
                this.className = 'gray_bg gray_hover_bg'
            },
            onClick(index){

            }
        }
    }
</script>

<style lang="less" scoped>
    .ai_page {
        width: 100%;
        height: 700px;
        position: relative;
    }

    .ai_page > img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .ai_page_content {
        width: 100%;
        height: 700px;
        position: absolute;
        z-index: 3;
    }

    .ai_title {
        text-align:center;
        padding-top:94px;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: #FFFFFF;
    }
    .ai_page_list{
        width:100%;
        display:flex;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: wrap;
        margin-top:46px;
    }
    .ai_page_list>li{
        width:80px;
        height:80px;
        margin-right:40px;
        margin-bottom:60px;
    }

    .gray_bg{
        background: rgba(255,255,255,0.40);
        height:80px;
        width:80px;
        border-radius:50%;
        text-align:center;
        line-height:80px;
    }

    .gray_hover_bg{
        width:80px;
        height:80px;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
    }

    .gray_bg>p{
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: #FFFFFF;
    }
</style>