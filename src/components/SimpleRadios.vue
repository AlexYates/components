<template>
  <div class="simple-radios simple-radios--inline">
    <div class="simple-radios__item" v-for="item in items" :key="item.id">
      <input
        class="simple-radios__input"
        :id="item.id"
        :name="item.name"
        type="radio"
        :value="item.value"
      />
      <label class="simple-label simple-radios__label" :for="item.id">{{ item.label }}</label>
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
