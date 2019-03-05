<template>
    <div class="food_five">
        <div class="mar1200">
            <div class="title_box">
                <p>用户简单实用，即用即走</p>
                <p>数据信息全掌握 运作更流畅</p>
            </div>
            <ul class="list_box">
                <li v-for="(item,index) in dataList" :key="index" :class="[tempIndex == index?className:className2]" @mouseover="onMouseOver(index)" @mouseleave="onMouseLeave(index)">
                    <img :src="item.common_img" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "food_five",
        data() {
            return {
                dataList:[
                    {
                        default_img:'./static/img/home/fd_five_n1.png',
                        common_img:'./static/img/home/fd_five_n1.png',
                        select_img:'./static/img/home/fd_five_s1.png',
                        title:'商家触达，触手可及'
                    },
                    {
                        default_img:'./static/img/home/fd_five_n2.png',
                        common_img:'./static/img/home/fd_five_n2.png',
                        select_img:'./static/img/home/fd_five_s2.png',
                        title:'让堂食更加便捷'
                    },
                    {
                        default_img:'./static/img/home/fd_five_n3.png',
                        common_img:'./static/img/home/fd_five_n3.png',
                        select_img:'./static/img/home/fd_five_s3.png',
                        title:'高效率的外卖美食'
                    },
                    {
                        default_img:'./static/img/home/fd_five_n4.png',
                        common_img:'./static/img/home/fd_five_n4.png',
                        select_img:'./static/img/home/fd_five_s4.png',
                        title:'智慧餐饮优惠享不停'
                    },
                    {
                        default_img:'./static/img/home/fd_five_n5.png',
                        common_img:'./static/img/home/fd_five_n5.png',
                        select_img:'./static/img/home/fd_five_s5.png',
                        title:'移动支付不找零'
                    }
                ],
                tempIndex:0,
                className:'list_style',
                className2:'list_style'
            }
        },
        mounted() {
        },
        methods: {

            //鼠标移入
            onMouseOver(index){
                this.tempIndex = index;
                this.dataList[index]['common_img'] = this.dataList[index]['select_img'];
                this.className = 'list_style hover_list_style'
            },
            //鼠标离开
            onMouseLeave(index){
                this.dataList[index]['common_img'] = this.dataList[index]['default_img'];
            }

        }
    }
</script>

<style lang="less" scoped>
    .food_five {
        width: 100%;
        height: 418px;
        background: rgba(0, 0, 0, 0.03);
    }
    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }
    .title_box{
        text-align:center;
        padding-top:94px;
    }
    .title_box>p:nth-child(1){
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);

    }
    .title_box>p:nth-child(2){
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);
        margin-top:14px;
    }
    .list_box{
        width:100%;
        height:200px;
        display:flex;
        justify-content: center;
        align-content: center;
        text-align:center;
        margin-top:24px;
    }
    /*.list_box>li{*/
        /*width:200px;*/
        /*height:200px;*/
    /*}*/
    .list_style{
        width:200px;
        height:200px;
    }
    .hover_list_style{
        width:200px;
        height:200px;
        background: #FFFFFF;
        box-shadow: 0 2px 8px 2px rgba(251,128,7,0.20);
    }
    .list_box>li>img{
        /*width:60px;*/
        max-height:60px;
        margin-top:43px;
    }

    .list_box>li>p{
        margin-top:38.1px;
        font-family: PingFang-SC-Medium;
        font-size: 18px;
        color: rgba(0,0,0,0.80);
    }
</style>