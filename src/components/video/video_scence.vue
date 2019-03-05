<template>
    <div class="scence_container">
        <p>实用场景</p>
        <div class="mar1200">
            <ul class="scence_list">
                <li v-for="(item,index) in scenceList"
                    :class="[tempIndex == index ? className : className2]" :key="index"
                    @mouseover="MouseOver(index)">
                    <img :src="item.img" alt="">
                    <p>{{item.value}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "video_scence",
        data(){
            return{
                scenceList:[
                    {
                        img:'./static/img/home/scence_1.png',
                        value:'银行开户'
                    },
                    {
                        img:'./static/img/home/scence_2.png',
                        value:'VIP服务'
                    },
                    {
                        img:'./static/img/home/scence_3.png',
                        value:'公安报警'
                    },
                    {
                        img:'./static/img/home/scence_4.png',
                        value:'在线教育'
                    },
                    {
                        img:'./static/img/home/bangong.png',
                        value:'企业办公'
                    },

                    {
                        img:'./static/img/home/scence_5.png',
                        value:'金融证券'
                    },
                    {
                        img:'./static/img/home/scence_6.png',
                        value:'保险定捐'
                    },
                    {
                        img:'./static/img/home/scence_7.png',
                        value:'在线医疗'
                    },
                    {
                        img:'./static/img/home/scence_8.png',
                        value:'远程指挥'
                    },
                    {
                        img:'./static/img/home/game.png',
                        value:'游戏行业'
                    },
                ],
                className:'scence_li',
                className2:'scence_li',
                tempIndex:0
            }
        },
        mounted(){

        },
        methods:{
            MouseOver(index){
                this.tempIndex = index;
                this.className = 'scence_li scence_hover_li'
            }
        }
    }
</script>

<style lang="less" scoped>
    .scence_container {
        width: 100%;
        height:600px;
    }
    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }
    .scence_container > p:nth-child(1) {
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.80);
        text-align:center;
        margin-top:94px;
    }

    .scence_list{
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top:6px;
    }

    .scence_li{
        width:140px;
        height:140px;
        margin-top:40px;
        text-align:center;
        margin-right:100px;
        margin-bottom:40px;
        border:1px solid rgba(255,255,255,.5);
        box-sizing: border-box;
    }

    .scence_hover_li{
        height:140px;
        width:140px;
        text-align:center;
        border: 1px solid #00ABB5;
        box-sizing: border-box;
        margin-top:40px;
        border-radius:50%;
        margin-right:100px;
    }
    .scence_list>li>img{
        height:138px;
    }
    .scence_list>li>p{
        margin-top:20px;
        width:100%;
        text-align:center;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: rgba(0,0,0,0.80);

    }
</style>