<template>
    <div class="other_three_page">
        <div class="mar1200">
            <div class="other_content">
                <p>中微信通-插件应用</p>
                <ul class="other_list">
                    <li v-for="(item,index) in dataList" :key="index" @mouseover="MouseOver(index)" @mouseleave="MouseLeave(index)">
                        <div class="hover_contianer" :class="[tempIndex == index?className:className2]">
                            <img :src="item.img" alt="">
                            <div class="text_box">
                                <p class="title_info">{{item.title}}</p>
                                <p class="title_content">{{item.content}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "other_three",
        data() {
            return {
                dataList:[
                    {
                        img:'./static/img/home/o_icon_1.png',
                        title:'智能名片',
                        content:'将个人、产品等多重信息同步展示给客户'
                    },
                    {
                        img:'./static/img/home/o_icon_2.png',
                        title:'营销海报',
                        content:'便捷的经营朋友圈内容营销'
                    },
                    {
                        img:'./static/img/home/o_icon_3.png',
                        title:'分身小程序',
                        content:'将原有小程序复制分裂出多个相同的小程序'
                    },
                    {
                        img:'./static/img/home/o_icon_4.png',
                        title:'分销裂变',
                        content:'借助好友关系链引爆电商'
                    },
                    {
                        img:'./static/img/home/o_icon_5.png',
                        title:'裂变红包',
                        content:'趣味玩法，快速吸粉导流'
                    },
                    {
                        img:'./static/img/home/o_icon_6.png',
                        title:'智能派券',
                        content:'多种派券策略，提高订单转化'
                    },
                    {
                        img:'./static/img/home/o_icon_7.png',
                        title:'社交立减金',
                        content:'实现几何级数社交裂变'
                    },
                    {
                        img:'./static/img/home/o_icon_8.png',
                        title:'卡券核销',
                        content:'购物送券，到店核销促成二次消费'
                    },
                    {
                        img:'./static/img/home/o_icon_9.png',
                        title:'整点秒杀',
                        content:'限时限量，快速成交'
                    },
                    {
                        img:'./static/img/home/o_icon_10.png',
                        title:'满减包邮',
                        content:'激励提高客单价和销量'
                    },
                    {
                        img:'./static/img/home/o_icon_11.png',
                        title:'消息推送',
                        content:'新品，促销等通过模板消息精准推送给用户'
                    },
                    {
                        img:'./static/img/home/o_icon_12.png',
                        title:'营销短信',
                        content:'系统智能获取用户手机号码，一键触达'
                    },
                    {
                        img:'./static/img/home/o_icon_13.png',
                        title:'商品海报',
                        content:'商品海报一键生成，分享转发快速传播'
                    },
                    {
                        img:'./static/img/home/o_icon_14.png',
                        title:'会员储值',
                        content:'储值抵扣，用户沉淀好帮手'
                    },


                    {
                        img:'./static/img/home/o_icon_15.png',
                        title:'积分抵扣',
                        content:'购物送积分，购物再抵扣，给用户最直观...'
                    },
                    {
                        img:'./static/img/home/o_icon_16.png',
                        title:'电商专题',
                        content:'通过图文，视频等形式进行内容营销'
                    },
                    {
                        img:'./static/img/home/o_icon_17.png',
                        title:'火爆拼团',
                        content:'拼团优惠，符合大众消费习惯'
                    },
                    {
                        img:'./static/img/home/o_icon_18.png',
                        title:'微砍价',
                        content:'通过朋友圈之间互相传播帮忙砍价，最终…'
                    }
                ],
                tempIndex:0,
                className:'hover_contianer',
                className2:'hover_contianer'
            }
        },
        mounted() {
        },
        methods: {
            //鼠标移入
            MouseOver(index){
                this.tempIndex = index;
                this.className = 'hover_contianer hover_border'
            },
            //鼠标移出
            MouseLeave(index){

            }

        }
    }
</script>

<style lang="less" scoped>
    .other_three_page {
        width: 100%;
        height: 956px;
        background: #F5F5F5;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .other_content {
        width: 100%;
        padding-top:94px;
        text-align:center;
    }
    .other_content>p:nth-child(1){
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
    }
    .other_list{
        margin-top:46px;
        display:flex;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: wrap;
        width:100%;
    }
    .other_list>li{
        width:280px;
        height:120px;
        margin-right:20px;
        margin-bottom:20px;
        border-radius: 4px;
    }

    .hover_contianer{
        width:280px;
        height:120px;
        display:flex;
        justify-content: space-between;
        align-content: center;
        background: #FFFFFF;
        border-radius: 4px;
    }

    .hover_border{
        width:280px;
        height:120px;
        border: 1px solid rgba(58,116,221,0.20);
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.10);
        border-radius: 4px;
        box-sizing: border-box;
    }
    .hover_contianer>img{
        width:80px;
        height:80px;
        margin:20px 20px 20px 20px;
    }
    .text_box{
        width:140px;
        margin:20px 20px 20px 0;
        text-align:left;
    }
    .title_info{
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);
    }
    .title_content{
        margin-top:16px;
        line-height:18px;
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0,0,0,0.80);
    }


</style>