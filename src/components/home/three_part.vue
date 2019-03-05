<template>
    <div class="three_container">
        <div class="three_bg">
            <img src="../../../static/img/home/part_second_bg.png" alt="">
            <div class="mar1200">
                <div class="three_box">
                    <p class="text_info">中微信通-产品中心</p>
                    <div class="count_info">
                        <p>265+<span>个小程序</span></p>
                        <p>30<span>个新增</span></p>
                    </div>
                    <ul class="three-list">
                        <li v-for="(item,index) in dataList" :key="index" @mouseenter.stop="onMouseOver1(index)" @mouseleave.stop="onMouseOut1(index)"><!---->
                            <div class="list_img_box">
                                <img :src="item.img" alt="">
                                <p>{{item.value}}</p>
                            </div>
                            <!--悬浮上去的效果-->
                            <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                                <div class="hover2_bg" @click="toClickLnkk(index)" v-if="index==tempIndexes">
                                    <img src="../../../static/img/home/star.png" alt="">
                                    <p>{{item.alertInfo.name}}</p>
                                    <p>￥{{item.alertInfo.count}}</p>
                                    <div class="detail_btn">
                                        <p>了解详情</p>
                                    </div>
                                </div>
                            </transition>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "three_part",
        data(){
            return{
                dataList:[
                    {
                        img:'./static/img/home/clean.png',
                        value:'洗衣店',
                        alertInfo:{
                            name:'生活',
                            count:'199'
                        }
                    },
                    {
                        img:'./static/img/home/rose.png',
                        value:'鲜花速递',
                        alertInfo:{
                            name:'生活',
                            count:'199'
                        }
                    },
                    {
                        img:'./static/img/home/door.png',
                        value:'万能门店',
                        alertInfo:{
                            name:'生活',
                            count:'199'
                        }
                    },
                    {
                        img:'./static/img/home/open.png',
                        value:'上门开锁',
                        alertInfo:{
                            name:'生活',
                            count:'199'
                        }
                    },
                    {
                        img:'./static/img/home/flower.png',
                        value:'幸福一生婚庆',
                        alertInfo:{
                            name:'生活',
                            count:'199'
                        }
                    },
                    {
                        img:'./static/img/home/cake.png',
                        value:'蛋糕店',
                        alertInfo:{
                            name:'生活',
                            count:'199'
                        }
                    }
                ],
                tempIndexes:-1
            }
        },
        methods:{
            toClickLnkk(index){
                if(index == 1){

                }else if(index == 2){

                }else if(index == 3){

                }else if(index == 4){

                }else if(index == 5){

                }
            },
            onMouseOver1(index){
                this.tempIndexes = index;
            },
            onMouseOut1(index){
                this.tempIndexes = -1
            }
        }
    }
</script>

<style lang="less" scoped>
.three_container{
    width:100%;
    height:714px;
}
.mar1200 {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
}
.three-list{
    display:flex;
    justify-content: flex-start;
    align-content: flex-start;
    margin-top:65px;
    /*height:408px;*/
}
.three-list>li{
    width:200px;
    height:408px;
}
.list_img_box{
    margin-top:36px;
    width:100%;
    height:125px;
    text-align:center;
}
.list_img_box>img{
    width:79.9px;
    height:76.9px;
}
.list_img_box>p{
    font-family: PingFang-SC-Medium;
    font-size: 16px;
    color: #FFFFFF;
    margin-top:30.1px;
}


.three_bg{
    position:relative;
    overflow:hidden;
    width:100%;
    height:714px;
}
.three_bg>img{
    top:0;
    left:50%;
    position:absolute;
    margin-left:-960px;
    /*width:1920px;  //图片真实的宽度*/
    height:714px;      //图片真实的高度
}
.three_box{
    width:1200px;
    margin:0 auto;
    position:absolute;
    z-index:2;
    top:0;
}
.text_info{
    font-family: PingFang-SC-Medium;
    font-size: 30px;
    color: #FFFFFF;
    margin-top:96px;
    text-align:center;
}
.count_info{
    margin-top:12px;
    /*width:1200px;*/
    display:flex;
    justify-content: flex-end;

}
.count_info>p{
    font-family: PingFang-SC-Medium;
    font-size: 24px;
    color: #FFFFFF;
}
.count_info>p>span{
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    color: rgb(57,113,214);
    line-height: 33px;
}
.hover2_bg{
    position:absolute;
    top:236px;
    /*z-index:2;*/
    animation-duration: 0.3s;
    animation-fill-mode: both;
    cursor: pointer;
    background: rgba(58,116,221,0.60);
    border-radius: 2px;
    width:200px;
    height:408px;
    z-index:-1;
    text-align:center;
}
.hover2_bg>img{
    width:116px;
    height:15px;
    margin-top:197px;
}
.hover2_bg>p:nth-child(1){
    font-family: PingFang-SC-Medium;
    font-size: 13px;
    color: #FFFFFF;
    margin-top:19px;
}
.hover2_bg>p:nth-child(2){
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    color: #FFFFFF;
    margin-top:21px;
}

.hover2_bg>p:nth-child(3){
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    color: #FFFFFF;
    margin-top:21px;
}
.detail_btn{
    width:100%;
    margin:0 auto;
    text-align:center;
    height:40px;
    display:flex;
    justify-content: center;
}
.detail_btn>p{
    width:100px;
    height:40px;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    margin-top:24px;
    line-height:40px;
    color:#fff;
    text-align:center;
}
</style>