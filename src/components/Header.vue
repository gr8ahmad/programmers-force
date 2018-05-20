<template>
    <header>
    <b-navbar toggleable="md" type="dark" variant="faded">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#" to="/"><img src="../assets/logo.png" alt=""></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">


    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
    <b-navbar-nav>
      <b-nav-item to="/" exact>HOME</b-nav-item>
      <b-nav-item to="/about">ABOUT US</b-nav-item>
      <b-nav-item to="/services">SERVICES</b-nav-item>
      <b-nav-item to="/portfolio">PORTFOLIO</b-nav-item>
      <b-nav-item to="/careers">CAREERS</b-nav-item>
      <b-nav-item to="/contact">CONTACT</b-nav-item>
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
    header {
        background: #000;
        padding: 0 30px;
    }
    .home header {
    background-color: rgba(50, 57, 68, 0.58);
    position: relative;
        z-index: 999;
    }
    .nav-item {
        margin: 0;
    }
nav.navbar {
    padding: 0;
}
    .navbar-dark .navbar-nav .nav-link {
        color: #fff;
        padding: 30px 20px;
    }
    .navbar-dark .navbar-nav .nav-link.active {
        color: #00a558;
    }
    .home .navbar-dark .navbar-nav .nav-link:hover,
    .home .navbar-dark .navbar-nav .nav-link:focus,
    .home .navbar-dark .navbar-nav .nav-link.active{
    color: #FFF;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.5);
    transition: all 350ms ease-out;
    box-shadow: inset 0px 0px 15px rgba(8, 14, 19, 0.8);    
    }

</style>
