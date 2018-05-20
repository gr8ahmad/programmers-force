<template>
<div class="container">
   <div class="row">
   <div class="col-sm-12">
  <router-view></router-view>
   </div>
   </div>
</div>
</template>

<script>
//    import Project from './projects/Project.vue'
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to, from) {
                this.id = to.params.id;
            }
        },
        methods: {
            goHome() {
                this.$router.push('/');
            }
        },
//        components :{
//        Project
//    }
    }

</script>

<style scoped>

</style>
