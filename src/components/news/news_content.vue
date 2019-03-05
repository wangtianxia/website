<template>
    <div class="news_pages">
        <div class="mar1200">
            <div class="news_content">
                <p>{{news_title}}</p>
                <p>发布时间：{{news_time}}</p>
                <div class="detail_content">
                    <p class="detail_title">{{title_1}}</p>
                    <p class="detail_content">{{content_1}}</p>
                    <p class="detail_title">{{title_2}}</p>
                    <p class="detail_content">{{content_2}}</p>
                    <div class="detail_img">
                        <img :src="detail_img" alt="">
                    </div>
                    <p class="detail_title">{{title_3}}</p>
                    <p class="detail_content">{{content_3}}</p>
                    <!--分割线-->
                    <p class="line"></p>
                    <!--分页-->
                    <div class="navgetor_box">
                        <p @click="toPrev">上一篇： {{title_prev}}</p>
                        <p @click="toNext()">下一篇： {{title_next}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news_detail_content",
        data() {
            return {
                news_time:'2018-11-09 00:00:00',
                news_title:'马化腾回应“腾讯没有梦想”；特斯拉迎来首位女性董事长；滴滴试行加密录像',
                title_1:'马化腾回应“腾讯没有梦想”：数据打通需要谨慎对待，不能随便打通',
                content_1:'36氪获悉，在第五届世界互联网大会期间，马化腾表示：大家知道最近腾讯股价受压，很多文章说腾讯没有梦想，不会搞算法，数据没打通。我们讨论后决定技术中台可以打通，但数据中台要特别谨慎。腾讯不',
                title_2:'特斯拉董事会提名Robyn Denholm出任董事长，马斯克Twitter发文欢迎',
                content_2:'特斯拉董事会提名Robyn,特斯拉董事会提名Robyn,特斯拉董事会提名Robyn,特斯拉董事会提名Robyn,特斯拉董事会提名Robyn,特斯拉董事会提名Robyn,特斯拉董事会提名Robyn,特斯拉董事会提名Robyn,特斯拉董事会提名Robyn,特斯拉董事会提名Robyn,特斯拉董事obyn',
                detail_img:'./static/img/home/banner_sell_6.png',
                title_3:'路透：40亿美元融资完成后，饿了么和口碑合并估值达300亿美元',
                content_3:'据路透报道，在新近一轮40亿美元融资完成后，饿了么和口碑合并后的估值达到了300亿美元。消息人士称，二者合并后已吸引了来自阿里巴巴本身和软银愿景基金超过30亿的新资金，此前已投资了口碑的春华',
                title_prev:'中微信通“智慧银行”2.0版本更新上线，探索银行服务创新体验',
                title_next:'罗永浩：不会放弃手机业务；恒大贾跃亭再战公堂；QQ正式推出小程序功能'
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .news_pages {
        width: 100%;
    }
    .mar1200 {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
    }
    .news_content{
        width:100%;
        margin-top:94px;
        text-align:center;
        margin-bottom:94px;
    }
    .news_content>p:nth-child(1){
        font-family: PingFang-SC-Bold;
        font-size: 18px;
        color: rgba(0,0,0,0.80);
    }
    .news_content>p:nth-child(2){
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0,0,0,0.60);
        text-align:right;
        margin-top:16px;
    }
    .detail_content{
        margin-top:16px;
        width:100%;
        text-align:left;
    }
    .detail_title{
        font-family: PingFang-SC-Bold;
        font-size: 13px;
        color: rgba(0,0,0,0.80);
        line-height: 18px;
        font-weight:bold;
        margin:13px auto;
    }
    .detail_content{
        font-size: 13px;
        line-height: 18px;
        margin-top:18px;
        font-family: PingFang-SC-Medium;
        color: rgba(0,0,0,0.60);
    }
    .detail_img{
        width:498px;
        height:332px;
        margin:0 auto;
        margin-top:16px;
    }
    .detail_img>img{
        max-width:498px;
        height:100%;
        vertical-align:middle;
        display:inline-block;
    }
    .line{
        width:100%;
        border: 1px solid rgba(0,0,0,0.20);
        margin:20px auto;
    }
    .navgetor_box>p{
        font-family: PingFang-SC-Bold;
        font-size: 13px;
        color: rgba(0,0,0,0.80);
        font-weight:bold;
        cursor: pointer;
    }
    .navgetor_box>p:nth-child(2){
        margin-top:20px;
    }


</style>