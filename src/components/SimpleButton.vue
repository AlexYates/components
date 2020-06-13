<template>
  <button
    class="border border-gray-500 flex items-center justify-center mb-2 p-2 rounded"
    :class="{
      'opacity-50 cursor-not-allowed': isDisabled,
      'bg-gray-800 text-white': isType === 'primary',
      'bg-gray-300 text-gray-800': isType === 'secondary',
      'bg-red-600 text-white': isType === 'warning',
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
    type: {
      default: "primary",
      required: false,
      type: String
    },
    wide: {
      default: false,
      required: false,
      type: Boolean
    }
  },
  data: () => ({
    isDisabled: null,
    isType: null,
    isWide: null
  }),
  mounted() {
    this.isDisabled = this.disabled;
    this.isType = this.type;
    this.isWide = this.wide;
  }
};
</script>
