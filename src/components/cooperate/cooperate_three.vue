<template>
    <div class="cooperate_three_page">
        <div class="mar1200">
            <div class="cooperate_container">
                <p>选择我们的优势</p>
                <ul class="cooperate_list">
                    <li v-for="(item,index) in dataList" :key="index"
                        @mouseover="MouseOver(index)"
                        @mouseleave="MouseLeave(index)" :class="[tempIndex == index ? listName : listName2]">
                        <div  :class="[tempIndex == index ? className : className2]">
                            <img :src="item.common_icon" alt="">
                            <p>{{item.title}}</p>
                        </div>
                        <div  class="content_style" v-if="index==0">
                            <p>
                                平台使用培训<br/>
                                APP运营培训<br/>
                                产品代理体系支持<br/>
                                行业专属版本支持
                            </p>
                        </div>
                        <div  class="content_style" v-if="index==1">
                            <p>
                                开放专属APP<br/>
                                故障优先处理<br/>
                                二次开发指导
                            </p>
                        </div>
                        <div  class="content_style" v-if="index==2">
                            <p>
                                营销支持<br/>
                                线下交流和沙龙<br/>
                                高阶市场销售集训服务
                            </p>
                        </div>
                        <div  class="content_style" v-if="index==3">
                            <p>
                                官方推荐优质客户资源<br/>
                                联合公关推广，提升知名度<br/>
                                市场资源和投放支持<br/>
                                奖励政策支持<br/>
                                市场活动支持<br/>
                                市场物料支持
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--优质合作伙伴-->
        <div class="good_bg">
            <img src="../../../static/img/home/good.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "cooperate_three",
        data() {
            return {
                dataList:[
                    {
                        icon:'./static/img/home/coo_icon_1.png',
                        common_icon:'./static/img/home/coo_icon_1.png',
                        hover_icon:'./static/img/home/coo_h_1.png',
                        title:'产品支持'
                    },
                    {
                        icon:'./static/img/home/coo_icon_2.png',
                        common_icon:'./static/img/home/coo_icon_2.png',
                        hover_icon:'./static/img/home/coo_h_2.png',
                        title:'技术支持'
                    },
                    {
                        icon:'./static/img/home/coo_icon_3.png',
                        common_icon:'./static/img/home/coo_icon_3.png',
                        hover_icon:'./static/img/home/coo_h_3.png',
                        title:'营销支持'
                    },
                    {
                        icon:'./static/img/home/coo_icon_4.png',
                        common_icon:'./static/img/home/coo_icon_4.png',
                        hover_icon:'./static/img/home/coo_h_4.png',
                        title:'市场支持'
                    }
                ],
                className:'icon_gray_bg',
                className2:'icon_gray_bg',
                listName:'cooperate_list_sytle',
                listName2:'cooperate_list_sytle',
                tempIndex:-1

            }
        },
        mounted() {
        },
        methods: {
            MouseOver(index){
                this.dataList[index]['common_icon'] = this.dataList[index]['hover_icon'];
                this.tempIndex = index;
                this.className = 'icon_gray_bg icon_hover_bg';
                this.listName = 'cooperate_list_sytle cooperate_hover_list'

            },
            MouseLeave(index){
                this.dataList[index]['common_icon'] = this.dataList[index]['icon'];
                this.tempIndex = -1;
            }

        }
    }
</script>

