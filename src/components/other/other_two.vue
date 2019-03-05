<template>
    <div class="other_page">
        <div class="mar1200">
            <div class="other_title">
                <p>中微信通-开发流程</p>
                <p></p> <!--圈-->
                <ul class="other_list_box">
                    <li class="other_list_style" v-for="(item,index) in dataList" :key="index"
                        @mouseover="mouseOver(index)" @mouseleave="mouseLeave(index)" >
                        <img :src="item.img" alt="">
                        <p class="circle">{{index+1}}</p>
                        <!--悬浮效果-->
                        <div class="other_hover" v-if="tempIndex == index">
                            <div class="other_hover_box">
                                <p>{{item.content}}</p>
                                <img src="../../../static/img/home/line.png" alt="">
                                <p class="title_item">{{item.title}}</p>
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
        name: "other_two",
        data() {
            return {
                dataList:[
                    {
                        img:'./static/img/home/other_t_1.png',
                        title:'产品咨询',
                        content:'结合您的项目需求和小程序自身的性质，我们的产品经理会帮您策划合理可行的方案。'
                    },
                    {
                        img:'./static/img/home/other_t_2.png',
                        title:'需求整理',
                        content:'我们会把需求梳理成完善的功能文档，包含前端和后台详细功能描述，让项目执行更高效透明。'
                    },
                    {
                        img:'./static/img/home/other_t_3.png',
                        title:'设计开发',
                        content:'熟悉小程序设计和开发规范的设计师和工程进行项目开发，每周会向您发送项目进度报告。'
                    },
                    {
                        img:'./static/img/home/other_t_4.png',
                        title:'测试上线',
                        content:'我们联合第三方测试机构，对小程序在不同手机和微信版本做全面测试并且对应用提供3个月技术维护。'
                    }
                ],
                tempIndex:-1
            }
        },
        mounted() {
        },
        methods: {
            //鼠标移入
            mouseOver(index){
                this.tempIndex = index;
            },
            //鼠标移出
            mouseLeave(){
                this.tempIndex = -1;
            }
        }
    }
</script>

<style lang="less" scoped>
    .other_page {
        width: 100%;
        height: 554px;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .other_title {
        padding-top: 94px;
        width: 100%;

    }
    .other_title>p:nth-child(1){
        text-align:center;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
    }
    .other_title>p:nth-child(2){
        height:4px;
        background: rgba(0,0,0,0.10);
        margin-top:46px;
    }
    .other_list_box{
        display:flex;
        justify-content: center;
        align-content: center;
        margin-left:50px;
        margin-top:41px;
    }
    //默认li样式
    .other_list_style{
        width:200px;
        height:220px;
        background: #fff;
        border-radius: 4px;
        margin-right:100px;
        position:relative;
    }

    .other_list_style>img{
        width:200px;
        height:220px;
    }

    .circle{
        width:30px;
        height:30px;
        border-radius:50%;
        background: #FFFFFF;
        border: 1px solid rgba(0,0,0,0.20);
        box-sizing:border-box;
        text-align:center;
        line-height:30px;
        font-family: PingFang-SC-Medium;
        font-size: 18px;
        color: rgba(58,116,221,0.80);
        position:absolute;
        top:0;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:11;
        margin-top:-45px;
    }

    .other_hover{
        width:200px;
        height:220px;
        position:absolute;
        top:0;
        left:0;
        background: #FFFFFF;
        border: 1px solid rgba(58,116,221,0.20);
        box-sizing:border-box;
        border-radius: 4px;
        z-index:9;
        text-align:center;
        border: 1px solid rgba(58,116,221,0.20);
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.10);
        border-radius: 4px;
    }
    .other_hover_box>p:nth-child(1){
        pfont-family: PingFang-SC-Medium;
        font-size: 14px;
        color: rgba(0,0,0,0.80);
        text-align: center;
        padding:25px 11px;
        line-height:20px;
    }
    .other_hover_box>img{
        width:20%;
        margin:0 auto;
        padding-top:32px;
        text-align:center;
    }
    .title_item{
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: rgba(0,0,0,0.80);
        padding-top:15px;
    }
</style>