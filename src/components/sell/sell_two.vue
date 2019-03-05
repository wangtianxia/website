<template>
    <div class="sell_container">
        <div class="mar1200">
            <div class="sell_content">
                <p>新零售-优势</p>
                <ul class="sell_list_box">
                    <li v-for="(item,index) in sellList" class="sell_li" :key="index" :class="[tempIndex == index ? className:className2]"
                        @mouseover="changeNav(index)" @mouseleave="mouseLeave(index)" @click="toClick(index)">
                        <img :src="item.img" alt="">
                        <p>{{item.title}}</p>
                        <!--图片浮层-->
                        <div class="float_box">
                            <img :src="item.icon" alt="">
                        </div>
                        <!--浮层-->
                        <div class="hover_box" v-if="isShow == index" >
                            <p>{{item.content}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sell_two",
        data() {
            return {
                sellList:[
                    {
                        img:'./static/img/home/banner_sell_1.png',
                        title:'手机端管理更方便',
                        icon:'./static/img/home/sell_icon_1.png',
                        content:'无需下载APP，小程序端快速管理店铺，方便、快捷。'
                    },
                    {
                        img:'./static/img/home/banner_sell_2.png',
                        title:'全国多店客户引流',
                        icon:'./static/img/home/world.png',
                        content:'每个经销门店拥有专属小程序，店铺方圆五公里免费引流，实现全国多点客源引流'
                    },
                    {
                        img:'./static/img/home/banner_sell_3.png',
                        title:'产品数据实时同步',
                        icon:'./static/img/home/sell_icon_3.png',
                        content:'厂家发布的产品图文、视频信息可同步至经销商，经营效率大幅提升'
                    },
                    {
                        img:'./static/img/home/banner_sell_4.png',
                        title:'获客成本低至5分钱',
                        icon:'./static/img/home/sell_icon_4.png',
                        content:'通过lbs大数据引流，一网打尽门店周围方圆五公里所有潜在客户和业主，获客成本低至5分钱'
                    },
                    {
                        img:'./static/img/home/banner_sell_5.png',
                        title:'生产决策有依据',
                        icon:'./static/img/home/sell_icon_5.png',
                        content:'门店、产品浏览数据精准统计，生产决策有依据'
                    },
                    {
                        img:'./static/img/home/banner_sell_6.png',
                        title:'店员考核有依据',
                        icon:'./static/img/home/sell_icon_6.png',
                        content:'生成店员专属推广码，实时追踪店员推广效果，设定绩效考核'
                    }
                ],
                tempIndex:0,
                className:'sell_list',
                className2:'sell_list',
                isShow:-1
            }
        },
        mounted() {
        },
        methods: {
            //鼠标移入
            changeNav(index){
                this.tempIndex = index;
                this.className = 'sell_list hover_list_border'
                this.isShow = index;
            },
            //鼠标移出
            mouseLeave(index){
                this.isShow = -1;
                this.className = 'sell_list'
            },
            //鼠标点击
            toClick(index){

            }
        }
    }
</script>

<style lang="less" scoped>
    .sell_container{
        width:100%;
        height:660px;
    }
    .mar1200{
        width:1200px;
        margin:0 auto;
        height:100%;
    }
    .sell_content{
        text-align:center;
        width:100%;
    }
    .sell_content>p{
        margin-top:94px;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
    }
    .sell_list_box{
        width:1100px;
        margin-left:50px;
        margin-right:50px;
        display:flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap:wrap;
        margin-top:46px;
    }

    .sell_li{
        width:300px;
        height:260px;
        position:relative;
        background: #FFFFFF;
        border: 1px solid rgba(245,92,105,0.20);
        box-sizing:border-box;
        border-radius: 4px;
        margin-bottom:46px;
    }

    .sell_li:nth-child(2),.sell_li:nth-child(5){
        margin-left:100px;
        margin-right:100px;
        width:300px;
        height:260px;
        position:relative;
        background: #FFFFFF;
        border: 1px solid rgba(245,92,105,0.20);
        box-sizing:border-box;
        border-radius: 4px;
        margin-bottom:46px;
    }

    .sell_li>img{
        width:299px;
        height:200px;

    }
    .sell_li>p{
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);
        margin-top:16px;
    }

    .float_box {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(245, 92, 105, 0.20);
        z-index: 1;
        width: 300px;
        height: 200px;
    }

    .hover_list_border{
        /*border: 1px solid rgba(245,92,105,0.20);*/
        /*box-shadow: 0 2px 8px 2px rgba(245,92,105,0.20);*/
        border: 1px solid rgba(245,92,105,0.20);
        box-shadow: 0 0 8px 2px rgba(245,92,105,0.20);
        box-sizing: border-box;
        border-radius: 4px;
    }
    .float_box>img{
        max-width:64px;
        max-height:64px;
        z-index:3;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%)
    }

    .hover_box{
        position:absolute;
        top:0;
        left:0;
        background:#fff;
        z-index:3;
        width:300px;
        height:200px;
        border: 1px solid rgba(245,92,105,0.20);
        box-sizing: border-box;
    }
    .hover_box>p{
        text-align:center;
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: rgba(0,0,0,0.80);
        padding:70px 30px 0 30px;
        line-height:20px;
    }

</style>