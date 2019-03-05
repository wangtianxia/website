<template>
    <div class="about_box">
        <div class="about_we_content" v-if="changeIndex == 0" >  <!---->
            <img src="../../../static/img/home/banner_2_2.png" alt="">
            <div class="content_box" :class="[changeIndex == 0 ? className : className2]">
                <P>
                    北京中微信通网络科技有限公司，是一家以互联网技术解决方案为核心，标准化管理、快速发展的高新技术企业，
                    在互联网领域拥有资深的专业经验；拥有众多技术专家的战斗团队。中微信通依靠互联网核心技术沉淀，
                    为企业提供“互联网+”战略设计，基于微信为企业提供开发、运营、培训、推广一体化解决案提供线上线下数据互通，
                    社会化客户关系管理，移动电商，创新型智能硬件、共享经济产品，小程序开发等行业解决方案，以微信开发为核心，
                    以腾讯云人工智能AI、大数据、LBS为技术服务支撑，为各行业打造全面智能的解决方案，从而让企业“互联网+能够更加创新与智慧”。<br/>
                    实力资质：腾讯开放平台、腾讯云认证服务商、微信支付服务商、微信开发平台认证服务商、腾讯课堂入驻机构。
                </P>
            </div>
            <p class="contact_we">联系我们</p>
        </div>

        <div class="about_we_content" v-if="changeIndex == 1" >  <!--v-if="tempIndex == index"-->
            <img src="../../../static/img/home/banner_2_1.png" alt="">
            <div class="content_box" :class="[changeIndex == 1 ? className : className2]">
                <P>
                    一、微信开发、应用开发、小程序开发。<br/>
                    二、传统行业“互联网+”战略解决方案。<br/>
                    三、微信运营教育培训、企业互联网+系统升级培训。<br/>
                    四、微信支付、移动支付、会员系统解决方案。<br/>
                    五、腾讯云系统部署运维服务。
                </P>
            </div>
            <p class="contact_we">联系我们</p>
        </div>
        <div class="about_we_content" v-if="changeIndex == 2" >  <!--v-if="tempIndex == index"-->
            <img src="../../../static/img/home/banner_2_3.png" alt="">
            <div class="content_box" :class="[changeIndex == 2 ? className : className2]">
                <P>
                    行业解决方案： 智慧车险、智慧校园、智慧便利店、智慧药店、智慧加油站、智慧美业、智慧机场、智慧社区、智慧公益、电视互动、智慧客运、智慧KTV、智慧快递、智慧售货机、智慧百货、智慧餐厅、智慧票务、智慧酒店、智慧景区、智慧医院、智慧停车场、B2C电商、智慧约车、智慧共享、智慧教育、智慧直播、智慧房产、智慧家政、智慧城市、智慧精准扶贫等一体化解决方案。
                    核心优势：敏锐的行业前瞻性 先人一步，独特的市场敏锐和技术前瞻性，为企业梳理商业模式，规划战略转型升级；制定最佳的行业解决方案。 厚实的研发实力 从业互联网一线营销10余年，拥有专业技术专家30余人的战斗铁团，厚积薄发、精品服务。 强大的平台技术支撑 拥有专业的中微云系统，及全国性的技术加盟机构，强大技术支撑体系； 全方位的体验服务 客户至上，匠心精神、极致体验，为客户提供真正有价值的产品服务；

                </P>
            </div>
            <p class="contact_we">联系我们</p>
        </div>
        <div class="about_we_content" v-if="changeIndex == 3" >  <!--v-if="tempIndex == index"-->
            <img src="../../../static/img/home/banner_2_4.png" alt="">
            <div class="content_box" :class="[changeIndex == 3 ? className : className2]">
                <P>
                    企业文化：自强不息、与时俱进、创造价值、服务社会。<br/>
                    我们的服务理念：为客户能提供真正有价值的服务。<br/>
                    我们的企业目标：打造中国最具知名的移动互联网技术服务品牌。<br/>
                    我们的企业愿景：科技驱动创新、让企业更智慧
                </P>
            </div>
            <p class="contact_we">联系我们</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about_component",
        data() {
            return {
                className:'content_box',
                className1:'content_box',
            }
        },
        props: ['changeIndex'],

        mounted() {
            if(this.changeIndex == 0){
                this.className = 'content_box content_hover_box'
            }

        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    .about_box {
        width: 100%;
        height: 100%;
    }
    .about_we_content {
        position: relative;
        width: 1200px;
        height: 260px;
        margin-top: 50px;
    }

    .about_we_content > img {
        position: absolute;
        top: 30px;
        left: 0;
        z-index: 99;
        width: 200px;
        height: 199px;
    }

    .content_box {
        width:1000px;
        height: 260px;
        position: absolute;
        top: 0;
        left: 100px;
        background: #FFFFFF;
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.10);
        border-radius: 8px;
        z-index: 0;
    }

    .content_hover_box{
        width:1000px;
        height: 260px;
        position: absolute;
        top: 0;
        left: 100px;
        background: #FFFFFF;
        border-radius: 8px;
        z-index: 0;
        border: 1px solid rgba(58,116,221,0.10);
        box-shadow: 0 0 8px 2px rgba(58,116,221,0.10);
    }
    .content_hover_box>p{
        line-height: 22px;
        padding: 30px 130px 130px 130px;
        text-align: left;
        height: 180px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.80);
        font-family: PingFang-SC-Medium;
        color: #3A74DD;
    }

    .content_box > p {
        line-height: 22px;
        padding: 30px 130px 130px 130px;
        text-align: left;
        height: 180px;
        font-family: PingFang-SC-Medium;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.80);
    }
    .contact_we{
        position:absolute;
        bottom:30px;
        right:0;
        width:199px;
        height:50px;
        line-height:50px;
        text-align:center;
        background: #FFFFFF;
        box-shadow: 0 0 8px 2px rgba(0,0,0,0.10);
        border-radius: 25px;
        font-family: PingFang-SC-Bold;
        font-size: 20px;
        color: rgba(0,0,0,0.60);
        cursor: pointer;
    }


</style>