<template>
  <span
    aria-level="level"
    class="flex items-center font-semibold mb-2"
    :class="{
      'text-2xl': level === 1,
      'text-xl': level === 2,
      'text-lg': level === 3,
      'text-md': level === 4,
      'text-sm': level === 5,
      'text-xs': level === 6
    }"
    role="heading"
  >
    <slot name="default" />
  </span>
</template>

<script>
export default {
  name: "SimpleHeading",
  props: {
    level: {
      default: 1,
      type: Number
    }
  }
};
</script>
