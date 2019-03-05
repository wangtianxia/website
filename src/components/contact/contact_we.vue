<template>
    <div class="contact_container">
        <p class="contact_titile">联系我们</p>
        <div class="img_bg">
            <img src="../../../static/img/home/about_img_bg.png" alt="">
            <div class="mar1200">
                <div class="contact_box">
                    <ul class="contact_list">
                        <li :class="[tempIndex == index ? className : className2]"
                            v-for="(item,index) in contactList" :key="index"
                        @mouseover="Mouseover(index)" @mouseleave="Mouseleave(index)">
                            <img :src="item.img" alt="">
                            <p>{{item.title}}</p>
                            <p>{{item.content}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contact_we",
        data() {
            return {
                contactList:[
                    {
                        img:'./static/img/home/hot_phone.png',
                        title:'客服热线',
                        content:'400-056-1190'
                    },
                    {
                        img:'./static/img/home/email.png',
                        title:'企业邮箱',
                        content:'3313098010@qq.com'
                    },
                    {
                        img:'./static/img/home/concate_place.png',
                        title:'联系地址',
                        content:'北京市昌平区天通中苑二区43号楼D座512'
                    }
                ],
                tempIndex:0,
                className:'contact_active_li',
                className2:'contact_active_li'
            }
        },
        mounted() {
        },
        methods: {
            Mouseover(index){
                this.tempIndex = index;
                this.className = 'contact_active_li contact_hover_li'
            }

        }
    }
</script>

<style lang="less" scoped>
    .contact_container {
        width: 100%;
        height: 100%;
        position: relative;
        background: #fff;
    }

    .contact_titile {
        width: 100%;
        text-align: center;
        margin-top: 94px;
        margin-bottom: 46px;
    }

    .mar1200 {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
    }

    .contact_content {
        height: 746px;
        position: absolute;
        top: 0;
        z-index: 9;
    }

    .img_bg {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 746px;
    }

    .img_bg > img {
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -960px; //图片宽度一半
        width: 1920px; //图片的真实宽度
        height: 746px;
    }

    .contact_content > p {
        margin: 0 auto;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.80);
        text-align: center;
        margin-top: 92px;
    }

    .contact_box {
        position: absolute;
        top: 0;
        z-index: 10;
        height: 480px;
        width:1200px;
    }

    .contact_list {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 480px;
    }

    .contact_active_li{
        width: 400px;
        height: 480px;
        margin:0 auto;
        text-align:center;
    }

    .contact_hover_li{
        width: 400px;
        height: 480px;
        background: rgba(255, 255, 255, 0.80);
        border: 1px solid rgba(58, 116, 221, 0.10);
        box-sizing: border-box;
        box-shadow: 0 0 8px 2px rgba(58, 116, 221, 0.10);
        border-radius: 4px;
        margin:0 auto;
        text-align:center;
    }

    .contact_list > li>img{
        width:140px;
        height:140px;
        margin-top:89px;
        margin-bottom:30px;
    }
    .contact_list>li>p{
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: #3A74DD;
        text-align: center;
        line-height:33px;
        padding:0 10px;
    }
</style>