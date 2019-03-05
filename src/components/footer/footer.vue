<template>
    <div class="footer_container">
        <img class="footer_bg" src="../../../static/footer_bg.png" alt="">
        <div class="mar1200">
            <div class="footer-big-box">
                <div class="footer-box">
                    <div class="part-box-1">
                        <p>联系我们</p>
                        <p class="server-phone0">
                            <span>客服热线:</span><br/>
                            <span class="num-phone">400-050-1190</span>
                        </p>
                        <p class="server-phone">
                            <span>企业邮箱:</span><br/>
                            <span class="num-phone">43313098010@qq.com</span>
                        </p>
                        <p class="server-phone">
                            <span>联系地址:</span><br/>
                            <span class="num-phone">北京市昌平区天通中苑二区43号楼D座512</span>
                        </p>
                    </div>
                    <!---->
                    <p class="bar-line"></p>
                    <div class="part-box-1">
                        <p>友情链接</p>
                        <ul class="friend-ul">
                            <li v-for="(item,index) in friendLink" :key="index" @click="toFriendLink(index)">
                                <a>{{item.label}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="part-box-1">
                        <p>小程序定制</p>
                        <ul class="friend-ul">
                            <li v-for="(item,index) in miniProjectList" :key="index" @click="toMiniProjectLink(index)">
                                <a>{{item.label}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="part-box-1">
                        <p>合作加盟</p>
                        <ul class="friend-ul">
                            <li v-for="(item,index) in joinList" :key="index" @click="toParnter(index)">
                                <a>{{item.label}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="part-box-1">
                        <p>合作加盟</p>
                        <img src="../../../static/code.png" alt="">
                    </div>
                </div>
                <div class="line-text"></div>
                <ul class="footer-nav">
                    <li v-for="(item,index) in navList" :key="index" @click="toNavList(index)">
                        <span>{{item.label}}</span>
                    </li>
                </ul>
                <div class="fotter-info">
                    <p>Copyright 2018 - 2020 北京中微信通网络科技有限公司 京ICP备15000419号-5</p>
                    <p>地址：北京市昌平区天通中苑二区43号楼D座512</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer",
        data() {
            return {
                friendLink: [
                    {
                        label: '定制服务',
                    },
                    {
                        label: '产品中心',
                    },
                    {
                        label: '新闻资讯',
                    },
                    {
                        label: '合作加盟'
                    },
                    {
                        label: '关于我们'
                    },
                    {
                        label: '联系我们'
                    }
                ],
                miniProjectList: [
                    {
                        label: '连锁门店',
                    },
                    {
                        label: '直播/音视频',
                    },
                    {
                        label: '电商小程序',
                    },
                    {
                        label: '餐饮小程序'
                    },
                    {
                        label: '新零售'
                    },
                    {
                        label: 'AI应用'
                    }
                ],
                joinList: [
                    {
                        label: '我们的优势',
                    },
                    {
                        label: '全方位支持',
                    },
                    {
                        label: '优质的伙伴',
                    },
                    {
                        label: '立即咨询'
                    },
                    {
                        label: '关于我们'
                    },
                    {
                        label: '联系我们'
                    }
                ],
                navList: [
                    {
                        label: '公司首页'
                    },
                    {
                        label: '定制服务'
                    },
                    {
                        label: '产品中心'
                    },
                    {
                        label: '新闻资讯'
                    },
                    {
                        label: '合作加盟'
                    },
                    {
                        label: '关于我们'
                    },
                    {
                        label: '联系我们'
                    }
                ]
            }
        },
        mounted() {

        },
        methods: {
            //友情链接
            toFriendLink(index) {
                if(index == 0){
                    this.$router.push('/Video')
                }else if(index == 1){
                    this.$router.push('/Product')
                }else if(index == 2){
                    this.$router.push('/News')
                }else if(index == 3){
                    this.$router.push('/Cooperate')
                }else if(index == 4){
                    this.$router.push('/AboutWe')
                }else if(index == 5){
                    this.$router.push('/Contact')
                }
            },
            //小程序定制
            toMiniProjectLink(index) {
                if (index == 0) {
                    this.$router.push('/Online')
                }else if(index == 1){
                    this.$router.push('/Video')
                }else if(index == 2){
                    this.$router.push('/miniCash')
                }else if(index == 3){
                    this.$router.push('/Food')
                }else if(index == 4){
                    this.$router.push('/Sell')
                }else if(index == 5){
                    this.$router.push('/Ai')
                }
            },
            //合作加盟
            toParnter(index) {
                if (index == 0) {
                    this.$router.push('/')
                }else if(index == 1){
                    this.$router.push('/Video')
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
            //底部导航列表
            toNavList(index) {
                if (index == 0) {
                    this.$router.push('/')
                }else if(index == 1){
                    this.$router.push('/Video')
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

            }
        }
    }
</script>

<style lang="less" scoped>
    .footer_container {
        width: 100%;
        height: 563px;
        position: relative;
        .footer_bg {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 0;
        }
        .mar1200 {
            width: 1200px;
            margin: 0 auto;
            height: 100%;

        }
        .footer-big-box {
            position: absolute;
            z-index: 2;
        }
        .footer-box {
            padding-top: 77px;
            height: 254px;
            display: flex;
            justify-content: flex-start;
            align-content: flex-start;

        }
        .part-box-1 {
            width: 191px;
            color: #fff;
        }
        .bar-line {
            width: 2px;
            height: 254px;
            background: rgba(255, 255, 255, 0.50);
            margin-left: 109px;
            margin-right: 98px;
        }
        .part-box-1sss > p:nth-child(1) {
            font-family: PingFang-SC-Medium;
            font-size: 20px;
            color: #FFFFFF;
            letter-spacing: 2px;
        }
        .server-phone0 {
            margin-top: 29px;
            font-family: PingFang-SC-Medium;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.70);
        }
        .server-phone {
            margin-top: 11.5px;
            font-family: PingFang-SC-Medium;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.70);
        }
        .num-phone {
            font-family: PingFang-SC-Medium;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.70);
            line-height: 20px;
            line-height: 20px;
        }
        .friend-ul > li:nth-child(1) {
            margin-top: 29px;
        }
        .friend-ul > li {
            font-family: PingFang-SC-Medium;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.70);
            line-height: 20px;
            margin-top: 14px;
            cursor: pointer;
        }
        .part-box-1 > img {
            background: #FFFFFF;
            width: 200px;
            height: 200px;
            margin-top: 30px;
        }
        .line-text {
            width: 100%;
            height: 2px;
            margin-top: 49px;
            background: rgba(255, 255, 255, 0.50);
        }
        .footer-nav {
            margin-top: 49px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-content: center;
        }
        .footer-nav > li {
            margin-right: 30px;
            font-family: PingFang-SC-Medium;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.70);
            letter-spacing: 0;
            cursor: pointer;
        }
        .fotter-info {
            text-align: center;
            margin: 14px auto;
            font-family: PingFang-SC-Medium;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.70);
            letter-spacing: 0;
        }
        .fotter-info > p:nth-child(1) {
            margin-bottom: 14px;
        }
    }
</style>
