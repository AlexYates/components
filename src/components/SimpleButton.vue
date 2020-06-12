<template>
  <button
    class="bg-gray-800 border border-gray-500 flex items-center justify-center mb-2 p-2 rounded text-white"
    :class="{
      'opacity-50 cursor-not-allowed': isDisabled,
      'w-full': isWide
    }"
    :disabled="isDisabled"
  >
    <slot name="before" />
    <slot name="default" />
    <slot name="after" />
  </button>
</template>

<script>
export default {
  name: "SimpleButton",
  props: {
    disabled: {
      default: false,
      required: false,
      type: Boolean
    },
    wide: {
      default: false,
      required: false,
      type: Boolean
    }
  },
  data: () => ({
    isDisabled: false,
    isWide: false
  }),
  mounted() {
    this.isDisabled = this.disabled;
    this.isWide = this.wide;
  }
};
</script>
