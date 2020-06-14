<template>
  <div class="govuk-radios govuk-radios--inline">
    <div class="govuk-radios__item" v-for="item in items" :key="item.id">
      <input
        class="govuk-radios__input"
        :id="item.id"
        :name="item.name"
        type="radio"
        :value="item.value"
      />
      <label class="govuk-label govuk-radios__label" :for="item.id">{{ item.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleRadios",
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>
