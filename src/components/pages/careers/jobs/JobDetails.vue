<template>
<div>
<div class="single">
   <div class="row">
   <div class="col-sm-12">
    <h2 class="title">{{pfJob.title}}</h2>
    <p class="details">{{pfJob.description}}</p>
    <h2>Skills and Requirements</h2>
    <ul><li v-for="skill in pfJob.skills">{{skill}}</li></ul>
    <h2>Mush Have</h2>
    <ul><li v-for="quality in pfJob.mustHave">{{quality}}</li></ul>
    <h2>Perks</h2>
    <ul><li v-for="perk in pfPerks">{{perk}}</li></ul>
    <b-btn class="btn btn-primary" to="/careers">Apply Now</b-btn>
   </div>
   </div>
</div>
</div>

</template>

<script>
export default {
    data() {
        return {
            pfJob: {},
            pfPerks: []
        }
    },
    created() {
        this.pfJob = this.$store.getters.getJobs[this.$route.params.id]
        this.pfPerks = this.$store.getters.getPerks;
    }
}
</script>

<style></style>