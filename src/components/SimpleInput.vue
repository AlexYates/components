<template>
  <label
    class="flex flex-col mb-1 relative"
    :class="{
      'cursor-not-allowed opacity-50': isDisabled
    }"
    for="name"
  >
    <span class="absolute m-2 text-gray-700 text-sm">
      <slot name="label" />
    </span>
    <input
      class="bg-white border border-gray-500 flex-grow mb-1 p-2 pt-8 rounded"
      :class="{
        'cursor-not-allowed': isDisabled
      }"
      :disabled="isDisabled"
      id="name"
      name="name"
      :required="required"
      type="text"
    />
    <span v-if="hasError && error" class="mb-1 text-red-500 text-sm">{{ error }}</span>
    <span v-if="hint" class="mb-1 text-sm">{{ hint }}</span>
  </label>
</template>

<script>
export default {
  name: "SimpleInput",
  props: {
    disabled: {
      default: false,
      required: false,
      type: Boolean
    },
    error: {
      default: "Please fill in the field as specified",
      required: false,
      type: String
    },
    hint: {
      required: false,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    required: {
      default: false,
      required: false,
      type: Boolean
    }
  },
  data: () => ({
    isDisabled: false,
    hasError: false
  })
};
</script>
