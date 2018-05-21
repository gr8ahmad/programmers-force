<template>
  <div id="app" v-bind:class="$route.path === '/' ? 'home' : 'non-home'">
        <Header/>
       <router-view></router-view>
  </div>
</template>

<script>
    import Header from './components/home/Header.vue'

    export default {
        name: 'app',
        components: {
            Header
        },
        created() {
            console.log(this.$store.getters.getUser)
        }
    }

</script>

<style>
    body {
        font-family: 'Quicksand', sans-serif !important;
    }

    div#app.non-home header {
        margin-bottom: 60px;
    }

    #app .btn-primary {
        background-color: #00a558;
        border-color: #00a558;
    }
    li {
        color: #000;
    }

</style>
