<template><div>
         <div class="row">
       <div class="col-sm-12 intro">
<h1>Careers</h1>
<p>Programmers Forces work culture, first and foremost, promotes personal development and professional growth. Have you got the skills? We will polish them. Have you got the drive? We will guide you. Our team is our asset. Programmers Force works with a multitude of clients and companies both local and international. We uphold the best work standards, so you are never short of learning opportunities, projects, and professional exposure.
</p>
       </div>
   </div>
       <div class="row">
  <div class="col-sm-6 col-md-4 col-job" v-for="(job,index) in pfJobs">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ job.title }}</h5>
        <p class="card-text">{{ job.description }}</p>
        <b-btn class="btn btn-primary" :to="'/careers/' + index">Read More</b-btn>
      </div>
    </div>
  </div>
</div>
</div></template>

<script>
    export default {
        data() {
            return {
                pfJobs: [],
            }
        },
        created() {
            this.pfJobs = this.$store.getters.getJobs;
        }
    }

</script>

<style>
    .intro,.col-job {
        margin-bottom: 30px
    }
    .col-job .card {
        height: 100%;
    }
    .col-job .card-body {
        display: flex;
        align-items: baseline;
        flex-direction: column;
    }
    .col-job .card-body .btn {
        margin-top: auto;
    }

</style>
