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
</div>
</template>
<script>
import { Projects }  from '../Projects';
    export default {
        data() {
            return {
                pfProjects: []

            }
        },
        created() {
            this.pfProjects = Projects.getProjects();
            
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
