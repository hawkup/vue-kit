<script lang="ts" setup>
import { createHead } from 'unhead'
import { useHead } from 'unhead'

import tailwindcss from '../tailwind.css?inline'


createHead()

useHead({
  style: [tailwindcss.toString()]
})
</script>
