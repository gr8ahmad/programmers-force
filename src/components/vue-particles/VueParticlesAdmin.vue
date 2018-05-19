<template>
  <div>
  <div class="container">
        <div class="row">
    <div class="col-sm-8 offset-2">
  <div class="form-group">
   <label>Particle Color</label>
    <input type="text" class="form-control" v-model="pData.pColor">
  </div>
  <div class="form-group">
   <label>Particle Size</label>
    <input type="number" class="form-control" v-model="pData.pSize">
  </div>
    <div class="form-group">
   <label>Particle Shape</label>
    <input type="text" class="form-control" v-model="pData.pShape">
  </div>
   <button class="btn btn-primary" @click="pSubmit">Save</button>
    </div>      
  </div>
  </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                pData: {
                    pColor: '',
//                    pSize: 5,
                    pShape: ''
                }
            }
        },
        methods: {
            pSubmit() {
                console.log(this.pData)
                this.$http.put('https://programmers-force.firebaseio.com/pData.json', this.pData).then(response=> {
                    console.log(response)
                },error=> {
                    console.log(error)
                })
            }
        }
    }

</script>

<style></style>
