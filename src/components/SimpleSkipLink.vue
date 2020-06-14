<template>
  <a :href="href" class="govuk-skip-link">{{ text }}</a>
</template>

<script>
export default {
  name: "SimpleSkipLink",
  props: {
    text: {
      default: "Skip to main content",
      type: String
    }
  },
  computed: {
    href() {
      return `#${document.querySelectorAll(':not(nav)[id]')[0].id}`;
    }
  }
};
</script>
