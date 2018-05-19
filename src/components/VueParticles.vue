<template>
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
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style>
    
    canvas.particles-js-canvas-el {
        min-height: 100vh;
        margin-top: -90px;
    }
</style>