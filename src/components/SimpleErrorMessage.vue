<template>
  <div class="text-red-500 font-semibold mb-2 simple-error-message" :id="id">
    <span class="hidden simple-visually-hidden">{{ hidden }}</span>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "SimpleErrorMessage",
  props: {
    hidden: {
      default: "Error: ",
      type: String
    },
    id: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    }
  }
};
</script>
