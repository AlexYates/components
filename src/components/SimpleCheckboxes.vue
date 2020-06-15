<template>
  <div class="flex flex-col simple-checkboxes">
    <div class="flex inline-flex items-center mb-2 simple-checkboxes__item" v-for="item in items" :key="item.id">
      <input
        class="h-6 w-6 rounded simple-checkboxes__input"
        :id="item.id"
        :name="item.name"
        type="checkbox"
        :value="item.value"
      />
      <label class="pl-4 simple-label simple-checkboxes__label" :for="item.id">{{ item.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleCheckboxes",
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>
