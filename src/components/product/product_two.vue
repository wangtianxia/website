<template>
    <div class="product_pages">
        <div class="mar1200">
            <div class="prduct_content_box">
                <p>中微信通-产品中心</p>
                <ul class="product_list">
                    <li class="nav_name" v-for="(item,index) in navList" :key="index"
                        @mouseover="MouseOver(index)"
                        @mouseleave="MouseLeave(index)"
                        @click="toNavClick(index)"
                        :class="[tempIndex == index?className:className2]">
                        {{item.nav_title}}
                    </li>
                </ul>
                <div class="mini_product">
                    <p>全部小程序</p>
                    <ul class="mini_list">
                        <li v-for="(item,index) in miniList" :key="index" @mouseover="listMouseOver(index)" @mouseLeave="listMouserLeave()">
                            <div class="mini_list_bg">
                                <img class="phone_bg" src="../../../static/img/home/phonoe2.png" alt="">
                                <div class="show_img">
                                    <img :src="item.show_img" alt="">
                                </div>
                                <p>{{item.title}}</p>
                                <!--228*492-->
                            </div>
                        </li>
                    </ul>
                </div>
                <!--分页-->
                <div class="pagination_box">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="50">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product_two",
        data() {
            return {
                navList:[
                    {
                        nav_title:'全部'
                    },
                    {
                        nav_title:'购物'
                    },
                    {
                        nav_title:'餐饮'
                    },
                    {
                        nav_title:'促销'
                    },
                    {
                        nav_title:'游戏'
                    },
                    {
                        nav_title:'社区'
                    },
                    {
                        nav_title:'旅游'
                    },
                    {
                        nav_title:'工具'
                    },
                    {
                        nav_title:'社交'
                    },
                    {
                        nav_title:'理财'
                    },
                    {
                        nav_title:'生活'
                    },
                    {
                        nav_title:'出行'
                    },
                    {
                        nav_title:'餐饮'
                    },
                    {
                        nav_title:'健康'
                    },
                    {
                        nav_title:'娱乐'
                    },
                    {
                        nav_title:'阅读'
                    },
                    {
                        nav_title:'视听'
                    },
                    {
                        nav_title:'企业'
                    }
                ],
                tempIndex:-1,
                className:'nav_name',
                className2:'nav_name',
                miniList:[
                    {
                        icon:'../../../static/img/home/weixin.png',
                        title:'洗衣店',
                        show_img:'../../../static/img/home/1.jpg'
                    },
                    {
                        icon:'../../../static/img/home/weixin.png',
                        title:'鲜花速递',
                        show_img:'../../../static/img/home/1.jpg'
                    },
                    {
                        icon:'../../../static/img/home/weixin.png',
                        title:'万能门店',
                        show_img:'../../../static/img/home/1.jpg'
                    },
                    {
                        icon:'../../../static/img/home/weixin.png',
                        title:'上门开锁',
                        show_img:'../../../static/img/home/1.jpg'
                    },
                    {
                        icon:'../../../static/img/home/weixin.png',
                        title:'幸福一生婚庆',
                        show_img:'../../../static/img/home/1.jpg'
                    },
                    {
                        icon:'../../../static/img/home/weixin.png',
                        title:'蛋糕店',
                        show_img:'../../../static/img/home/1.jpg'
                    },
                    {
                        icon:'../../../static/img/home/weixin.png',
                        title:'万能表单预约',
                        show_img:'../../../static/img/home/1.jpg'
                    },
                    {
                        icon:'../../../static/img/home/weixin.png',
                        title:'上门开锁',
                        show_img:'../../../static/img/home/1.jpg'
                    }
                ]
            }
        },
        mounted() {
            this.tempIndex = 0;
            this.className = 'nav_name nav_hover_name'
        },
        methods: {
            //鼠标移入
            MouseOver(index){
                // this.tempIndex = index;
                // this.className = 'nav_name nav_hover_name'
            },
            //鼠标移出
            MouseLeave(index){
                // this.tempIndex = index;
                // this.className = 'nav_name'
            },
            //菜单点击
            toNavClick(index){
                this.tempIndex = index;
                this.className = 'nav_name nav_hover_name'

            },
            //图片鼠标移入
            listMouseOver(index){

            },
            //图片鼠标移出
            listMouserLeave(index){

            }
        }
    }
</script>

<style lang="less" scoped>
    .product_pages {
        width: 100%;

    }
    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }
    .prduct_content_box{
        width:100%;
        text-align:center;
        margin-bottom:94px;
    }
    .prduct_content_box>p{
        margin-top:94px;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
    }
    .product_list{
        display:flex;
        justify-content: flex-start;
        align-content: flex-start;
    }
    .nav_name{
        width:50px;
        height:30px;
        line-height:30px;
        border-radius: 2px;
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        margin-top:51px;
        color: rgba(58,116,221,0.80);
        cursor: pointer;
    }
    .nav_hover_name{
        background: #3A74DD;
        color:#fff;
        cursor: pointer;
    }
    .mini_product{
        width:100%;
        text-align:left;
        margin-top:10px;

    }
    .mini_product>p{
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: rgba(0,0,0,0.80);
    }
    .mini_list{
        width:100%;
        display:flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        text-align:center;

    }
    .mini_list_bg{
        width:250px;
        height:506px;
        padding-right:49px;
        margin-top:30px;
        position:relative;  //

    }
    .phone_bg{
        width:250px;
        height:506px;
        position:absolute;
        top:50%;
        left:50%;
        z-index:0;
        transform:translate(-50%,-50%);

    }
    .show_img{
        width:228px;
        height:492px;
        position:absolute;
        top:50%;
        left:50%;
        z-index:-1;
        transform:translate(-50%,-50%);
        overflow:hidden;
        border-radius:10px;

    }
    .show_img>img{
        /*width:228px;*/
        display:inline-block;
        vertical-align:middle;
        height:492px;
    }
    .mini_list_bg>p{
        margin-top:26px;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: rgba(0,0,0,0.80);
        line-height:22px;
    }
    .pagination_box{
        margin-top:42px;
    }
</style>