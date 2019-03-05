<template>
    <div class="other_box_container">
        <div class="other_content">
            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div class="nav_container" v-if="show1" @mouseleave="mouseleave(1)"> <!--@mouseleave="mouseleave(1)"-->
                    <div class="nav_box">
                        <div class="nav_left_box">
                            <p class="line_1_box">小程序定制</p>
                            <ul class="first_list">
                                <li v-for="(item,index) in navList" :key="index" @click="toListPage(index)">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="nav_center_box">
                            <p class="line_2_box">全行业小程序定制</p>
                            <div class="second_box">
                                <ul class="second_list">
                                    <li v-for="(item,index) in makeList_1" :key="index">
                                        <p>{{item.title}}</p>
                                    </li>
                                </ul>
                                <ul class="second_list">
                                    <li v-for="(item,index) in makeList_1" :key="index">
                                        <p>{{item.title}}</p>
                                    </li>
                                </ul>
                                <ul class="second_list">
                                    <li v-for="(item,index) in makeList_1" :key="index">
                                        <p>{{item.title}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="nav_right_box">
                            <p class="line_3_box">全行业小程序定制</p>
                            <div class="third_box">
                                <ul class="third_list">
                                    <li v-for="(item,index) in allMinit_1" :key="index">
                                        <p>{{item.title}}</p>
                                    </li>
                                </ul>
                                <ul class="third_list">
                                    <li v-for="(item,index) in allMinit_2" :key="index">
                                        <p>{{item.title}}</p>
                                    </li>
                                </ul>
                                <ul class="third_list">
                                    <li v-for="(item,index) in allMinit_3" :key="index">
                                        <p>{{item.title}}</p>
                                    </li>
                                </ul>
                                <ul class="third_list">
                                    <li v-for="(item,index) in allMinit_4" :key="index">
                                        <p>{{item.title}}</p>
                                    </li>
                                </ul>
                                <ul class="third_list">
                                    <li v-for="(item,index) in allMinit_5" :key="index">
                                        <p>{{item.title}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigator",
        data() {
            return {
                show1: false,
                navList: [
                    {title: '连锁门店'},
                    {title: '直播/音视频'},
                    {title: '电商小程序'},
                    {title: '餐饮小程序'},
                    {title: '新零售'},
                    {title: 'AI应用'}
                ],
                makeList_1: [
                    {title: '微门店'},
                    {title: '微企业'},
                    {title: '微酒店'},
                    {title: '微酒店'},
                    {title: '微应用'},
                    {title: '定制开发'}
                ],
                makeList_2: [
                    {title: '美容'},
                    {title: '酒店'},
                    {title: '家具'},
                    {title: '旅游'},
                    {title: '房地产'},
                    {title: '同城'},
                    {title: '汽车'}
                ],
                makeList_3: [
                    {title: '教育'},
                    {title: '医疗'},
                    {title: '保险'},
                    {title: '金融证券'},
                    {title: '企业办公'},
                    {title: '企业展示'},
                    {title: '生活服务'}
                ],
                allMinit_1: [
                    {title: '分销裂变'},
                    {title: '火爆拼团'},
                    {title: '整点秒杀'},
                    {title: '裂变红包'},
                    {title: '社交立减金'},
                    {title: '满减/包邮'},
                    {title: '智能派券'},
                ],
                allMinit_2: [
                    {title: '消息推送'},
                    {title: '营销短信'},
                    {title: '营销海报'},
                    {title: '会员储值'},
                    {title: '积分兑换'},
                    {title: '电商专题'},
                    {title: '微砍价'},
                ],
                allMinit_3: [
                    {title: '抽奖活动'},
                    {title: '分享集卡'},
                    {title: '投票'},
                    {title: '活动报名'},
                    {title: '微单页'},
                    {title: '万能表单'},
                    {title: '语音红包'},
                ],
                allMinit_4: [
                    {title: '小程序客服助手'},
                    {title: '电话本'},
                    {title: '群助手'},
                    {title: '微预约'},
                    {title: '小程序导航'},
                    {title: '微咨询'},
                    {title: '周边卡券'},
                ],
                allMinit_5: [
                    {title: '名片'},
                    {title: '海报'},
                    {title: '分身'}
                ],
            }
        },
        mounted() {
            this.show1 = true;
        },
        methods: {
            toListPage(index) {
                if (index == 0) {
                    this.$router.push('/Online');
                } else if (index == 1) {
                    this.$router.push('/Video');
                } else if (index == 2) {
                    this.$router.push('/MiniCash');
                } else if (index == 3) {
                    this.$router.push('/Food');
                } else if (index == 4) {
                    this.$router.push('/Sell');
                } else if (index == 5) {
                    this.$router.push('/Ai');
                }
            },
            mouseleave() {
                this.$emit('close')
            }

        }
    }
</script>

<style scoped>
    .other_box_container {
        width: 100%;
        position: absolute;
        top: 66px;
        z-index: 10000;
    }

    .other_content {
        width: 1200px;
        height: 279px;
        margin: 0 auto;
    }

    .nav_container {
        width: 962px;
        height: 279px;
        animation-duration: 0.2s;
        background-color: white;
        border-radius: 2px;
    }

    .nav_box {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
    }

    .line_1_box {
        width: 110px;
        margin-right: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        height: 23px;
    }

    .line_2_box {
        width: 295px;
        margin-right: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        height: 23px;
    }

    .line_3_box {
        width: 477px;
        height: 23px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    }

    .first_list {
        margin-top: 11px;
        height:200px;
    }
    .first_list > li {
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.70);
        line-height: 18px;
        cursor: pointer;
        margin-bottom:12px;
    }
    .second_box {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: nowrap;
    }
    .second_list {
        margin-top: 11px;
        height:200px;
    }
    .second_list > li {
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.70);
        line-height: 18px;
        cursor: pointer;
        margin-right: 40px;
        margin-bottom:12px;
    }
    .third_box{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: nowrap;
    }

    .third_list {
        margin-top: 11px;
        height:200px;

    }

    .third_list > li {
        font-family: PingFang-SC-Medium;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.70);
        line-height: 18px;
        cursor: pointer;
        margin-right: 40px;
        margin-bottom:12px;
    }


</style>