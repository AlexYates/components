<template>
  <div class="govuk-inset-text">{{ text }}</div>
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
