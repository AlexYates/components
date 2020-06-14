<template>
  <div class="govuk-warning-text">
    <span class="govuk-warning-text__icon" aria-hidden="true">
      <slot name="icon">!</slot>
    </span>
    <strong class="govuk-warning-text__text">
      <span class="govuk-warning-text__assistive">
        {{ assistive }}
      </span>
      <slot name="text">{{ text }}</slot>
    </strong>
  </div>
</template>

<script>
export default {
  name: "SimpleWarningText",
  props: {
    assistive: {
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
