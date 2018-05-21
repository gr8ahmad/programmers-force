<template><div>
    <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    
        <h1 class="text-center">Our Portfolio</h1>
 <b-carousel id="carousel1"
                controls
                :interval="4000"
    >     
     <div class="slide-wrapper" v-for="(project, index) in pfProjects" @click="toProject(index)">
          <b-carousel-slide :img-src="project.projectImagePath">
      </b-carousel-slide>
     </div>
    </b-carousel>
                </div>
            </div>
        </div>
</div></template>

<script>
    export default {
        data() {
            return {
            pfProjects: []
            }
        },
        methods: {
            toProject(index) {
                this.$router.push('/portfolio/' + index)
            }  
        },
        created() {
            this.pfProjects = this.$store.getters.getProjects;
        }
    }

</script>
<style>
    .slide-wrapper {
        cursor: pointer;
    }
</style>