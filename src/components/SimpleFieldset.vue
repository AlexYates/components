<template>
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">{{ legend }}</h1>
    </legend>
    <slot name="default" />
  </fieldset>
</template>

<script>
export default {
  name: "SimpleFieldset",
  props: {
    legend: {
      required: true,
      type: String
    }
  }
};
</script>
