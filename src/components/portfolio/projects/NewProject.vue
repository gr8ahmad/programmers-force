<template>
<div class="container">
    <div class="row">
<div class="col-sm-8 offset-2">
<form>
  <div class="form-group">
   <label>Project Name</label>
    <input type="text" class="form-control" v-model="pfProject.projectName">
  </div>
  <div class="form-group">
   <label>Image Url</label>
    <input type="text" class="form-control" v-model="pfProject.projectImagePath">
  </div>
  <img :src="pfProject.projectImagePath" alt="" style="width: 100%">
  <div class="form-group">
   <label>Project Name</label>
    <textarea rows="5" class="form-control" v-model="pfProject.projectDescription"></textarea>
  </div>
  <button class="btn btn-primary" @click.prevent="addProject">Add Project</button>
</form>        
</div>
</div>

</div>
</template>

<script>
export default {
    data() {
        return {
            pfProject: {
                projectName: '',
                projectImagePath: '',
                projectDescription: ''
            }
        }
    },
        methods: {
            addProject() {
                this.$http.put('https://programmers-force.firebaseio.com/pfProject.json',this.pfProject)
                .then(response=> {
                    console.log(response)
                },error=> {
                    console.log(error)
                })
            }
        }
}
</script>

<style></style>