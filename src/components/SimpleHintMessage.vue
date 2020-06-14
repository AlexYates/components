<template>
  <span class="govuk-hint" :id="id">
    <slot name="default">For example, 12 11 2007</slot>
  </span>
</template>

<script>
export default {
  name: "SimpleHintMessage",
  props: {
    id: {
      required: true,
      type: String
    }
  }
};
</script>
