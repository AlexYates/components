<template>
  <div>
    <a
      :href="href"
      class="simple-skip-link"
    >{{ text }}</a>
  </div>
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
      return `#${document.querySelectorAll(":not(nav)[id]")[0].id}`;
    }
  }
};
</script>
