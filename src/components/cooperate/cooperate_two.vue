<template>
    <div class="cooperate_pages">
        <div class="mar1200">
            <div class="cooperate_box">
                <p>为什么选择我们</p>
                <p>因为我们是与众不同的，所以你也可以像我们一样</p>
                <ul class="cooperate_list">
                    <li v-for="(item,index) in cooperateList"
                        :class="[tempIndex == index ? className:className2]"
                        :key="index" @mouseover="MouseOver(index)" @mouseleave="MouseLeave(index)">
                        <img :src="item.img" alt="">
                        <p class="title_info">{{item.title}}</p>
                        <p class="content_info">{{item.content}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cooperate_two",
        data() {
            return {
                cooperateList:[
                    {
                        img:'./static/img/home/cooprea_list_1.png',
                        title:'领先的产品体验',
                        content:'我们团队拥有多年开发经验，我们的产品从设计，技术和服务都领先于国内其他竞争对手，我们的产品就是一种说服力'
                    },
                    {
                        img:'./static/img/home/cooprea_list_2.png',
                        title:'有竞争力的收益',
                        content:'们提供给合作伙伴有竞争力的收益分成，因为我们的原则就是互利共赢，一同开拓国内市场'
                    },
                    {
                        img:'./static/img/home/cooprea_list_3.png',
                        title:'完善的服务支持',
                        content:'我们建立了完善的营销体系和代理培训，支持代理伙伴开展推 广工作'
                    }
                ],
                tempIndex:0,
                className:'cooperate_li_style',
                className2:'cooperate_li_style'
            }
        },
        mounted() {
        },
        methods: {
            MouseOver(index){
                this.tempIndex = index;
                this.className = 'cooperate_li_style cooperate_hover_style'

            },
            MouseLeave(index){

            }
        }
    }
</script>

<style lang="less" scoped>
    .cooperate_pages {
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }
    .cooperate_box{
        padding-bottom:94px;
        text-align:center;

    }
    .cooperate_box>p:nth-child(1){
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
        padding-top:94px;
    }
    .cooperate_box>p:nth-child(2){
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: rgba(0,0,0,0.80);
        margin-top:14px;
    }
    .cooperate_list{
        width:1060px;
        margin:0 auto;
        margin-top:46px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cooperate_li_style{
        width:260px;
        height:260px;
        background: #FFFFFF;
        box-shadow: 0 0 8px 2px rgba(0,0,0,0.10);
        border-radius: 4px;
        text-align:center;
    }
    .cooperate_hover_style{
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.10);
    }

    .cooperate_list>li:nth-child(2){
        width:260px;
        height:260px;
        margin-left:140px;
        margin-right:140px;
    }
    .cooperate_list>li>img{
        max-width:64px;
        max-height:64px;
        margin-top:26px;
    }
    .title_info{
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: rgba(0,0,0,0.80);
        text-align: center;
        width:220px;
        margin-left:20px;
        margin-top:27px;
    }
    .content_info{
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0,0,0,0.70);
        text-align: center;
        margin-top:18px;
        width:220px;
        margin-left:20px;
        line-height:18px;
    }
</style>