<template>
  <svg
    :aria-labelledby="labelledBy"
    fill="none"
    :height="scale"
    role="img"
    stroke="currentcolor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 32 32"
    :width="scale"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title :id="titleId">{{ title }}</title>
    <desc :id="descriptionId">{{ description }}</desc>
    <slot name="default" />
  </svg>
</template>

<script>
export default {
  name: "SimpleIcon",
  props: {
    description: {
      required: false,
      type: String
    },
    descriptionId: {
      required: false,
      type: String
    },
    size: {
      default: "sm",
      required: false,
      type: String
    },
    title: {
      required: false,
      type: String
    },
    titleId: {
      required: false,
      type: String
    }
  },
  computed: {
    labelledBy() {
      return `${this.titleId} ${this.descriptionId}`
    },
    scale() {
      switch (this.size) {
        case "xs":
          return 16;
        case "sm":
          return 24;
        case "md":
          return 32;
        case "lg":
          return 40;
        case "xl":
          return 48;
        case "2xl":
          return 56;
        default:
          return 24;
      }
    }
  }
};
</script>
