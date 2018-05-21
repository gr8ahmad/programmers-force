<template>
           <div class="home">
            <div class="banner">
            <div>
            <h1>We Think in New Dimensions </h1>
            <p>Programmers Force aims to solve the biggest challenges in FinTech, Web and Application Software</p>
            <p>Development. Our end-to-end expertise ensures scalable solutions and digital innovation. </p>
            </div>
        </div>
        <div class="vue-particles">    
        <VueParticles />
        </div>
</div>
</template>

<script>
    import VueParticles from '../vue-particles/VueParticles.vue';
    export default {
        data() {
            return {
            }
        },
        components: {
            VueParticles
        },
    }

</script>


<style scoped>
    .banner h1 {
        font-family: 'Quicksand', sans-serif;
        font-size: 4vw;
        font-weight: 900;
        text-transform: uppercase;
        text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.76);
        margin-bottom: 30px;
    }

    .banner {
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .banner p {
    font-size: 1.5vw;
    margin-bottom: 10px;
    font-weight: 500;
    text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.76);
}
    div#carousel1 {
    max-width: 800px;
    margin: auto;
}
    #app.home .vue-particles  {
        min-height: 100vh;
        margin-top: -84px;
    }
    #app.home .vue-particles  {
        background: #0e415b;
        background: url(../../assets/intro.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom right;
    }

</style>
