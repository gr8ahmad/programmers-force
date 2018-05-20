<template>
  <div id="app" v-bind:class="$route.path === '/' ? 'home' : 'non-home'">
        <Header/>
       <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import { Projects } from './components/portfolio/Projects'

export default {
  name: 'app',
  components: {
    Header
  },
    created() {
    this.$http.get('https://programmers-force.firebaseio.com/pfProject.json')
            .then(response=> {
                return response.json();
            }).
            then(data=> {
                Projects.projects.push(data);
                console.log(Projects.projects)
            })

    }
}
</script>

<style>
            body {
            font-family: 'Quicksand', sans-serif !important;
        }
    #app.home {
        background: #0e415b;
        background: url(./assets/intro.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom right;
    }
    div#app.non-home header {
    margin-bottom: 60px;
}

</style>
