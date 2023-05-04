<template>
  <button type="button" :class="classes" @click="onClick">{{ label }} </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  /**
   * The label of the button
   */
  label: string,
  /**
   * intent button (primary, secondary or destructive)
   */
  intent?: 'primary' | 'secondary' | 'destructive'
  /**
   * size of the button
   */
  size?: 'slim' | 'medium' | 'large',

}>(), { intent: 'primary', size: 'medium' });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'all-unset flex font-medium rounded shadow-sm items-center space-x-1 enabled-cursor-pointer enabled-focus-visible-outline enabled-focus-visible-outline-$p-focused enabled-focus-visible-outline-2 enabled-focus-visible-outline-offset-1 enabled-active-outline-none': true,
  'bg-$p-action-primary text-$p-text-on-primary fill-$p-icon-on-primary enabled-hover-bg-$p-action-primary-hovered enabled-active-bg-$p-action-primary-pressed': props.intent === 'primary',
  'bg-$p-action-secondary text-$p-text fill-$p-icon border border-solid border-$p-border-neutral-subdued shadow-$p-shadow-button enabled-hover-$p-action-secondary-hovered enabled-active-bg-$p-action-secondary-pressed': props.intent === 'secondary',
  'bg-$p-action-critical text-$p-text-on-critical fill-$p-icon-on-critical border-transparent enabled-hover-bg-$p-action-critical-hovered enabled-active-bg-$p-action-critical-pressed': props.intent === 'destructive',
  'text-sm leading-5 py-1 px-3': props.size === 'slim',
  'text-sm leading-5 py-2 px-4': props.size === 'medium',
  'text-md leading-5 py-3 px-6': props.size === 'large',
}));

const onClick = () => {
  emit("click", 1)
};

</script>
