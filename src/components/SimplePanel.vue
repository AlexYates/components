<template>
  <div class="simple-panel simple-panel--confirmation">
    <h1 class="simple-panel__title">{{ title }}</h1>
    <div class="simple-panel__body">
      <slot name="default" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SimplePanel",
  props: {
    title: {
      default: "Application complete",
      required: true,
      type: String
    }
  }
};
</script>
