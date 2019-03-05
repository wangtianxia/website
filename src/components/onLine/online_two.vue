<template>
    <div class="cash_container">
        <div class="mar1200">
            <div class="cash_content">
                <p>四大版本</p>
                <ul class="cash_list">
                    <li v-for="(item,index) in cashList" :key="index"  @mouseover="changeNav(index)" @mouseleave="mouseleave(index)">
                        <img :src="item.img" alt="">
                        <p>{{item.title}}</p>
                        <!--悬浮的效果-->
                        <!--<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">-->
                            <div class="hover_white_bg" @click="toClickLnkk(index)" v-if="index==tempIndexes">
                            </div>
                        <!--</transition>-->
                    </li>
                </ul>
                <p class="cash_item">适用行业：家居  家装  建材</p>
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
                        img:'./static/img/home/os_1.png',
                        title:'展示版'
                    },
                    {
                        img:'./static/img/home/os_1.png',
                        title:'微商版'
                    },
                    {
                        img:'./static/img/home/os_1.png',
                        title:'入驻版'
                    },
                    {
                        img:'./static/img/home/os_1.png',
                        title:'品牌版'
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
        margin-bottom:94px;
        /*height: 554px;*/
        /*background:lightblue;*/
    }
    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }
    .cash_content{
        margin-top:94px;
        text-align:center;
        position:relative;

    }
    .cash_content>p{
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
    }
    .cash_list{
        display:flex;
        justify-content: space-between;
        align-content: space-between;
        width:100%;
        margin-top:22px;
    }
    .cash_list>li{
        width:230px;
        height: 240px;
        text-align:center;
    }
    .cash_list>li>img{
        height:140px;
        margin-top:20px;


    }
    .cash_list>li>p{
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.80);
        margin-top:20px;
    }
    .cash_item{
        text-align:center;
        font-family: PingFang-SC-Medium;
        font-size: 27px;
        color: rgba(0,0,0,0.80);
        margin-top:16px;
    }

    .hover_white_bg{
        margin-top:24px;
        width:230px;
        height:240px;
        position:absolute;
        top:24px;
        z-index:99;
        animation-duration: 0.3s;
        animation-fill-mode: both;
        border-radius: 8px;
        box-shadow: 0 0 8px 2px rgba(89,64,153,0.20);
    }
</style>