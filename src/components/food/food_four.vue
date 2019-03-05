<template>
    <div class="food_four_container">
        <div class="mar1200">
            <div class="food_top_info">
                <p>商家管理功能</p>
                <p>数据信息全掌握 运作更流畅</p>
            </div>
            <ul class="food_list">
                <li v-for="(item,index) in foodInfoList"  :key="index"
                    @mouseover="mouseOver(index)" @mouseleave="mouseLeave(index)" :class="[indexNumber==index?className:className2]">
                    <img :src="item.common" alt="">
                    <p :class="[indexNumber == index?infoStyle:infoStyle2]">{{item.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "food_four",
        data() {
            return {
                foodInfoList: [
                    {
                        img: '../../../static/img/home/fd_no_1.png',
                        hover_img: '../../../static/img/home/fd_se_1.png',
                        common:"../../../static/img/home/fd_no_1.png",
                        title: '商家提醒'
                    },
                    {
                        img: './static/img/home/fd_no_2.png',
                        hover_img: './static/img/home/fd_se_2.png',
                        common:"./static/img/home/fd_no_2.png",
                        title: '订单管理'
                    },
                    {
                        img: './static/img/home/fd_no_3.png',
                        hover_img: './static/img/home/fd_se_3.png',
                        common:"./static/img/home/fd_no_3.png",
                        title: '餐桌管理'
                    },
                    {
                        img: './static/img/home/fd_no_4.png',
                        hover_img: './static/img/home/fd_se_4.png',
                        common:"./static/img/home/fd_no_4.png",
                        title: '配送管理'
                    },
                    {
                        img: './static/img/home/fd_no_5.png',
                        hover_img: './static/img/home/fd_se_5.png',
                        common:"./static/img/home/fd_no_5.png",
                        title: '营销管理'
                    },
                    {
                        img: './static/img/home/fd_no_6.png',
                        hover_img: './static/img/home/fd_se_6.png',
                        common:"./static/img/home/fd_no_6.png",
                        title: '价格管理'
                    },
                    {
                        img: './static/img/home/fd_no_7.png',
                        hover_img: './static/img/home/fd_se_7.png',
                        common:"./static/img/home/fd_no_7.png",
                        title: '入驻管理'
                    }

                ],
                className:"food_box_box",
                indexNumber:0,
                className2:"food_box_box",
                infoStyle:'info_no_select',
                infoStyle2:'info_no_select'

            }
        },
        mounted() {

        },
        methods: {
            mouseOver(index){
                this.indexNumber = index;
                this.className = 'food_box_box hover_box';
                this.foodInfoList[index]['common'] =  this.foodInfoList[index]['hover_img'];
                this.infoStyle = 'info_no_select info_style';
            },
            mouseLeave(index){
                this.indexNumber = -1;
                this.foodInfoList[index]['common'] =  this.foodInfoList[index]['img'];
                // this.infoStyle = 'info_no_select'

            }
        }
    }
</script>

<style lang="less" scoped>
    .food_four_container {
        width: 100%;
        height: 516px;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .food_top_info {
        margin-top: 94px;
        text-align: center;

    }

    .food_top_info > p:nth-child(1) {
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.80);
    }

    .food_top_info > p:nth-child(2) {
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.80);
        margin-top: 14px;
    }

    .food_list {
        margin-top: 44px;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
    }

    .food_box_box{
        transition: all 0.2s ease;
        transform-origin: center;
        width:158px;
        height: 200px;
        background: #FFFFFF;
        border: 1px solid rgba(0,0,0,0.15);
        text-align:center;
        display: inline-block;
    }

    .food_box_box >img{
        max-height:56px;
        margin-top:49px;
    }

    /*.food_box_box >p{*/
        /*margin-top:32.2px;*/
        /*font-family: PingFang-SC-Medium;*/
        /*font-size: 20px;*/
        /*color: rgba(0,0,0,0.80);*/
    /*}*/

    .hover_box{
        width:240px;
        height:200px;
        background: #FFFFFF;
        border: 1px solid #FB8007;
        box-shadow: 0 2px 8px 4px rgba(251,128,7,0.20);
    }
    .info_no_select{
        margin-top:32.2px;
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);
    }
    .info_style{
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: #FB8007;
        margin-top:32.2px;
    }

</style>