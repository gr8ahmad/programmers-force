<template>
<div>
<vue-particles
        :color="ptData.pColor"
        :particleOpacity="0.7"
        :particlesNumber="80"
        :shapeType="ptData.pShape"
        :particleSize="4"
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
<ul>
    <li>{{ptData.pShape}} - {{ptData.pColor }}</li>
</ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            ptData: {
            pShape: 'circle',
//            pColor: '#00a558',
            pColor: '#fff'
            }
        }
    },
    created: function() {
        this.$http.get('https://programmers-force.firebaseio.com/pData.json')
        .then(response=> {
            return response.json();
        })
        .then(data=> {
            setTimeout(()=>{
                this.ptData = data;
            },3000)
        },error=> {
            console.log(error)
        })
        
    }
}
</script>

<style>
    
    canvas.particles-js-canvas-el {
        min-height: 100vh;
        margin-top: -90px;
    }
    li {
        color: #fff;
    }
</style>