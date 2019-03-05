<template>
    <div class="login_container">
        <div class="login_bg_box">
            <img src="../../static/img/home/login_bg.png" alt="">
            <div class="login_content_box">
                <div class="mar1200">
                    <!--头部导航-->
                    <div class="login_head">
                        <a href="javascript:;">
                            <img title="中微信通"  src="../../static/img/home/logo2.png" alt="">
                        </a>
                        <p class="login_info" @click="return_home()">
                            首页
                        </p>
                    </div>
                    <!--登陆内容-->
                    <div class="login_form_container">
                        <img class="login_img" src="../../static/img/home/zwxt_logo.png" alt="">
                        <div class="l_login_box">
                            <div class="login_title_box">
                                <p class="login_left_info">登陆</p>
                                <div class="login_right_info" @click="toSignPage()">
                                    <span>注册</span>
                                    <img src="../../static/img/home/point.png" alt="">
                                </div>
                            </div>
                            <div class="input_box">
                                <div class="user_name" :class="[isShow1 == 1 ? className : className2]">
                                    <input type="number" name="username" v-model="username" maxlength="24"
                                           placeholder="用户名/手机" autocomplete="OFF"
                                           ref="useName" @input="toLogin">
                                </div>
                                <div class="err_msg" v-show="isShow1">
                                    <p>{{errorMsg}}</p>
                                </div>
                                <div class="pass_word" :class="[isShow2 == 1 ? classPsd : classPsd2]">
                                    <input type="password" name="password" v-model="password"
                                           placeholder="登陆密码" maxlength="12" autocomplete="OFF" @input="toLogin">
                                </div>
                                <div class="err_psd_msg" v-show="isShow2">
                                    <p>{{psdMsg}}</p>
                                </div>
                                <div class="rember_container">
                                    <div class="rember_left_box">
                                        <div class="rember_box" @click="toRember()">
                                            <img v-if="isRember" src="../../static/img/home/rember.png" alt="">
                                        </div>
                                        <p  @click="toRember()">记住密码</p>
                                    </div>
                                    <p @click="forgetPsd()" class="forget_psd">忘记密码？</p>
                                </div>
                                <div class="submit_login" @click ="toLogin()">  <!--prevent-->
                                    登陆
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
    import {setCookie,getCookie} from '../config/cookie'
    export default {
        name: "login",
        data() {
            return {
                username:'',
                password:'',
                errorMsg:'',  //*请输入用户名/用户名输入错误
                psdMsg:'',    //*请输入密码/密码输入错误
                isShow1:false,
                isShow2:false,
                className:'user_name',
                className2:'user_name',  ///user_name_border
                classPsd:'pass_word',         //pass_border_word
                classPsd2:'pass_word',
                isRember:false
            }
        },
        mounted() {
            if(setCookie('username')){
                this.username = setCookie('username')
            }

            if(getCookie('password')){
                this.password = getCookie('password');
            }
        },
        methods: {
            /*登陆*/
            toLogin(){

                /*验证用户名/手机号*/
                if(this.username == ''){
                    this.isShow1 = true;
                    this.errorMsg = '*请输入用户名';
                    this.className = 'user_name user_name_border';
                    this.$refs['useName'].style.color='red';
                    return false;
                }else if(this.username.length != 11){
                    this.isShow1 = true;
                    this.errorMsg = '*请输入正确的用户名';
                    this.className = 'user_name user_name_border';
                    this.$refs['useName'].style.color='red';       //
                    return false;
                }else if(this.username.length == 11 && (/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(this.username)){
                    //因为现在新增了166、198、199号段的手机号，所以正则表达式也要作相应改进：
                    this.isShow1 = false;
                    this.$refs['useName'].style.color='black';
                }

                //验证密码
                if(this.password == ''){
                    this.isShow2 = true;
                    this.psdMsg ='*请输入密码';
                    this.classPsd = 'pass_word pass_border_word';
                    return;
                }else if(this.password.length<3){
                    this.isShow2 = true;
                    this.psdMsg ='*密码不少于6位';
                    this.classPsd = 'pass_word pass_border_word';
                }else{
                    this.isShow2 = false;
                }

            },


            /*记住密码*/
            toRember(){
                if(this.isRember == false){
                    this.isRember = true;
                    setCookie('username', this.username, 1113600);
                    setCookie('password', this.password, 1113600);
                }else{
                    this.isRember = false;
                }
            },
            /*忘记密码*/
            forgetPsd(){
                this.$router.push('/UpdatePsd')
            },
            //去注册页
            toSignPage(){
                this.$router.push('/Sign')
            },
            //返回首页
            return_home(){
                this.$router.replace('/')
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
        margin-top:-47px;
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
        /*margin:45px 93px 93px 93px;*/
    }
    .login_title_box{
        margin-top:45px;
        width:100%;
        display:flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: nowrap;
    }

    .login_left_info{
        font-family: PingFang-SC-Bold;
        font-size: 24px;
        color: #3398E9;
        width:50%;
    }
    .login_right_info{
        width:50%;
        cursor: pointer;
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
    }

    .user_name{
        width:392px;
        height:46px;
        background: rgba(51,152,233,0.05);
        border: 1px solid rgba(51,152,233,0.80);
        border-radius: 8px;
        color:#000;
    }
    .user_name_border{
        background: rgba(203,83,104,0.05);
        border: 1px solid rgba(203,83,104,0.80);
        border-radius: 8px;
        /*color: rgba(203,83,104,0.80);*/
    }

    .user_name>input,.pass_word>input{
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
        color:#000;
    }

    .rember_container{
        width:100%;
        margin-top:40px;
        text-align: left;
        display:flex;
        justify-content: space-between;
        align-items: flex-start;
        line-height:20px;
    }

    .rember_box{
        width:20px;
        height:20px;
        background: rgba(51,152,233,0.05);
        border: 1px solid rgba(51,152,233,0.80);
        border-radius: 2px;
        text-align:center;
        line-height:20px;
    }
    .rember_box>img{
        width:16px;
        max-height:13.8px
    }
    .rember_left_box{
        display:flex;
        justify-content: flex-start;
        align-items: flex-start;
        height:20px;
    }
    .rember_left_box>p{
        margin-left:13px;
        line-height:20px;
        cursor: pointer;
    }
    .forget_psd{
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: #3398E9;
        line-height:20px;
        cursor: pointer;
    }
    .submit_login{
        margin-top:94px;
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

</style>