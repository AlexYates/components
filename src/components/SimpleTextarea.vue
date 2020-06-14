<template>
  <textarea
    class="govuk-textarea"
    :id="id"
    :name="name"
    :rows="rows"
    :aria-describedby="describedBy"
  ></textarea>
</template>

<script>
export default {
  name: "SimpleTextarea",
  props: {
    describedBy: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    rows: {
      required: true,
      type: Number
    }
  }
};
</script>
