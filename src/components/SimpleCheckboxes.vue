<template>
  <div class="govuk-checkboxes">
    <div class="govuk-checkboxes__item" v-for="item in items" :key="item.id">
      <input
        class="govuk-checkboxes__input"
        :id="item.id"
        :name="item.name"
        type="checkbox"
        :value="item.value"
      />
      <label class="govuk-label govuk-checkboxes__label" :for="item.id">{{ item.label }}</label>
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
