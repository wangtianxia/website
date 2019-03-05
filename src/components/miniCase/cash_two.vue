<template>
    <div class="cash_container">
        <div class="mar1200">
            <div class="cash_content">
                <p>核心优势</p>
                <ul class="cash_two_list">
                    <li v-for="(item,index) in cashList" :key="index"  @mouseover="changeNav(index)" @mouseleave="mouseleave(index)">
                        <img :src="item.img" alt="">
                        <p>{{item.title}}</p>
                        <!--悬浮的效果-->
                        <!--<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">-->
                            <div class="hover_box_bg" @click="toClickLnkk(index)" v-if="index==tempIndexes">
                                <p>{{item.content}}</p>
                            </div>
                        <!--</transition>-->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cash_two",
        data() {
            return {
                cashList:[
                    {
                        img:'./static/img/home/cash_list_1.png',
                        title:'快捷的在线开店',
                        content:'丰富的模板一键套用，个性的配置百种组件，手机直接管理订单，快速搭建自己的商城'
                    },
                    {
                        img:'./static/img/home/cash_list_2.png',
                        title:'精准的用户画像',
                        content:'记录用户各种信息绘制用户画像，聚焦核心用户，精准营销拉升客单'
                    },
                    {
                        img:'./static/img/home/cash_list_3.png',
                        title:'海量的营销工具',
                        content:'优惠劵、秒杀、拼团、裂变红包、社会立减金等海量的营销玩法，提升流量和销量'
                    },
                    {
                        img:'./static/img/home/cash_list_4.png',
                        title:'专业的数据分析',
                        content:'多维度的运营数据剖析，优化产品方案，辅助运维决策'
                    },
                    {
                        img:'./static/img/home/cash_list_5.png',
                        title:'专属云资源部署',
                        content:'数据库单独备份更安全；单独资源包随意扩展、升级方便'
                    }
                ],
                tempIndexes:-1

            }
        },
        mounted() {
        },
        methods: {
            toClickLnkk(index){

            },
            //鼠标悬浮
            changeNav(index){
                this.tempIndexes = index;
            },
            //离开
            mouseleave(index){
                this.tempIndexes = -1;
            }
        }
    }
</script>

<style lang="less" scoped>
    .cash_container {
        width: 100%;
        height: 536px;
        /*background:lightblue;*/
    }
    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }
    .cash_content{
        padding-top:94px;
        text-align:center;


    }
    .cash_content>p{
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
    }
    .cash_two_list{
        display:flex;
        justify-content: space-between;
        align-content: space-between;
        width:100%;
        padding-top:46px;
        position:relative;
    }
    .cash_two_list>li{
        /*width:calc(100% / 5);*/
        width:224px;
        height: 260px;
        text-align:center;
        background: #FFFFFF;
        box-shadow: 0 2px 8px 2px rgba(230,46,61,0.20);
        border-radius: 4px;
    }
    .cash_two_list>li>img{
        height:210px;


    }
    .cash_two_list>li>p{
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);
        color: rgba(0,0,0,0.80);
        /*margin-top:30px;*/
        line-height:38px;
    }
    .cash_item{
        text-align:center;
        font-family: PingFang-SC-Medium;
        font-size: 27px;
        color: rgba(0,0,0,0.80);
        margin-top:16px;
    }

    .hover_box_bg{
        margin-top:46px;
        width:224px;
        height:210px;
        position:absolute;
        top:0;
        z-index:99;
        animation-duration: 0.3s;
        animation-fill-mode: both;
        background:#fff;
        box-shadow: 0 2px 8px 2px rgba(230,46,61,0.20);
        border-radius: 4px;
    }
    .hover_box_bg>p{
        padding:75px 18px 0 18px;
        text-align:center;
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: rgba(0,0,0,0.80);
        letter-spacing: 0;
        line-height:20px;
    }
</style>