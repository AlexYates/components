<template>
  <span class="govuk-back-link" @click="goBack" tabindex="0">{{ text }}</span>
</template>

<script>
export default {
  name: "SimpleBackLink",
  props: {
    text: {
      default: "Back",
      required: false,
      type: String
    }
  },
  methods: {
    goBack() {
      const { $router } = this;
      if ($router) {
        $router.back();
      } else{
        /* eslint-disable-next-line */
        console.warn('Vue Router not found, we cannot navigate back without it.')
      }
    }
  }
};
</script>
