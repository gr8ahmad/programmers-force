<template>
<div>
   <div>
        <b-card :title="name"
          :img-src="imagePath"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">{{ description }}</p>
    <b-button variant="primary" :to="/portfolio/ + id">Visit Project</b-button>
  </b-card>
   </div>
</div>
</template>

<script>
    export default {
        props: ['name', 'imagePath', 'description', 'id'],
        data() {
            return {
            }
        }
    }

</script>

<style></style>
