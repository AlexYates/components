<template>
  <div
    class="simple-back-link simple_interactive"
    @click="goBack"
    tabindex="0"
  >
    <SimpleIcon class="px-1">
      <path d="M20 30 L8 16 20 2" />
    </SimpleIcon>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "SimpleBackLink",
  components: {
    SimpleIcon: () => import("@/components/SimpleIcon.vue")
  },
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
      } else {
        /* eslint-disable-next-line */
        console.warn("Vue Router not found, cancelling navigation.");
      }
    }
  }
};
</script>
