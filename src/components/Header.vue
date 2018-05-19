<template>
    <header>
    <b-navbar toggleable="md" type="dark" variant="faded">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#"><img src="../assets/logo.png" alt=""></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">


    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
    <b-navbar-nav>
      <b-nav-item to="/">HOME</b-nav-item>
      <b-nav-item>ABOUT US</b-nav-item>
      <b-nav-item>SERVICES</b-nav-item>
      <b-nav-item to="/portfolio">PORTFOLIO</b-nav-item>
      <b-nav-item>CONTACT</b-nav-item>
    </b-navbar-nav>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    </header>
<!-- navbar-1.vue -->
</template>

<!--script-->

<script>
export default {
    data: function() {
        return {
            
        }
    }
}
</script>

<!--style-->

<style scoped>
.navbar-dark .navbar-nav .nav-link {
        color: #fff;
    }
    .nav-item {
        margin: 0 8px;
    }
    header {
            background: #0e415b;
    }
</style>