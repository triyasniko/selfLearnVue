<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import MainLayout from './views/layouts/MainLayout.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <p>OIII ini dari app.vue</p>
    </div>
  </header>
</template>
