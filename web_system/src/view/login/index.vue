<template>
    <div class="banner">
        <div class="banner_left">
            <p class="benner_title_header">登录</p>
            <video src="@/assets/bg_mv.mp4" autoplay loop muted class="video">
            </video>
            <p class="benner_title">@dongtianpeng</p>
        </div>
        <div class="banner_right">
            <div>
                <h1>欢迎来到天鹏管理平台</h1>
                <div>
                    账号
                    <input type="text">
                </div>
                <div>
                    密码
                    <input type="text">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginVue'
}
</script>

<style scoped>
.banner {
    display: flex;
}

.banner_left {
    position: relative;
    overflow: hidden;
    flex: 2;
}

.video {
    width: 235%;
}

.benner_title_header {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #fff;
    font-family: '方正舒体', 'Courier New', Courier, monospace;
    font-size: 30px;
}

.benner_title {
    position: absolute;
    top: 700px;
    left: 20px;
    color: #fff;
}

.banner_right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 5;
}</style>