<template>
    <div class="news_pages">
        <div class="mar1200">
            <div class="news_content">
                <ul class="new_list">
                    <li  :class="[tempIndex == index ? className:className2]" v-for="(item,index) in newList"
                         :key="index" @click="changeClick(index)">
                        <p>{{item.title}}</p>
                    </li>
                </ul>
                <!--分界线-->
                <p class="line"></p>
                <ul class="news_two_list">
                    <li v-for="(item,index) in newsData" :key="index" 
                        @mouseover="newsMouseOver(index)" @mouseLeave="newsMouseLeave(index)">
                        <div class="news_b_box">
                            <img :src="item.img" alt="">
                            <p>{{item.title}}</p>
                        </div>
                        <!--悬浮的效果-->
                        <div class="hover_list_box" v-if="changeIndex == index" @click="toDetail(index)">
                            <p>{{item.content}}</p>
                            <p>查看更多</p>
                        </div>
                    </li>
                </ul>
                <!--分页-->
                <div class="pagination_box">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="50">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news_two",
        data() {
            return {
                newList:[
                    {
                        title:'全部动态'
                    },
                    {
                        title:'中微信通'
                    },
                    {
                        title:'运营知识'
                    },
                    {
                        title:'行业资讯'
                    }
                ],
                newsData:[
                    {
                        img:"./static/img/home/case_2.png",
                        title:'在全球合作伙伴大会现场，他们这样畅想未来,我的未来',
                        content:'36氪获悉，在第五届世界互联网大会期间，马化腾表示：大家知道最近腾讯股价受压，很多文章说腾讯没有梦想，不会搞算法，数据没打通。我们讨论后决定技术中台可以打通，但数据中台要特别谨慎。们也有更多义务和责任。…'
                    },
                    {
                        img:"./static/img/home/case_2.png",
                        title:'在全球合作伙伴大会现场，他们这样畅想未来',
                        content:'36氪获悉，在第五届世界互联网大会期间，马化腾表示：大家知道最近腾讯股价受压，很多文章说腾讯没有梦想，不会搞算法，数据没打通。我们讨论后决定技术中台可以打通，但数据中台要特别谨慎。们也有更多义务和责任。…'
                    },
                    {
                        img:"./static/img/home/case_2.png",
                        title:'罗永浩：不会放弃手机业务；恒大贾跃亭再',
                        content:'36氪获悉，在第五届世界互联网大会期间，马化腾表示：大家知道最近腾讯股价受压，很多文章说腾讯没有梦想，不会搞算法，数据没打通。我们讨论后决定技术中台可以打通，但数据中台要特别谨慎。们也有更多义务和责任。…'
                    },
                    {
                        img:"./static/img/home/case_2.png",
                        title:'马化腾回应“腾讯没有梦想”；特斯拉迎来首',
                        content:'36氪获悉，在第五届世界互联网大会期间，马化腾表示：大家知道最近腾讯股价受压，很多文章说腾讯没有梦想，不会搞算法，数据没打通。我们讨论后决定技术中台可以打通，但数据中台要特别谨慎。们也有更多义务和责任。…'
                    },
                    {
                        img:"./static/img/home/case_2.png",
                        title:'在全球合作伙伴大会现场，他们这样畅想未来',
                        content:'36氪获悉，在第五届世界互联网大会期间，马化腾表示：大家知道最近腾讯股价受压，很多文章说腾讯没有梦想，不会搞算法，数据没打通。我们讨论后决定技术中台可以打通，但数据中台要特别谨慎。们也有更多义务和责任。…'
                    },
                    {
                        img:"./static/img/home/case_2.png",
                        title:'马化腾公开信：助力实体产业成长出更多世',
                        content:'36氪获悉，在第五届世界互联网大会期间，马化腾表示：大家知道最近腾讯股价受压，很多文章说腾讯没有梦想，不会搞算法，数据没打通。我们讨论后决定技术中台可以打通，但数据中台要特别谨慎。们也有更多义务和责任。…'
                    },
                    {
                        img:"./static/img/home/case_2.png",
                        title:'罗永浩：不会放弃手机业务；恒大贾跃亭再',
                        content:'36氪获悉，在第五届世界互联网大会期间，马化腾表示：大家知道最近腾讯股价受压，很多文章说腾讯没有梦想，不会搞算法，数据没打通。我们讨论后决定技术中台可以打通，但数据中台要特别谨慎。们也有更多义务和责任。…'
                    },
                    {
                        img:"./static/img/home/case_2.png",
                        title:'马化腾回应“腾讯没有梦想”；特斯拉迎来首',
                        content:'36氪获悉，在第五届世界互联网大会期间，马化腾表示：大家知道最近腾讯股价受压，很多文章说腾讯没有梦想，不会搞算法，数据没打通。我们讨论后决定技术中台可以打通，但数据中台要特别谨慎。们也有更多义务和责任。…'
                    }
                ],
                tempIndex:0,
                className:'news_li',
                className2:'news_li',
                changeIndex:-1
            }
        },
        mounted() {
            this.tempIndex = 0;
            this.className = 'news_li news_hover_li'
        },
        methods: {
            changeClick(index){
                this.tempIndex = index;
                this.className = 'news_li news_hover_li'
            },
            newsMouseOver(index){
                this.changeIndex = index;
            },
            newsMouseLeave(index){
                this.changeIndex = -1;
            },
            /*查看详情*/
            toDetail(index){

            }

        }

    }
