<template>
    <div class="coopearate_pages">
        <div class="mar1200">
            <div class="coopearate_box">
                <p>客服电话：400-056-1190</p>
                <p>(仅供代理合作咨询)</p>
                <ul class="coop_list">
                    <li v-for="(item,index) in cityList" :key="index"
                        :class="[tempIndex == index ? className : className2]"
                        @mouseover="MouseOver(index)" @mouseleave="mouseLeave(index)">
                        <p class="area_info">{{item.area}}</p>
                        <p class="city_info">{{item.city}}</p>
                        <p class="business_info">{{item.business}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cooperate_four",
        data() {
            return {
                cityList:[
                    {
                        area:'华南区',
                        city:"负责地区：深圳、福建、广西、广东、湖南、海南、湖北",
                        business:"负责业务：小程序代理、建站代理招商"
                    },
                    {
                        area:'华东区',
                        city:"负责地区：江苏、浙江、上海、安徽、江西、山西",
                        business:"负责业务：小程序代理、建站代理招商"
                    },
                    {
                        area:'西南区',
                        city:"负责地区：重庆、陕西、四川、云南、贵州、河南",
                        business:"负责业务：小程序代理、建站代理招商"
                    },
                    {
                        area:'华东区',
                        city:"负责地区：北京、天津、河北、东三省、甘肃、宁夏、内蒙古、山东",
                        business:"负责业务：小程序代理、建站代理招商"
                    }
                ],
                className:'coop_common_list',
                className2:'coop_common_list',
                tempIndex:0

            }
        },
        mounted() {
        },
        methods: {
            //鼠标移入
            MouseOver(index){
                this.tempIndex = index;
                this.className = 'coop_common_list coop_hover_list'

            },
            //鼠标移出
            mouseLeave(index){
                this.tempIndex = 0;
                this.className = 'coop_common_list coop_hover_list'
            }

        }
    }
</script>

<style lang="less" scoped>
    .coopearate_pages {
        width: 100%;
    }
    .mar1200 {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
    }
    .coopearate_box{
        width:100%;
        text-align:center;
    }
    .coopearate_box>P:nth-child(1){
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
        text-align:center;
        padding-top:94px;
    }
    .coopearate_box>P:nth-child(2){
        font-family: PingFang-SC-Medium;
        font-size: 18px;
        color: rgba(0,0,0,0.80);
        margin-top:14px;
    }
    .coop_list{
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top:94px;
        margin-bottom:94px;
    }

    .coop_common_list{
        width:560px;
        height:200px;
        background: #FFFFFF;
        box-shadow: 0 0 8px 2px rgba(0,0,0,0.10);
        border-radius: 4px;
        margin-bottom:40px;
        box-sizing: border-box;
        text-align:left;
        padding:30px;
        border:1px solid #fff;
    }
    .coop_hover_list {
        width: 560px;
        height: 200px;
        background: #FFFFFF;
        border-radius: 4px;
        margin-bottom: 40px;
        box-sizing: border-box;
        text-align: left;
        border: 1px solid rgba(58, 116, 221, 0.10);
        box-shadow: 0 0 8px 2px rgba(0,0,0,0.10);
        padding:30px;
    }

    .coop_list>li:nth-child(2),.coop_list>li:nth-child(4){
        margin-left:40px;
    }
    .area_info{
        /*margin-top:30px;*/
        font-family: PingFang-SC-Medium;
        font-size: 28px;
        color: rgba(58,116,221,0.80);
    }
    .city_info{
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.70);
        line-height:28px;
        margin-top:21px;
    }
    .business_info{
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: rgba(0,0,0,0.70);
        line-height:28px;
    }
</style>