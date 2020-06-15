<template>
  <div
    class="cursor-pointer flex inline-flex items-center mb-2 text-sm <!-- simple_interactive --> hover:bg-yellow-400 focus:bg-yellow-400 active:bg-yellow-400 hover:border-gray-800 focus:border-gray-800 active:border-gray-800 border-transparent border-b-4 <!-- simple_interactive --> simple-back-link"
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
