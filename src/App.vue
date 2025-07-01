<script setup>
import Sidebar from '@/components/layout/SideBar.vue'
</script>

<template>
  <Sidebar />
  <div class="flex justify-center ml-64">
    <router-view />
  </div>
</template>

<style scoped></style>
