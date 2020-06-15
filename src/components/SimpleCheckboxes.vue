<template>
  <div class="simple-checkboxes">
    <div class="simple-checkboxes__item" v-for="item in items" :key="item.id">
      <input
        class="simple-checkboxes__input"
        :id="item.id"
        :name="item.name"
        type="checkbox"
        :value="item.value"
      />
      <label class="simple-checkboxes__label" :for="item.id">{{ item.label }}</label>
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
