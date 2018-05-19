<template>
           <div class="home">
            <div class="banner">
            <h1>We Think in New Dimensions </h1>
        </div>
        <VueParticles />
</div>
</template>

<script>
    import VueParticles from './VueParticles.vue';
    export default {
        data() {
            return {

            }
        },
        components: {
            VueParticles
        }
    }

</script>


<style scoped>
    html,
    body {
        /*        height: 100%;*/
        /*        background: url(assets/brickwall.png);*/
    }

    .home {
        background: #0e415b;
    }

    .banner h1 {
        font-family: Teko, sans-serif;
    }

    .banner {
        position: absolute;
        left: 50%;
        top: 300px;
        color: #fff;
        margin-left: -323px;
    }

    .banner h1 {
        font-size: 60px;
    }

</style>
