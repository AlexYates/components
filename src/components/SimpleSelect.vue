<template>
  <div class="govuk-form-group">
    <label class="govuk-label" :for="id">{{ label }}</label>
    <select class="govuk-select" :id="id" :name="name">
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
      default: "Sort by",
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
