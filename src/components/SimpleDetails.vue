<template>
  <details class="cursor-pointer mb-2 simple-details" data-module="simple-details">
    <summary
      class="
        <!-- simple_interactive -->
        hover:bg-yellow-400
        focus:bg-yellow-400
        active:bg-yellow-400
        hover:border-gray-800
        focus:border-gray-800
        active:border-gray-800
        border-transparent
        border-b-4
        <!-- simple_interactive -->
        inline-flex
        items-center
        mb-1
        simple-details__summary
      "
    >
      <span class="simple-details__summary-text">{{ summary }}</span>
    </summary>
    <div class="border-l-4 border-gray-500 px-4 py-2 simple-details__text">{{details}}</div>
  </details>
</template>

<script>
export default {
  name: "SimpleDetails",
  props: {
    details: {
      default:
        "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.",
      require: true,
      type: String
    },
    summary: {
      default: "Help with nationality",
      require: true,
      type: String
    }
  }
};
</script>
