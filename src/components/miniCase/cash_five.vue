<template>
    <div class="cash_five_container">
        <div class="mar1200">
            <div class="cash_five_content">
                <p>万能店铺管家</p>
                <p>数据信息全掌握 运作更流畅</p>
                <ul class="cash_list">
                    <li v-for="(item,index) in cash_list" :key="index" @mouseover="changeNav(index)" @mouseleave="mouseleave(index)">
                        <div class="cash_icon_bg">
                            <img :src="item.img" alt="">
                        </div>
                        <p>{{item.value}}</p>
                        <!--图片悬浮效果-->
                        <div class="hover_box"  v-if="index==tempIndexes"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cash_five",
        data() {
            return {
                cash_list:[
                    {
                        img:'./static/img/home/five_icon_01.png',
                        value:'商城管理'
                    },
                    {
                        img:'./static/img/home/five_icon_02.png',
                        value:'商品管理'
                    },
                    {
                        img:'./static/img/home/five_icon_03.png',
                        value:'用户管理'
                    },
                    {
                        img:'./static/img/home/five_icon_04.png',
                        value:'订单管理'
                    },
                    {
                        img:'./static/img/home/five_icon_05.png',
                        value:'数据统计'
                    },
                    {
                        img:'./static/img/home/five_icon_06.png',
                        value:'应用管理'
                    }
                ],
                tempIndexes:-1

            }
        },
        mounted() {
        },
        methods: {
            changeNav(index){
                this.tempIndexes = index;
            },
            mouseleave(index){
                this.tempIndexes = -1;
            }
        }
    }
</script>

<style lang="less" scoped>
    .cash_five_container {
        width: 100%;
        background: #F8F8F8;
        height:506px;

    }
    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }
    .cash_five_content {
        width:100%;
        margin:0 auto;
        padding-top: 94px;
        padding-bottom:94px;
        text-align:center;
    }
    .cash_five_content>p:nth-child(1){
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
     }
    .cash_five_content>p:nth-child(2){
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);
        margin-top:14px;
    }
    .cash_list{
        padding-top:46px;
        display:flex;
        justify-content:space-between;
        align-content: space-between;
        width:100%;
        text-align:center;
    }
    .cash_list>li{
        width:calc(100% / 6);
        height:140px;
        margin-right:60px;
        text-align:center;
        position:relative;

    }
    .cash_list>li>p{
        margin-top:20px;
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);
    }
    .cash_icon_bg{
        width:140px;
        height:140px;
        border-radius:50%;
        background: rgba(230,46,61,0.10);
        text-align:center;
        vertical-align: middle;

    }
    .cash_icon_bg>img{
        max-width:48px;
        max-height:42.4px;
        display:inline-block;
        vertical-align: middle;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:99;
    }
    .hover_box{
        width:140px;
        height:140px;
        border-radius:50%;
        background: rgba(230,46,61,0.10);
        text-align:center;
        vertical-align: middle;
        background: #FFFFFF;
        border: 2px solid #E62E3D;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:1;
    }
</style>