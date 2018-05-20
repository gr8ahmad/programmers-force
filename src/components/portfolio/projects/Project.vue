<template>
<div>
   <div>
<h2>{{pfProject.projectName}}</h2>
<img :src="pfProject.projectImagePath" alt="">
  <p>{{pfProject.projectDescription}}</p>
   </div>
</div>
</template>

<script>
    import { Projects } from '../Projects'
    export default {
        data() {
            return {
                pfProject: {}
            }
        },
        created() {
            this.pfProject = Projects.getProject(this.$route.params.id);
        }
    }

</script>

<style></style>
