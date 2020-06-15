<template>
  <div class="border-l-8 border-gray-500 mb-2 pl-4 py-2 simple-inset-text">{{ text }}</div>
</template>

<script>
export default {
  name: "SimpleInsetText",
  props: {
    text: {
      required: true,
      type: String
    }
  }
};
</script>
