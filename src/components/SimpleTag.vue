<template>
  <strong class="simple-tag simple-tag--grey" :class="{ '': colour }">{{ text }}</strong>
</template>

<script>
export default {
  name: "SimpleTag",
  props: {
    colour: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    }
  }
};
</script>
