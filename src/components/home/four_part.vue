<template>
    <div class="four_part">
        <div class="mar1200">
            <div class="four_container">
                <p>中微信通-四大优势</p>
                <p>中微信通 为全球 2,493,481 商户提供 365x24 小时优质服务</p>
                <ul class="four_list">
                    <li v-for="(item,index) in fourList" :key="index">
                        <img :src="item.img" alt="">
                        <p class="title_style">{{item.title}}</p>
                        <p class="content_style">{{item.content}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "four_part",
        data() {
            return {
                fourList:[
                    {
                        img:'./static/img/home/govern.png',
                        title:'官方签约',
                        content:'与我公司官方签约\n' +
                        '专业的微信小程序开发技术保障项目品质'
                    },
                    {
                        img:'./static/img/home/online.png',
                        title:'上线保障',
                        content:'专业项目经理全程跟踪\n' +
                        '标准化验收体系，确保最终上线'
                    },
                    {
                        img:'./static/img/home/persent.png',
                        title:'高质低价',
                        content:'秉承共享原则，我们以低门槛价格\n' +
                        '构建高优质服务，免除客户高额成本'
                    },
                    {
                        img:'./static/img/home/fast.png',
                        title:'极速响应',
                        content:'原生小程序架构\n' +
                        '运行快，上线快，更新快'
                    }
                ]
            }
        },
        methods: {
            four_part() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .four_part {
        width: 100%;
        height: 552px;
    }

    .mar1200 {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .four_container {
        width:100%;
        margin-top:94px;
        text-align:center;
    }
    .four_container>p:nth-child(1){
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: rgba(0,0,0,0.80);
    }
    .four_container>p:nth-child(2){
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: rgba(0,0,0,0.80);
        margin-top:16px;
    }
    .four_list{
        width:100%;
        height:230px;
        display:flex;
        justify-content: flex-start;
        align-content: center;
        text-align:center;
        margin-top:54px;
    }
    .four_list>li{
        width:234px;
        height:230px;
        margin-left:92px;

    }
    .four_list>li>img{
        width:140px;
        height:140px;
    }
    .title_style{
        margin-top:23px;
        margin-bottom:9px;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: rgba(0,0,0,0.80);

    }
    .content_style{
        margin-top:9px;
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0,0,0,0.70);
        text-align: center;
        line-height:20px;
    }

</style>