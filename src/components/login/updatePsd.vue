<template>
    <div class="login_container">
        <div class="login_bg_box">
            <img src="../../../static/img/home/login_bg.png" alt="">
            <div class="login_content_box">
                <div class="mar1200">
                    <!--头部导航-->
                    <div class="login_head">
                        <a href="javascript:;">
                            <img title="中微信通"  src="../../../static/img/home/logo2.png" alt="">
                        </a>
                        <p class="login_info">
                            首页
                        </p>
                    </div>
                    <!--登陆内容-->
                    <div class="login_form_container">
                        <div class="l_login_box">
                            <img class="login_img" src="../../../static/img/home/zwxt_logo.png" alt="">
                            <div class="login_title_box">
                                <p class="login_left_info">忘记密码</p>
                                <div class="login_right_info" @click="toSignPage()">
                                    <span>注册</span>
                                    <img src="../../../static/img/home/point.png" alt="">
                                </div>
                            </div>
                            <div class="input_box">
                                    <div class="phone_name" >
                                        <input type="number" name="phone" v-model="phone" maxlength="11"
                                               placeholder="手机号" autocomplete="OFF">
                                        <div class="get_code_box">
                                            <p class="getCode">
                                                获取短信验证码
                                            </p>
                                        </div>
                                    </div>

                                <div class="err_msg" v-show="isShow1">
                                    <p>{{errorMsg}}</p>
                                </div>
                                <div class="code_name" >
                                    <input type="number" name="code_name" v-model="codeName"
                                           placeholder="短信验证码" maxlength="6" autocomplete="OFF">
                                </div>
                                <!--<div class="err_psd_msg" v-show="isShow2">-->
                                    <!--<p>{{psdMsg}}</p>-->
                                <!--</div>-->

                                <div class="pass_word" >
                                    <input type="password" name="password" v-model="passWord"
                                           placeholder="设置密码（不少于8位字符）" maxlength="12" autocomplete="OFF">
                                </div>
                                <div class="err_psd_msg" v-show="isShow2">
                                    <p>{{psdMsg}}</p>
                                </div>
                                <div class="submit_login" @click="toLogin()">
                                    确认修改
                                </div>

                            </div>
                            <div class="success_alert" v-show="isSuccess">
                                <div class="success_content">
                                    <img src="../../../static/img/home/correct.png" alt="">
                                    <p>修改密码成功</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!--底部-->
                    <div class="footer">
                        <p>
                            Copyright 2018 - 2020 北京中微信通网络科技有限公司 京ICP备15000419号-5<br/>
                        </p>
                        <p>地址：北京市昌平区天通中苑二区43号楼D座512</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                passWord:'',
                phone:'',
                codeName:'',
                errorMsg:'',  //*请输入用户名/用户名输入错误
                psdMsg:'',    //*请输入密码/密码输入错误
                isShow1:false,
                isShow2:false,
                className:'user_name',
                className2:'user_name',  ///user_name_border
                classPsd:'pass_word',         //pass_border_word
                classPsd2:'pass_word',
                isRember:false,
                isSuccess:false
            }
        },
        mounted() {
        },
        methods: {

            /*登陆*/
            toLogin(){
                this.isSuccess = true;
                /*验证用户名/手机号*/
                var reg =/^1(3|4|5|7|8)\d{9}$/;
                if(this.userName == ''){
                    this.isShow1 = true;
                    this.errorMsg = '*请输入用户名';
                    this.className = 'user_name user_name_border';
                    return;
                }else if(!(/^1[34578]\d{9}$/.test((this.uesrName)))){
                    console.log(this.userName,'-----------------');
                    this.isShow1 = false;
                    return;
                }else{
                    // console.log(this.userName,'-----------------')
                    // this.isShow1 = true;
                    // this.errorMsg = '*用户名输入错误';
                    // this.className = 'user_name user_name_border';
                    // this.userName = this.userName.slice(0,11);

                }
                //验证密码
                if(this.passWord == ''){
                    this.isShow2 = true;
                    this.psdMsg ='*请输入密码';
                    this.classPsd = 'pass_word pass_border_word';
                    return;
                }else if(this.passWord>11){

                }else{
                    this.isShow2 = false;
                }

            },

            /*记住密码*/
            toRember(){
                if(this.isRember == false){
                    this.isRember = true;
                }else{
                    this.isRember = false;
                }
            },
            /*忘记密码*/
            forgetPsd(){

            },
            //去注册页
            toSignPage(){
                this.$router.push('/Sign')
            }
        }
    }
</script>

