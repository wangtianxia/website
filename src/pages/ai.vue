<template>
    <div class="ai_container">
        <div class="ai_head_container">
            <div class="ai_bg">
                <img src="../../static/img/home/ai_bg.png" alt="">
            </div>
            <div class="make_box">
                <p class="make_btn">立即制作</p>
            </div>
            <!--nav list-->
            <div class="homo_top_container">
                <div class="mar1200">
                    <div class="home_top_content">
                        <a href="" title="中微信通">
                            <img src="../../static/img/logo.png" alt="">
                        </a>
                        <ul class="home_nav_list">
                            <li v-for="(item,index) in navList" :key="index" @mouseover="changeNav(index)" @mouseleave="mouseleave(index)" @click="activeChange(index)">
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
            <Na v-if="showNa" :type="type"  @close="close"/>
        </div>
        <!--第二部分-->
        <aiTwo/>
        <!--第三部分-->
        <aiThree/>
        <!--第四部分-->
        <aiFour/>
        <!--底部-->
        <Footer/>
    </div>
</template>

<script>
    import TopNav from '../components/nav/top_nav'
    import Na from '../components/home/navigator'
    import aiTwo from '../components/ai/ai_two'
    import aiThree from '../components/ai/ai_three'
    import aiFour from '../components/ai/ai_four'
    import Footer from '../components/footer/footer'
    export default {
        name: "food",
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
                showNa:false,
            }
        },
        mounted() {
        },
        methods: {
            changeNav(index){
                this.changeRed = index;
                if(index == 1){
                    this.showNa = true;
                }else{
                    this.showNa = false;
                }
            },
            // mouseleave(index){
            //     this.showNa = false;
            // },
            activeChange(index){
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
        components:{
            TopNav,Na,aiTwo,aiThree,aiFour,Footer
        }
    }
</script>

<style lang="less" scoped>
    .ai_container {
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .ai_head_container {
        height:500px;
        position:relative;
    }
    .ai_bg{
        position:relative;
        width:100%;
        overflow: hidden;
        height:500px;
        background-image: linear-gradient(-45deg, #FB8007 0%, #EE8116 100%);
    }
    .ai_bg>img{
        position:absolute;
        top:0;
        left:50%;
        margin-left:-960px; /*图片宽度的一半*/
        width:1920px;  /*图片的真实宽度*/
        height:500px;  /*图片的真实高度*/
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .homo_top_container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 33;
        width: 100%;
        height: 500px;
        margin: 0 auto;
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
        /*margin-left: 27px;*/
        padding-right: 27px;
        position: relative;
        cursor: pointer;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.60);
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
        /*width: 1300px;*/
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
        top: -124px;
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
    }

    .make_box:hover {
        background: #FFFFFF;
        color: #101428;
        cursor: pointer;
    }
</style>