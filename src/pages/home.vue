<template>
    <div class="home_container">
        <div class="home-head-container">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="home_banner">
                            <img src="../../static/img/home/home-banner-1.png" alt="">
                            <div class="make_box">
                                <p class="make_btn">立即制作</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="home_banner">
                            <img src="../../static/img/home/home-banner-1.png" alt="">
                            <div class="make_box">
                                <p class="make_btn">立即制作</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

            </div>
            <!--头部导航条 -->
            <!--<TopNav/>-->
            <div class="homo_top_container">
                <div class="mar1200">
                    <div class="home_top_content">
                        <a href="" title="中微信通">
                            <img src="../../static/img/logo.png" alt="">
                        </a>
                        <ul class="home_nav_list">
                            <li v-for="(item,index) in navList" :key="index" @mouseover="changeNav(index)"  @click="onNavigator(index)">
                                <span :class="{active_bar:changeRed == index}">{{item.value}}</span>
                                <p :class="{active:changeRed == index}"></p>
                            </li>
                        </ul>
                        <div class="btn_list">
                            <p @click="toLogin()">登陆</p>
                            <p @click="toSign()">免费注册</p>
                        </div>
                    </div>
                </div>
            </div>
            <Na v-if="showNa" :type="type" @close="close" />
        </div>

        <!--第二部分结束-->
        <BannerList />
        <!--第三部分-->
        <ThreeList />
        <!--第四部分-->
        <FourPart/>
        <!--第五部分-->
        <FivePart/>
        <!--第六部分-->
        <SixPart/>
        <div class="blue_bg">
            <div class="mar1200">
                <div class="blue_content">
                    <p>立即定制专属于你符合你气质的小程序</p>
                    <p>立即咨询</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import TopNav from '../components/nav/top_nav'

    import Footer from '../components/footer/footer'
    import BannerList from '../components/home/second_part'
    import ThreeList from '../components/home/three_part'
    import Na from '../components/home/navigator'
    import FourPart from '../components/home/four_part'
    import FivePart from '../components/home/five_part'
    import SixPart from '../components/home/six_part'

    export default {
        name: "home",
        data() {
            return {
                navList: [
                    {value: '公司首页'},
                    {value: '定期服务'},
                    {value: '产品中心'},
                    {value: '新闻资讯'},
                    {value: '合作加盟'},
                    {value: '关于我们'},
                    {value: '联系我们'}
                ],
                changeRed: 0,
                managerList: [
                    {value: '登陆'},
                    {value: '免费注册'}
                ],
                tempIndex: 0,
                newMsgList: [
                    {
                        msg: '中微信通高质量腾讯服务商小程序微信公众号企业微信'
                    },
                    {
                        msg: '中微信通高质量腾讯服务商小程序微信公众号企业微信'
                    },
                    {
                        msg: '中微信通高质量腾讯服务商小程序微信公众号企业微信'
                    }
                ],
                showNa:false,
                type:-1

            }
        },
        mounted() {
            this.bannerInit();
        },
        methods: {
            //初始化banner
            bannerInit(){
                var mySwiper1 = new Swiper('.swiper-container', {
                    // loop: true,
                    // // 如果需要分页器
                    // pagination: '.swiper-pagination',
                    // // 如果需要前进后退按钮
                    // nextButton: '.swiper-button-next',
                    // prevButton: '.swiper-button-prev',
                    // // 如果需要滚动条
                    // scrollbar: '.swiper-scrollbar',

                    loop: true,
                    observer: true,
                    observeParents: true,//修改swiper的父元素时，自动初始化swiper
                    autoplay: {
                        disableOnInteraction: false,   // 手动滑动后继续自动播放
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    }
                })
            },


            //点击切换导航
            changeNav(index) {
                this.changeRed = index;
                if(index ==1){
                    this.showNa = true;
                }else{
                    this.showNa = false;
                }
                this.type = index;
            },

            //点击切换按钮
            activeChange(index) {
                this.tempIndex = index;
            },

            onNavigator(index){
                if (index == 0) {
                    this.$router.push('/')
                }else if(index == 1){

                }else if(index == 2){
                    this.$router.push('/Product')
                }else if(index == 3){
                    this.$router.push('/News')
                }else if(index == 4){
                    this.$router.push('/Cooperate')
                }else if(index == 5){
                    this.$router.push('/AboutWe')
                }else if(index == 6){
                    this.$router.push('/Contact')
                }
            },

            close(){
                this.showNa = false;
            },

            toLogin(){
                this.$router.push('/Login');
            },
            toSign(){
                this.$router.push('/Sign');
            }



        },
        components: {
            Footer,BannerList,ThreeList,Na,FourPart,FivePart,SixPart,TopNav
        }
    }
</script>