<style lang="less" scoped>
    .login_container {
        width: 100%;
        height: 100%;
    }

    .mar1200 {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
    }

    .login_bg_box {
        width: 100%;
        height: 1080px;
        position: relative;
        overflow: hidden;
    }

    .login_bg_box > img {
        position: absolute;
        top: 0;
        left: 50%;
        width: 1920px;
        margin-left: -970px;
        z-index: 2;
        height: 1080px;
    }

    .login_content_box {
        width: 100%;
        position:absolute;
        top:0;
        left:0;
        z-index:33;
    }
    .login_head{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        margin-top:50px;
        margin-bottom:116px;

    }
    .login_head>a>img{
        width:155px;
        height:45px;
        cursor: pointer;
        position:absolute;
    }
    .login_info{
        width:100px;
        height:40px;
        font-family: PingFang-SC-Medium;
        font-size: 20px;
        color: #3398E9;
        text-align: center;
        line-height:40px;
        border: 1px solid #3398E9;
        border-radius: 2px;
        margin-left:30px;
        cursor: pointer;
    }
    .login_form_container{
        width:580px;
        margin:0 auto;
        text-align:center;
        background: #FFFFFF;
        border: 1px solid rgba(58,116,221,0.20);
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.20);
        border-radius: 20px;
        position:relative;
        height:600px;
    }
    .login_img{
        width:297px;
        height:94px;
        position:absolute;
        z-index:999;
        left:50%;
        top:-46px;
        transform:translateX(-50%);

    }
    .footer{
        width:100%;
        margin-top:184px;
        text-align:center;
    }
    .footer>p{
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        color: rgba(0,0,0,0.80);
        letter-spacing: 0;
    }
    .footer>p:nth-child(2){
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        color: rgba(0,0,0,0.80);
        letter-spacing: 0;
        margin-top:14px;
    }
    .l_login_box{
        position:relative;

        /*margin:45px 93px 93px 93px;*/
    }
    .login_title_box{
        width:100%;
        display:flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: nowrap;
        padding-top:94px;
    }

    .login_left_info{
        font-family: PingFang-SC-Bold;
        font-size: 24px;
        color: #3398E9;
        width:50%;
    }
    .login_right_info{
        width:50%;
    }
    .login_right_info>span{
        font-family: PingFang-SC-Bold;
        font-size: 24px;
        color: rgba(0,0,0,0.50);
    }
    .login_right_info>img{
        width:11.7px;
        height:20px;
    }

    .input_box{
        width:392px;
        height:46px;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin:0 auto;
        padding-top:50px;
        position:relative;
    }

    .phone_name{
        width:392px;
        height:46px;
        background: rgba(51,152,233,0.05);
        border: 1px solid rgba(51,152,233,0.80);
        border-radius: 8px;
        color:#000;
    }
    .phone_name_border{
        background: rgba(203,83,104,0.05);
        border: 1px solid rgba(203,83,104,0.80);
        border-radius: 8px;
        color: rgba(203,83,104,0.80);
    }
    .code_name{
        width:392px;
        height:46px;
        background: rgba(51,152,233,0.05);
        border: 1px solid rgba(51,152,233,0.80);
        border-radius: 8px;
        color:#000;
        margin-top:40px;
    }

    .phone_name>input,.code_name>input,.pass_word>input{
        width:390px;
        padding-left:20px;
        margin:0 auto;
        line-height:40px;
        border: 0;  // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        background-color: rgba(0, 0, 0, 0);// 透明背景
    }

    /*改变input placeholder的字体颜色*/
    .pass_word{
        margin-top:40px;
        width:392px;
        height:46px;
        background: rgba(51,152,233,0.05);
        border: 1px solid rgba(51,152,233,0.80);
        border-radius: 8px;
    }

    .pass_border_word{
        background: rgba(203,83,104,0.05);
        border: 1px solid rgba(203,83,104,0.80);
        border-radius: 8px;
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: rgba(203,83,104,0.80);
    }

    .submit_login{
        margin-top:57px;
        width:100%;
        line-height:46px;
        background: #3398E9;
        box-shadow: 0 2px 8px 2px rgba(51,152,233,0.20);
        border-radius: 8px;
        color:#fff;
        cursor: pointer;
    }
    /*错误提示*/
    .err_msg{
        text-align: left;
        width:100%;
        position:absolute;
        left:94px;
        top:225px;
    }
    .err_msg>p{
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        color: rgba(203,83,104,0.80);
        text-align:left;
    }
    .err_psd_msg{
        text-align: left;
        width:100%;
        position:absolute;
        left:94px;
        top:310px;
    }
    .err_psd_msg>p{
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        color: rgba(203,83,104,0.80);
        text-align:left;
    }

    /*获取验证码*/
    .get_code_box{
        position:absolute;
        right:0;
        top:50px;
        background: #3398E9;
        width:140px;
        height:47px;
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        line-height:46px;
        text-align:center;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
    }

    .success_alert{
        width:580px;
        height:600px;
        position:absolute;
        top:0;
        left:0;
        background: rgba(255,255,255,0.80);
        border: 1px solid rgba(58,116,221,0.20);
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.20);
        border-radius: 20px;
    }
    .success_content{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:99;
    }
    .success_content>img{
        width:80px;
        height:71.1px;
    }
    .success_content>p{
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: #CB5368;
        margin-top:50.9px;
    }

</style>