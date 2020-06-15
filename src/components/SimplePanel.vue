<template>
  <div class="bg-green-700 flex flex-col items-center justify-center mb-2 p-4 text-center text-xl text-white simple-panel simple-panel--confirmation">
    <h1 class="font-bold mb-2 text-2xl simple-panel__title">{{ title }}</h1>
    <div class="mb-2 simple-panel__body">
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
