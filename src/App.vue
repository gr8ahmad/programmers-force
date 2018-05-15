<template>
  <div id="app">
        <Header/>
        <HelloWorld/>
<vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="5"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
        <div class="banner">
            <h1>We Think in New Dimensions </h1>
        </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
    html,body {
/*        height: 100%;*/
/*        background: url(assets/brickwall.png);*/
    }
#app {
    background: #0e415b;
}
    .banner h1 {
        font-family: Teko,sans-serif;
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
    canvas.particles-js-canvas-el {
        min-height: 100vh;
        margin-top: -84px;
    }
</style>
