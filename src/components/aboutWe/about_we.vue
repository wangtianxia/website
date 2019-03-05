<template>
    <div class="about_we_page">
        <div class="mar1200">
            <ul class="about_list">
                <li :class="[changeIndex == index ?className : className2]" v-for="(item,index) in aboutList" :key="index" @click="onClick(index)">
                    <p :class="[changeIndex == 0 ? classPname : classPname2]">{{item.title}}</p>
                </li>
            </ul>
            <p class="line"></p>
            <ComponentAbout  :changeIndex="changeIndex" v-if="showCom"/>
        </div>
    </div>
</template>

<script>
    import ComponentAbout from '../../components/aboutWe/about_component'

    export default {
        name: "about_two",
        data() {
            return {
                aboutList:[
                    {
                        title:'关于我们',
                        img:'./static/img/home/banner_sell_3.png'
                    },
                    {
                        title:'业务范围',
                        img:'./static/img/home/banner_sell_1.png'

                    },
                    {
                        title:'解决方案',
                        img:'./static/img/home/banner_sell_2.png'
                    },
                    {
                        title:'企业文化',
                        img:'./static/img/home/banner_sell_4.png'
                    }
                ],
                changeIndex:0,
                showCom:true,
                className:'nav_list_li',
                className2:'nav_list_li',
                classPname:'class_p_style',
                classPname2:'class_p_style'
            }
        },
        mounted() {
            if(this.changeIndex == 0){
                this.classPname = 'class_p_style class_phover_style'
                this.className = 'nav_list_li nav_hover_li';
            }

        },
        methods: {
            onClick(index){
                this.changeIndex = index;
                this.className = 'nav_list_li nav_hover_li';
            }
        },
        components:{
            ComponentAbout
        }
    }
</script>

<style lang="less" scoped>
    .about_we_page {
        width: 100%;
    }
    .mar1200 {
        width: 1200px;
        height: 100%;
        margin: 0 auto;;
    }
    .about_list{
          width:100%;
          display:flex;
          justify-content: flex-start;
          align-items: center;
          padding-top:94px;
      }
    .nav_list_li{
        width:134px;
        height:48px;
        border: 1px solid rgba(0,0,0,0.60);
        box-sizing: border-box;
        border-radius: 4px;
        line-height:48px;
        text-align:center;
        margin-right:20px;
        cursor: pointer;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: rgba(0,0,0,0.60);
    }
    .nav_hover_li{
        border: 1px solid #3A74DD;
        box-sizing: border-box;
        border-radius: 4px;
        width:134px;
        height:48px;
        line-height:48px;
        text-align:center;
        margin-right:20px;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: #3A74DD;
    }

    .class_p_style{

    }
    .class_phover_style{

    }

    .line{
        width:1200px;
        border: 1px solid rgba(0,0,0,0.10);
        margin-top:20px;
    }
</style>