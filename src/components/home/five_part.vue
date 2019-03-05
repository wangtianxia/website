<template>
    <div class="five_part">
        <div class="mar1200">
            <div class="five_container">
                <p>中微信通-新闻资讯</p>
                <ul class="five_list">
                    <li v-for="(item,index) in fiveList" :key="index" @mouseover="MouseOve(index)">
                        <img :src="item.img" alt="">
                        <p class="title_style">{{item.title}}</p>
                        <p class="content_style">{{item.time}}</p>
                        <div class="white_bg" v-if="tempIndex == index">
                            <p>{{item.dataList.title}}</p>
                            <div class="white_content">
                                <p>{{item.dataList.content}}</p>
                            </div>
                            <div class="detail_box">
                                <p class="line_l"></p>
                                <p >了解详情</p>
                                <p class="line_r"></p>
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
        name: "five_part",
        data() {
            return {
                fiveList: [
                    {
                        img: './static/img/home/wangshang.png',
                        title: '小程序故事19-分包加载',
                        time: '2018-11-01',
                        dataList:{
                            title:'小程序故事19-分包加载',
                            content:'中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商中微信通靠谱小程序平台微信小程序优质开\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商发服务商中微信通靠谱小程序平台微信小程\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商务商务商务商序优质开发服务商中微信…'
                        }
                    },
                    {
                        img: './static/img/home/wangshang.png',
                        title: '小程序故事19-分包加载',
                        time: '2018-11-01',
                        dataList:{
                            title:'小程序故事19-分包加载',
                            content:'中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商中微信通靠谱小程序平台微信小程序优质开\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商发服务商中微信通靠谱小程序平台微信小程\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商务商务商务商序优质开发服务商中微信…'
                        }
                    },
                    {
                        img: './static/img/home/wangshang.png',
                        title: '小程序故事19-分包加载',
                        time: '2018-11-01',
                        dataList:{
                            title:'小程序故事19-分包加载',
                            content:'中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商中微信通靠谱小程序平台微信小程序优质开\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商发服务商中微信通靠谱小程序平台微信小程\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商务商务商务商序优质开发服务商中微信…'
                        }
                    },
                    {
                        img: './static/img/home/wangshang.png',
                        title: '小程序故事19-分包加载',
                        time: '2018-11-01',
                        dataList:{
                            title:'小程序故事19-分包加载',
                            content:'中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商中微信通靠谱小程序平台微信小程序优质开\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商发服务商中微信通靠谱小程序平台微信小程\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商务商务商务商序优质开发服务商中微信…'
                        }
                    },
                    {
                        img: './static/img/home/wangshang.png',
                        title: '小程序故事19-分包加载',
                        time: '2018-11-01',
                        dataList: {
                            title: '小程序故事19-分包加载',
                            content: '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商中微信通靠谱小程序平台微信小程序优质开\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商发服务商中微信通靠谱小程序平台微信小程\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商务商务商务商序优质开发服务商中微信…'
                        }
                    },
                    {
                        img: './static/img/home/wangshang.png',
                        title: '小程序故事19-分包加载',
                        time: '2018-11-01',
                        dataList:{
                            title:'小程序故事19-分包加载',
                            content:'中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商中微信通靠谱小程序平台微信小程序优质开\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商发服务商中微信通靠谱小程序平台微信小程\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商务商务商务商序优质开发服务商中微信…'
                        }
                    },
                    {
                        img: './static/img/home/wangshang.png',
                        title: '小程序故事19-分包加载',
                        time: '2018-11-01',
                        dataList:{
                            title:'小程序故事19-分包加载',
                            content:'中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商中微信通靠谱小程序平台微信小程序优质开\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商发服务商中微信通靠谱小程序平台微信小程\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商务商务商务商序优质开发服务商中微信…'
                        }
                    },
                    {
                        img: './static/img/home/wangshang.png',
                        title: '小程序故事19-分包加载',
                        time: '2018-11-01',
                        dataList:{
                            title:'小程序故事19-分包加载',
                            content:'中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商中微信通靠谱小程序平台微信小程序优质开\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商发服务商中微信通靠谱小程序平台微信小程\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '中微信通靠谱小程序平台微信小程序优质开发服\n' +
                            '务商务商务商务商序优质开发服务商中微信…'
                        }
                    }
                ],
                tempIndex:0
            }
        },
        methods: {
                MouseOve(index){
                    this.tempIndex = index;
                }
            }
        }

</script>

<style lang="less" scoped>
    .five_part {
        width: 100%;
        height: 769px;
        background: #F5F5F5;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .five_container {
        width: 100%;
        position: relative;
    }

    .five_container > p:nth-child(1) {
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.80);
        text-align: center;
        padding-top: 94px;
    }

    .five_list {
        width: 1200px;
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        margin-top: 46px;
    }

    .five_list > li {
        width: 285px;
        height: 250px;
        margin-right: 15px;
        margin-bottom: 20px;
        background: #FFFFFF;
        border-radius: 4px;
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.10);
        position:relative;
    }

    .five_list > li > img {
        width: 285px;
        height: 190px;
    }

    .five_list > li > p:nth-child(2) {
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.80);
        letter-spacing: 0;
        margin-top: 10px;
        margin-left: 14px;
    }

    .five_list > li > p:nth-child(3) {
        margin-top: 6px;
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.50);
        letter-spacing: 0;
        margin-left: 14px;
        line-height: 17px;
    }

    .white_bg {
        width: 285px;
        height: 250px;
        border-radius: 4px;
        position:absolute;
        top:0;
        background: #FFFFFF;
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.10);
        /*padding:21px 16px 0 16px;*/
    }

    .white_bg>p:nth-child(1){
        text-align: center;
        font-family: PingFang-SC-Bold;
        font-size: 14px;
        color: rgba(0,0,0,0.80);
        letter-spacing: 0;
        margin-top:21.5px;
    }
    .white_content{
        text-align: left;
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        color: rgba(0,0,0,0.70);
        letter-spacing: 0;
        margin:14.5px auto;
        width:252px;
        line-height:17px;
    }


    .detail_box{
        width:252px;
        margin:14px auto;
        display:flex;
        justify-content: center;
        align-items: flex-start;
    }
    .line_l{
        width:68px;
        height:1px;
        background:rgba(0,0,0,0.30);
        line-height:17px;
        margin-top:8.5px;
        margin-right:12px;
    }
    .line_r{
        width:68px;
        height:1px;
        background:rgba(0,0,0,0.30);
        line-height:17px;
        margin-top:8.5px;
        margin-left:12px;
    }
    .detail_box>p{
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        color: rgba(58,116,221,0.70);
        letter-spacing: 0;
    }


</style>