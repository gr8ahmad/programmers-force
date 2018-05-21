<template>
   <div class="container">
   <div class="row">
       <div class="col-sm-12 text-right">
        <b-btn @click="logout" class="btn btn-primary">Log Out</b-btn>
       </div>
   </div>
      <div class="project-container row-inner">
       <h2>Projects</h2>
    <b-btn variant="default" to="/admin/new-project">Add New Project</b-btn>
        <b-list-group>
  <b-list-group-item class="d-flex justify-content-between align-items-center"
   v-for="(project, index) in pfProjects">
    {{ project.projectName }}
    <b-badge variant="default">
    <button class="btn btn-default">Edit</button>
    <button class="btn btn-default" @click="removeProject(index)">Delete</button>
    </b-badge>
  </b-list-group-item>
</b-list-group>
    </div>
    <hr>
    <div class="Team-container row-inner">
       <h2>Team</h2>
    <b-btn variant="default" to="/admin/new-project">Add New Member</b-btn>
        <b-list-group>
  <b-list-group-item class="d-flex justify-content-between align-items-center"
   v-for="(member, index) in pfTeam">
    {{ member.name }}
    <b-badge variant="default">
    <button class="btn btn-default">Edit</button>
    <button class="btn btn-default" @click="removeProject(index)">Delete</button>
    </b-badge>
  </b-list-group-item>
</b-list-group>
    </div>
         <hr>
          <div class="jobs-container row-inner">
       <h2>Jobs</h2>
    <b-btn variant="default" to="/admin/new-project">Add New Job</b-btn>
        <b-list-group>
  <b-list-group-item class="d-flex justify-content-between align-items-center"
   v-for="(job, index) in pfJobs">
    {{ job.title }}
    <b-badge variant="default">
    <button class="btn btn-default">Edit</button>
    <button class="btn btn-default" @click="removeProject(index)">Delete</button>
    </b-badge>
  </b-list-group-item>
</b-list-group>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
    import NewProject from '../portfolio/projects/NewProject.vue';
    import firebase from 'firebase'
    export default {
        data() {
            return {
                pfProjects: [],
                pfTeam: [],
                pfJobs: []
            }
        },
        components: {
            NewProject
        },
        methods: {
            removeProject(index) {
                this.$store.getters.removeProject(index)
            },
            logout() {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('/')
                })
            },
        },
        created() {
            this.pfProjects = this.$store.getters.getProjects;
            this.pfTeam = this.$store.getters.getTeam;
            this.pfJobs = this.$store.getters.getJobs;
        }
    }

</script>

<style>
    .row-inner {
        margin-bottom: 40px;
    }
</style>
