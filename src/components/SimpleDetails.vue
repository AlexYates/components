<template>
  <details class="simple-details" data-module="simple-details">
    <summary class="simple-details__summary simple_interactive">
      <span class="simple-details__summary-text">{{ summary }}</span>
    </summary>
    <div class="simple-details__text">{{details}}</div>
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
