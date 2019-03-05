<template>
    <div class="six_part">
        <div class="mar1200">
            <div class="six_container">
                <p>中微信通-合作伙伴</p>
                <ul class="partner_list">
                    <li v-for="(item,index) in partnerList"
                        :class="[tempIndex == index ? className : className2]"
                        :key="index" @mouseover="MouseOver(index)" >
                        <img :src="item.img" alt="">
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "five_part",
        data() {
            return {
                partnerList:[
                    {
                        img:'./static/img/home/logo_1.png',
                    },
                    {
                        img:'./static/img/home/logo_2.png',
                    },
                    {
                        img:'./static/img/home/logo_3.png',
                    },
                    {
                        img:'./static/img/home/logo_4.png',
                    },
                    {
                        img:'./static/img/home/logo_5.png',
                    },
                    {
                        img:'./static/img/home/logo_6.png',
                    },
                    {
                        img:'./static/img/home/logo_7.png',
                    },
                    {
                        img:'./static/img/home/logo_8.png',
                    },
                    {
                        img:'./static/img/home/logo_9.png',
                    },
                    {
                        img:'./static/img/home/logo_10.png',
                    },
                    {
                        img:'./static/img/home/logo_11.png',
                    },
                    {
                        img:'./static/img/home/logo_12.png',
                    },
                    {
                        img:'./static/img/home/logo_13.png',
                    },
                    {
                        img:'./static/img/home/logo_14.png',
                    },
                    {
                        img:'./static/img/home/logo_15.png',
                    },
                    {
                        img:'./static/img/home/logo_16.png',
                    },
                    {
                        img:'./static/img/home/logo_17.png',
                    },
                    {
                        img:'./static/img/home/logo_18.png',
                    },
                    {
                        img:'./static/img/home/logo_19.png',
                    },
                    {
                        img:'./static/img/home/logo_20.png',
                    },
                    {
                        img:'./static/img/home/logo_21.png',
                    },
                    {
                        img:'./static/img/home/logo_22.png',
                    },
                    {
                        img:'./static/img/home/logo_23.png',
                    },
                    {
                        img:'./static/img/home/logo_24.png',
                    },
                ],
                tempIndex:0,
                className:'partner_list_li',
                className2:'partner_list_li'
            }
        },
        methods: {
            MouseOver(index){
                this.tempIndex = index;
                this.className = 'partner_list_li partner_hover_li'
            }
        }
    }
</script>

<style lang="less" scoped>
    .six_part {
        width: 100%;
        height: 779px;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .six_container {
        width: 100%;
        text-align: center;
    }

    .six_container > p:nth-child(1) {
        padding-top: 94px;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.80);
    }
    .partner_list{
        width:1200px;
        margin-top:45px;
        display:flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        /*overflow: hidden;*/
    }


    .partner_list_li{
        width:200px;
        height:125px;
        position:relative;
    }

    .partner_hover_li{
        width:200px;
        height:125px;
        background: #FFFFFF;
        box-shadow: 0 0 8px 2px rgba(0,0,0,0.10);
        position:relative;

    }


    .partner_list_li>img{
        max-width:50%;
        max-height:50%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
</style>