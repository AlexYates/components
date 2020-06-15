<template>
  <div class="simple-form-group">
    <label class="simple-label" :for="id">{{ label }}</label>
    <select class="simple-select" :id="id" :name="name">
      <option
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :selected="item.selected"
      >{{ item.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SimpleSelect",
  props: {
    id: {
      default: "one",
      required: true,
      type: String
    },
    items: {
      required: true,
      type: Array
    },
    label: {
      required: true,
      type: String
    },
    name: {
      default: "one",
      required: true,
      type: String
    }
  }
};
</script>
