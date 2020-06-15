<template>
  <div class="flex flex-col inline-flex mb-2 simple-form-group">
    <label class="font-semibold mb-1 simple-label" :for="id">{{ label }}</label>
    <select class="border-2 border-gray-800 flex p-2 simple-select" :id="id" :name="name">
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