<style lang="less" scoped>
    .home_container {
        width: 100%;
        height: 100%;
        background: #fff;
    }

    .home-head-container {
        width:100%;
        height: 500px;
        position: relative;
    }

    .homo_top_container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 33;
        width: 100%;
        height: 500px;
        margin: 0 auto;
        /*background-image: linear-gradient(0deg, #2E3763 2%, #101428 100%);*/
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .home_top_content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-top: 11px;
    }

    .home_top_content > a > img {
        width: 136px;
        /*height: 39px;*/
    }

    .home_nav_list {
        margin-left: -60px;
        font-family: 'PingFang-SC-Medium';
        font-size: 18px;
        color: #fff;
        letter-spacing: 0;
        display: flex;
        justify-content: flex-start;
        padding-top: 7px;

        /*position: relative*/
    }

    .home_nav_list > li {
        width: 72px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        padding-right: 27px;
        position: relative;
        cursor: pointer;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.60);
        cursor: pointer;
    }

    .home_nav_list > li > span {
        display: inline-block;
        line-height: 26px;
        height: 26px;
    }

    .active_bar {
        color: #fff;
    }

    .active {
        width: 72px;
        height: 1.5px;
        background: #fff;
        margin-top: 18px;
        display: block;
        animation: scaleAnimation 0.3s;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: #FFFFFF;
    }

    /*放大的动画*/
    @keyframes scaleAnimation {
        0% {
            opacity: 0;
            -webkit-transform: scale3d(.3, .3, .3);
            transform: scale3d(.3, .3, .3);
        }
        50% {
            opacity: 1;
        }
    }

    .btn_list {
        padding-top: 7px;
        height: 31px;
        line-height: 31px;
        display: flex;
        justify-content: flex-start;
        text-align: center;
    }

    .btn_list > p {
        font-family: PingFang-SC-Medium;
        color: #fff;
        letter-spacing: 0;
        height: 30px;
        margin-right: 20px;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
        line-height: 28px;
        font-size: 16px;
        border: 1px solid rgba(255, 255, 255, 0.40);
    }

    .btn_list > p:nth-child(1) {
        width: 60px;
    }

    .btn_list > p:nth-child(1):hover {
        background: #FFFFFF;
        color: #101428;
    }

    .btn_list > p:nth-child(2) {
        width: 90px;
        border: 1px solid rgba(255, 255, 255, 0.40);
        border-radius: 4px;
        box-sizing: border-box;
    }

    .btn_list > p:nth-child(2):hover {
        background: #FFFFFF;
        color: #101428;
    }

    .changeBg {
        width: 97px;
        font-family: PingFang-SC-Medium;
        font-size: 18px;
        color: rgba(34, 133, 255, 0.80);
        letter-spacing: 0;
        background: #fff;
    }

    .home_banner {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 500px; //图片高度
    }

    .home_banner > img {
        top: 0;
        left: 50%;
        position:absolute;
        margin-left: -960px; //图片宽度一半
        width: 1920px; //图片的真实宽度
        height: 500px; //图片的真实高度
    }

    .make_box {
        width: 1200px;
        margin: 0 auto;
        position:relative;

    }

    .make_btn {
        position:absolute;
        left:0;
        margin-top: 37px;
        width: 160px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 4px;
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        top: 336px;
    }

    .make_box:hover {
        background: #FFFFFF;
        color: #101428;
        cursor: pointer;
    }

    .gray_bg {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: rgba(0, 0, 0, 0.04);
    }

    .gray_content {
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        line-height: 50px;
    }

    .msg_head {
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
    }

    .msg_list {
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
    }

    .msg_list > li {
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.60);
        letter-spacing: 0;
        margin-left: 58px;
    }

    .msg_list > li > span:nth-child(2) {
        /*text-decation:*/
    }

    .changeBorder {
        /*width: 162px;*/
        /*border-radius: 4px;*/
        /*margin-right: 11px;*/
        /*box-sizing: border-box;*/
        /*text-align: center;*/
        /*border: 2px solid rgba(57, 150, 255, 0.30);*/
    }

    /*轮播*/
    .swiper-container {
        width: 100%;
        height: 500px;
        /*margin: 20px auto;*/
    }

    .blue_bg{
        width:100%;
        height:150px;
        background: rgba(58,116,221,0.90);
    }
    .blue_content{
        margin:0 auto;
        display:flex;
        justify-content: center;
        align-content: flex-start;
        line-height:150px;
        cursor: pointer;

    }
    .blue_content>p:nth-child(1){
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: #FFFFFF;
        line-height:150px;
    }
    .blue_content>p:nth-child(2){
        width:150px;
        height:40px;
        border: 1px solid #FFFFFF;
        border-radius: 4px;
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: #FFFFFF;
        line-height:40px;
        text-align: center;
        margin-left:40px;
        margin-top:55px;
    }

</style>
