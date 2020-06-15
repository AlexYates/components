<template>
  <div
    class="simple-error-summary"
    :aria-labelledby="id"
    role="alert"
    tabindex="-1"
    data-module="simple-error-summary"
  >
    <h2 class="simple-error-summary__title" :id="id">{{ title }}</h2>
    <div class="simple-error-summary__body">
      <ul class="simple-list simple-error-summary__list">
        <li v-for="item in items" :key="item.url">
          <a
            class="simple_interactive"
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
