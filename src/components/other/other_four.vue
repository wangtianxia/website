<template>
    <div class="other_container">
        <div class="mar1200">
            <div class="other_bg">
                <img src="../../../static/img/home/other_banner_bg.png" alt="">
                <div class="other_content_box">
                    <div class="info_contents">
                        <p>提交小程序需求</p>
                        <p>马上提交您的小程序需求，我们会在24小时内联系您，提供小程序产品策划服务！</p>
                        <div class="info_input_box">
                            <input type="text" placeholder="请输入姓名">
                            <input type="text" placeholder="请输入手机号">
                        </div>
                        <div class="email_box">
                            <input type="text" placeholder="请输入邮箱">
                            <textarea class="textarea_input"  placeholder="示例：我想定制一个电商小程序，有商城功能，谢谢！"></textarea>
                        </div>
                        <div class="submit_btn" @click="toSubmit()">
                            <p>提交需求</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "other_four",
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
            toSubmit(){
                alert('提交成功！')
            }
        }
    }
</script>

<style lang="less" scoped>
    .other_container {
        width: 100%;
        height:500px;
        margin-bottom:94px;
        margin-top:84px;
    }
    .other_bg{
        width:100%;
        position:relative;
        overflow: hidden;
        height:500px;
    }
    .other_bg>img{
        position:absolute;
        top:0;
        left:50%;
        margin-left:-960px;
        width: 1920px; //图片的真实宽度
        height: 500px; //图片的真实高度
        z-index:1;
    }

    .mar1200 {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
    }
    .other_content_box{
        width:664px;
        margin:0 auto;
        position:relative
    }
    .info_contents>p:nth-child(1){
        padding-top:43px;
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: #FFFFFF;
    }
    .info_contents>p:nth-child(2){
        font-family: PingFang-SC-Medium;
        font-size: 18px;
        color: #FFFFFF;
        margin-top:20px;
    }
    .info_contents{
        position:absolute;
        top:0;
        z-index:99;
        text-align:center;
        /*margin:0 auto;*/
        width:664px;
    }
    .info_input_box{
        width:100%;
        display:flex;
        flex-flow:  row nowrap;
        justify-content: space-between;
    }
    .info_input_box>input{
        margin-top:30px;
        width:320px;
        height:40px;
        background: rgba(255,255,255,0.15);
        border: 1px solid #FFFFFF;
        border-radius: 4px;
        color:#fff;
        display:inline-block;
        text-indent: 1em;
    }

    .email_box{
        width:664px;
        margin:0 auto;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: #FFFFFF;
    }
    .email_box>input:nth-child(1){
        width:664px;
        background: rgba(255,255,255,0.15);
        border: 1px solid #FFFFFF;
        border-radius: 4px;
        line-height:40px;
        margin-top:30px;
        color:#fff;
        text-indent: 1em;
    }

    .textarea_input{
        width:664px;
        height:111px;
        background: rgba(255,255,255,0.15);
        border: 1px solid #FFFFFF;
        border-radius: 4px;
        margin-top:30px;
        color:#fff;
        padding-top:9px;
        text-indent: 1em;
    }

    .submit_btn{
        width:100%;
        text-align:center;
        margin:0 auto;
        margin-top:30px;
        display:flex;
        justify-content: center;
        align-content: center;
    }
    .submit_btn>p{
        width:160px;
        height:40px;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 4px;
        line-height:40px;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: #3A74DD;
        cursor: pointer;
    }

</style>