<template>
  <button
    class="flex items-center justify-center mb-2 p-2"
    :class="{
      'opacity-50 cursor-not-allowed': isDisabled,
      'bg-blue-700 text-white': isType === 'primary',
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
  computed: {
    isDisabled() {
      return this.disabled;
    },
    isType() {
      return this.type;
    },
    isWide() {
      return this.wide;
    }
  }
};
</script>
