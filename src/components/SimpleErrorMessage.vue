<template>
  <span class="govuk-error-message" :id="id">
    <span class="govuk-visually-hidden">{{ hidden }}</span>
    {{ text }}
  </span>
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
