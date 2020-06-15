<template>
  <div>
    <a
      :href="href"
      class="bg-yellow-400 border-gray-800 border-b-4 flex mb-2 px-4 py-2 text-xs simple-skip-link"
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
