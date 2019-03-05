<template>
    <div class="bedRequest">
        <img :src="err_img" @click="goLogin" alt="">
    </div>
</template>

<script>
    export default {
        name: "404",
        data() {
            return {
                err_img:require('../assets/404.jpg')
            }
        },
        mounted() {
        },
        methods: {
            goLogin(){
                this.$router.push('/Login')
            }
        }
    }
</script>

<style lang="less" scoped>
.bedRequest{
    width: 100%;
    text-align: center;
}

</style>