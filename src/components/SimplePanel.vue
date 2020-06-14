<template>
  <div class="govuk-panel govuk-panel--confirmation">
    <h1 class="govuk-panel__title">{{ title }}</h1>
    <div class="govuk-panel__body">
      <slot name="default" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SimplePanel",
  props: {
    title: {
      default: "Application complete",
      required: true,
      type: String
    }
  }
};
</script>
