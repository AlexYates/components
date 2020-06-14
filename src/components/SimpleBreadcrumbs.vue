<template>
  <ol class="govuk-breadcrumbs__list">
    <li v-for="item in items" :key="item.url" class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#" :data-url="item.url">{{ item.text }}</a>
    </li>
  </ol>
</template>

<script>
export default {
  name: "SimpleBreadcrumbs",
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>
