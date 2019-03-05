<template>
    <div class="food_container">
        <p>线上线下高效连通</p>
        <div class="mar1200">
            <ul class="food_box_list">
                <li v-for="(item,index) in foodList" :key="index" @mouseover="changeNav(index)" @mouseleave="mouseleave(index)">
                    <div class="food_content">
                        <div class="img_bg">
                            <img :src="item.no_img" alt="">
                        </div>
                        <p class="title_item">{{item.title}}</p>
                        <p class="content_item">{{item.content}}</p>
                    </div>
                    <!--鼠标悬浮上去的效果-->
                    <div class="hover_box" v-if="isNav == index" >
                        <div class="img_bg">
                            <img :src="item.select_img" alt="">
                        </div>
                        <p class="title_item">{{item.title}}</p>
                        <p class="content_item">{{item.content}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "food_two",
        data() {
            return {
                foodList:[
                    {
                        select_img:'./static/img/home/fd_1.png',
                        no_img:'./static/img/home/fd_n_1.png',
                        title:'商家',
                        content:'精细化数据分析、会员营销、移动端经营数据监控'
                    },
                    {
                        select_img:'./static/img/home/fd_2.png',
                        no_img:'./static/img/home/fd_n_2.png',
                        title:'门店',
                        content:'堂食自助点餐，餐位管理，外卖配送，优惠活动，服务管理，收银管理，小票管理等'
                    },
                    {
                        select_img:'./static/img/home/fd_3.png',
                        no_img:'./static/img/home/fd_n_3.png',
                        title:'消费者',
                        content:'随时预定，惊喜优惠，随时点餐，优惠营销拓客'
                    }
                ],
                isNav:-1
            }
        },
        mounted() {
        },
        methods: {
            changeNav(index){
                this.isNav = index
            },
            mouseleave(index){
                this.isNav = -1
            }
        }
    }
</script>

<style scoped>
    .food_container {
        width: 100%;
        height: 608px;
    }
    .mar1200{
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }
    .food_container > p:nth-child(1) {
        text-align:center;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
        padding-top:91px;
    }
    .food_box_list{
        margin-top:46px;
        width:100%;
        display:flex;
        justify-content: space-between;
        align-content: space-between;
    }
    .food_box_list>li{
        width:calc(100% / 3);
        margin-right:105px;
        height:332px;
        background: #FFFFFF;
        position:relative;
    }
    .food_content{
        width:100%;
        height:332px;
        border: 1px solid rgba(0,0,0,0.10);
        box-sizing: border-box;
        border-radius: 4px;
    }
    .img_bg{
        height:160px;
        background: rgba(0,0,0,0.05);
        border-radius: 4px;
        position:relative;
    }
    .img_bg>img{
        max-width:60px;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%)
    }

    .title_item{
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
        margin-top:40px;
        text-align:center;
     }
    .content_item{
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: rgba(0,0,0,0.80);
        text-align: center;
        width:268px;
        margin:31px;
        line-height:20px;

        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;      /* 可以显示的行数，超出部分用...表示*/
        -webkit-box-orient: vertical;
    }

    .hover_box{
        width:330px;
        height:332px;
        background: #FFFFFF;
        border: 1px solid #FB8007;
        box-shadow: 0 2px 8px 2px rgba(251,128,7,0.20);
        border-radius: 4px;
        position:absolute;
        top:0;
        left:0;
        z-index:3;
    }



</style>
