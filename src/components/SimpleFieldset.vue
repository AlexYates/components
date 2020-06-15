<template>
  <fieldset class="simple-fieldset">
    <legend class="simple-fieldset__legend simple-fieldset__legend--l">
      <h1 class="simple-fieldset__heading">{{ legend }}</h1>
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
