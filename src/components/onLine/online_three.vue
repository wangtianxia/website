<template>
    <div class="cash_three">
        <div class="mar1200">
            <div class="cash_three_container">
                <p>产品核心优势</p>
                <div class="ul_box my-swiper">
                    <ul class="cash_three_list swiper-wrapper">
                        <li class="swiper-slide"  v-for="(item,index) in cashList"  @mouseover="MouseOver(index)" :key="index">
                           <div class="swiper-content" :class="[tempIndex == index ? className : className2]">
                            <img :src="item.img" alt="">
                            <div class="cash_box_info">
                                <p>{{item.title}}</p>
                                <p>{{item.content}}</p>
                            </div>
                            <div class="img_hover_bg">
                            </div>
                            <div class="icon_bg">
                                <img :src="item.icon" alt="">
                            </div>

                           </div>
                        </li>
                    </ul>
                    <!--如果你需要前进后退按钮-->
                    <div class="back swiper-button-next">
                        <img src="../../../static/img/home/back.png"  alt="">
                    </div>
                    <div class="forward swiper-button-next">
                        <img  src="../../../static/img/home/forward.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "cash_three",
        data() {
            return {
                cashList:[
                    {
                        img:'./static/img/home/case_1.png',
                        icon:'./static/img/home/cash_c1.png',
                        title:'多种模式适应各种场景',
                        content:'根据行业特性选择最适合的模板'
                    },
                    {
                        img:'./static/img/home/case_2.png',
                        icon:'./static/img/home/cash_c2.png',
                        title:'快速创建小程序',
                        content:'告别复杂操作'
                    },
                    {
                        img:'./static/img/home/wangshang.png',
                        icon:'./static/img/home/cash_c3.png',
                        title:'手机端智慧经营',
                        content:'小程序即可登录管理后台'
                    },
                    {
                        img:'./static/img/home/case_1.png',
                        icon:'./static/img/home/cash_c4.png',
                        title:'分销裂变引爆电商',
                        content:'轻松设置即可拥有分销梯队'
                    },
                    {
                        img:'./static/img/home/wangshang.png',
                        icon:'./static/img/home/cash_c3.png',
                        title:'手机端智慧经营',
                        content:'小程序即可登录管理后台'
                    },
                    {
                        img:'./static/img/home/case_1.png',
                        icon:'./static/img/home/cash_c4.png',
                        title:'分销裂变引爆电商',
                        content:'轻松设置即可拥有分销梯队'
                    }
                ],
                tempIndex:-1,
                className:'cash_list_li',
                className2:'cash_list_li'

            }
        },
        mounted() {
            this.slideInit()
        },
        methods: {
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
            MouseOver(index){
                this.tempIndex = index;
                this.className = 'cash_list_li cash_hover_li'
            }

        }
    }
</script>

<style lang="less" scoped>
    .cash_three {
        width: 100%;
        /*height: 656px;*/
        background: rgba(54, 159, 186, 0.10);
    }
    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }
    .cash_three_container{
        width:100%;
        height:656px;
        text-align:center;
        padding-top:94px;
    }
    .cash_three_container>p{
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
    }
    .ul_box{
        margin-top:46px;
        height:380px;
        position:relative;
        /*width: 1200px;*/
        overflow: hidden;

    }
    .cash_three_list{
        width:100%;
        height:380px;
        background-position: center;  //
        background-size: cover;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: flex-start;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-wrapper{
        width:1200px;
        height:380px;
    }
    .cash_list_li{
        /*width:calc(100% / 4 - 60);*/
        height:380px;
        background:#fff;
        border: 1px solid rgba(255,255,255,0);
        box-sizing: border-box;
        box-shadow: 0 2px 8px 2px rgba(89,64,153,0.20);
        border-radius: 4px;
        position:relative;
        margin-right:10px;
    }

    .cash_three_list>.cash_three_list:nth-last-child(1){
        margin-left:0;
    }


    .cash_hover_li{
        position:relative;
        background: #FFFFFF;
        border: 1px solid rgba(89,64,153,0.50);
        box-shadow: 0 0 8px 2px rgba(89,64,153,0.20);
        box-sizing: border-box;
        border-radius: 4px;
    }


    .cash_list_li>img{
        width:100%;
        height:250px;

    }
    .cash_box_info{
        margin-top:46px;

    }

    .cash_box_info>p:nth-child(1){
        margin-top:46px;
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);

    }
    .cash_box_info>p:nth-child(2){
        margin-top:10px;
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0,0,0,0.60);
    }

    .img_hover_bg{
        width:100%;
        height:250px;
        position:absolute;
        top:0;
        background: rgba(54,159,186,0.20);
        /*background: rgba(0,0,0,0.5);*/
        text-align:center;
    }

    .icon_bg{
        width:73px;
        height:73px;
        background:#fff;
        border-radius:50%;
        position:absolute;
        top:213px;
        left:50%;
        margin-left:-37px;
        z-index:99;
        border:1px solid #ccc;
        text-align:center;
        box-shadow: 0 2px 4px 2px rgba(89,64,153,0.20);
        line-height:73px;
        /*margin-top:-24.3px;*/
    }
    .icon_bg>img{
        /*max-width:32px;*/
        display:inline-block;
        max-width:32px;
        vertical-align: middle;
    }

    /*前进后退*/
    .forward {
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 48px;
        left: 0;
        background: rgba(54,159,186,0.50);
        border-radius: 25px;
    }

    .back {
        width: 50px;
        height: 50px;
        background: rgba(54,159,186,0.50);
        border-radius: 25px;
        text-align: center;
        line-height: 48px;
        right: 0;

    }

    .forward > img {
        width: 14px;
        height: 24px;
        display: inline-block;
        vertical-align: middle;
    }

    .back > img {
        width: 14px;
        height: 24px;
        display: inline-block;
        vertical-align: middle;
    }

    .my-swiper{
        width:100%;
    }
    .swiper-slide{
        height:100%;
    }
    .swiper-content{
        box-sizing: border-box;
        position:relative;
        overflow: hidden;
        background: #FFFFFF;
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.10);
        border-radius: 4px;
    }

</style>