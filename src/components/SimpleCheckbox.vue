<template>
  <label
    class="border border-gray-500 flex flex-col mb-2 px-2 relative rounded"
    :class="{
      'cursor-not-allowed opacity-50': isDisabled
    }"
    :for="name"
  >
    <div class="py-2 text-gray-700 text-sm">
      <slot name="label" />
    </div>
    <div class="flex items-center mb-2" v-for="item in items" :key="item.value">
      <input
        class="border border-gray-500 rounded"
        :class="{
          'cursor-not-allowed': isDisabled
        }"
        :disabled="isDisabled"
        :id="item.value"
        :name="item.value"
        :required="item.required"
        type="checkbox"
      />
      <label :for="item.value" class="ml-2">{{ item.text }}</label>
    </div>

    <span v-if="hasError && error" class="mb-1 text-red-500 text-sm">{{ error }}</span>
    <span v-if="hint" class="mb-1 text-sm">{{ hint }}</span>
  </label>
</template>

<script>
export default {
  name: "SimpleCheckbox",
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
    items: {
      required: true,
      type: Array
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
