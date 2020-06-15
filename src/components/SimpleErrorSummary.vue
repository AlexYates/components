<template>
  <div
    class="border-4 border-red-500 font-semibold px-4 pt-3 pb-2 mb-2 simple-error-summary"
    :aria-labelledby="id"
    role="alert"
    tabindex="-1"
    data-module="simple-error-summary"
  >
    <h2 class="mb-2 text-lg simple-error-summary__title" :id="id">{{ title }}</h2>
    <div class="text-red-500 mb-2 simple-error-summary__body">
      <ul class="simple-list simple-error-summary__list">
        <li v-for="item in items" :key="item.url">
          <a
            class="<!-- simple_interactive --> hover:bg-yellow-400 focus:bg-yellow-400 active:bg-yellow-400 hover:border-gray-800 focus:border-gray-800 active:border-gray-800 border-transparent border-b-4 <!-- simple_interactive -->"
            :href="item.url"
          >{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleErrorSummary",
  props: {
    id: {
      required: true,
      type: String
    },
    items: {
      required: true,
      type: Array
    },
    title: {
      required: true,
      type: String
    }
  }
};
</script>