<style lang="less" scoped>
    .cooperate_three_page {
        width: 100%;
        background: rgba(46,55,99,0.05);
    }
    .mar1200 {
        width: 100%;
        margin: 0 auto;
        height: 100%;
    }
    .cooperate_container{
        width:100%;
        text-align:center;
        padding-bottom:94px;
    }
    .cooperate_container>p{
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
        padding-top:94px;
    }
    .cooperate_list{
        /*display:flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        margin-top:47px;
        text-align: center;

    }
    /*.cooperate_list>li{*/
        /*width:300px;*/
        /*height:524px;*/
        /*background: #FFFFFF;*/
        /*border: 1px solid rgba(0,0,0,0.15);*/
        /*box-sizing: border-box;*/
    /*}*/

    /*.cooperate_list>li:nth-last-child(1){*/
        /*border-left:none;*/

    /*}*/
    /*.cooperate_list>li:nth-child(1),.cooperate_list>li:nth-child(2){*/
        /*border-right:none;*/

    /*}*/

    /*.cooperate_list>.cooperate_list_sytle>:nth-last-child(1){*/
    /*border-left:none;*/

    /*}*/
    /*.cooperate_list>.cooperate_list_sytle:nth-child(1),.cooperate_list>li:nth-child(2){*/
    /*border-right:none;*/

    /*}*/


    .cooperate_list_sytle:nth-of-type(1){
        width:300px;
        height:524px;
        background: #FFFFFF;
        border-top: 1px solid rgba(0,0,0,0.15);
        border-left: 1px solid rgba(0,0,0,0.15);
        border-bottom: 1px solid rgba(0,0,0,0.15);
        display: inline-block;
    }
    .cooperate_list_sytle:nth-of-type(2){
        width:300px;
        height:524px;
        background: #FFFFFF;
        border-top: 1px solid rgba(0,0,0,0.15);
        border-left: 1px solid rgba(0,0,0,0.15);
        border-bottom: 1px solid rgba(0,0,0,0.15);
        display: inline-block;
    }
    .cooperate_list_sytle:nth-of-type(3){
        width:300px;
        height:524px;
        background: #FFFFFF;
        border-top: 1px solid rgba(0,0,0,0.15);
        border-left: 1px solid rgba(0,0,0,0.15);
        border-bottom: 1px solid rgba(0,0,0,0.15);
        display: inline-block;
    }
    .cooperate_list_sytle:nth-of-type(4){
        width:300px;
        height:524px;
        background: #FFFFFF;
        border: 1px solid rgba(0,0,0,0.15);
        display: inline-block;
    }
    .cooperate_hover_list{
        border: 1px solid rgba(58,116,221,0.15);
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.30);
        display: inline-block;
        z-index: 100;
        position: relative;
    }
    .icon_gray_bg{
        width:100%;
        height:170px;
        background: rgba(0,0,0,0.08);
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);
        text-align: center;
    }
    /*悬浮*/
    .icon_hover_bg{
        margin:0 auto;
        height:170px;
        background: #3A74DD;
        text-align: center;
    }
    .icon_hover_bg>p{
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
    }
    .icon_gray_bg>img{
        max-width:50px;
        max-height:50px;
        margin-top:50px;
    }

    .icon_gray_bg>p{
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);
        text-align: center;
        line-height:30px;
        margin-top:20px;
    }
    .icon_hover_bg>p{
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
        line-height:30px;
        margin-top:20px;
    }

    .cooperate_list>li>.content_style>p:nth-child(1){
        width:144px;
    }
    .cooperate_list>li>.content_style>p:nth-child(1){
        width:108px;
    }
    .cooperate_list>li>.content_style>p:nth-child(1){
        width:180px;
    }
    .cooperate_list>li>.content_style>p:nth-child(1){
        width:216px;
    }

    .content_style{
        display:flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height:353px;
        flex-wrap: wrap;
    }

    .content_style>p{
        width:216px;
        height:200px;
        line-height:30px;
        text-align:center;
        font-family: PingFang-SC-Medium;
        font-size: 18px;
        color: rgba(0,0,0,0.70);
    }
    .good_bg{
        position:relative;
        width:100%;
        height:300px;
        overflow: hidden;
    }
    .good_bg>img{
        position:absolute;
        top:0;
        left:50%;
        margin-left:-960px; /*图片宽度的一半*/
        width:1920px;  /*图片的真实宽度*/
        height:300px;  /*图片的真实高度*/


    }


</style>