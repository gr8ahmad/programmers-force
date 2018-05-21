<template>
<div>
   <b-container class="bv-example-row">
    <b-row>
        <b-col v-for="(project, index ) in pfProjects">
        <b-card :title="project.projectName"
          :img-src="project.projectImagePath"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">{{ project.projectDescription }}</p>
    <b-button variant="primary" :to="/portfolio/ + index">Visit Project</b-button>
  </b-card>
        </b-col>
    </b-row>
    
</b-container>
<div class="container">
<div class="row">
    <div class="col-sm-12 text-center">
        <b-button variant="primary" @click="fetchData" v-if="!loaded">Load More</b-button>
    </div>
</div>       
</div>
</div>
</template>
<script>
    export default {
        data() {
            return {
                pfProjects: [],
                loaded: false

            }
        },
        methods: {
            fetchData() {
            this.$http.get('https://programmers-force.firebaseio.com/pfProject.json')
                .then(response=> {
                return response.json()
            })
                .then(data=> {
                this.pfProjects.push(data);
                this.loaded = true;
            })
            }
        },
        created() {
            this.pfProjects = this.$store.getters.getProjects;
            
        }
    }

</script>

<style scoped>
    @media (min-width: 768px) {
        .col {
        min-width: 33.33%;
        margin-bottom: 30px;
    }
    }
</style>
