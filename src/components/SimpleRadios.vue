<template>
  <div class="flex flex-col simple-radios simple-radios--inline">
    <div class="flex inline-flex items-center mb-2 simple-radios__item" v-for="item in items" :key="item.id">
      <input
        class="h-6 w-6 rounded simple-radios__input"
        :id="item.id"
        :name="item.name"
        type="radio"
        :value="item.value"
      />
      <label class="pl-4 simple-label simple-radios__label" :for="item.id">{{ item.label }}</label>
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
