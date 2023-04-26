<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button type="button" class="text-lg" @click="count++">count is {{ count }}</button>
</template>
