<template>
  <div class="simple-warning-text">
    <span class="simple-warning-text__icon" aria-hidden="true">
      <slot name="icon">!</slot>
    </span>
    <strong class="simple-warning-text__text">
      <span class="simple-warning-text__assistive">
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

