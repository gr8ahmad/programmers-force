<template>
<div class="single">
   <div class="row">
   <div class="col-sm-12 col-md-8 offset-md-2">
    <img :src="pfProject.projectImagePath" alt="" style="width: 100%" class="featured-img">
    <h2 class="title">{{pfProject.projectName}}</h2>
    <p class="details">{{pfProject.projectDescription}}</p>
    <b-btn class="btn btn-primary" to="/portfolio">Back</b-btn>
   </div>
   </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                pfProject: {},
            }
        },
        created() {
            this.pfProject = this.$store.getters.getProjects[this.$route.params.id];
        }
    }

</script>

<style scoped>
    .single .featured-img {
        margin-bottom: 30px;
        border: 1px solid rgba(0, 0, 0, 0.125)
    }
    .single .title,
    .single .details{
        margin-bottom: 20px;
    }
</style>