</script>

<style lang="less" scoped>
    .news_pages {
        width: 100%;
    }
    .mar1200{
        width:1200px;
        height:100%;
        margin:0 auto;
    }
    .news_content {
        margin-top:94px;
        margin-bottom:94px;
    }
    .new_list{
        width:100%;
        display:flex;
        justify-content: flex-start;
        align-content: center;
     }
    .news_li{
        width:134px;
        height:38px;
        border: 1px solid rgba(0,0,0,0.60);
        border-radius: 4px;
        line-height:38px;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: rgba(0,0,0,0.60);
        text-align:center;
        margin-right:20px;
        cursor: pointer;
    }
    .news_hover_li{
        border: 1px solid #3A74DD;
        border-radius: 4px;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: #3A74DD;
        cursor: pointer;
    }
    .line{
        width:100%;
        border: 1px solid rgba(0,0,0,0.10);
        margin:20px auto;
    }

    /*第二个列表*/
    .news_two_list{
        width:100%;
        display:flex;
        justify-content: space-between;
        align-content: flex-start;
        flex-wrap: wrap;
    }
    .news_two_list>li{
        width:285px;
        height:200px;
        position:relative;
        margin-bottom:20px;
        cursor: pointer;
    }
    .news_b_box{
        width:285px;
        height:200px;
        background: #FFFFFF;
        border: 1px solid rgba(58,116,221,0.15);
        border-radius: 4px;
        box-sizing: border-box;
        position:absolute;
        top:0;
        left:0;
        padding-right:20px;
        text-align:center;
    }
    .news_b_box>img{
        width:285px;
        height:160px;
    }
    .news_b_box>p{
        width:260px;
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0,0,0,0.80);
        text-align:center;
        padding:10px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        /*margin-top:11px;*/
    }
    /*悬浮效果*/
    .hover_list_box{
        width:285px;
        height:200px;
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        background: #FFFFFF;
        border: 1px solid rgba(58,116,221,0.15);
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.10);
        border-radius: 4px;
        text-align:center;

    }

    .hover_list_box>p:nth-child(1){
        width:243px;
        height:108px;
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0,0,0,0.80);
        text-align:left;
        line-height:18px;
        padding:26px 21px 18px 21px;
    }

    .hover_list_box>p:nth-child(2){
        width:97px;
        height:30px;
        font-size: 13px;
        color: rgba(58,116,221,0.80);
        font-family: PingFang-SC-Medium;
        background: #FFFFFF;
        border: 1px solid rgba(58,116,221,0.80);
        border-radius: 4px;
        line-height:30px;
        margin:0 auto;
    }


    .pagination_box{
        margin: auto;
        width:100%;
        text-align:center;
        margin-top:36px;
    }


</style>