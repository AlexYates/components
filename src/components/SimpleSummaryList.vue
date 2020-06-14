<template>
  <dl class="govuk-summary-list">
    <div class="govuk-summary-list__row" v-for="item in items" :key="item.name">
      <dt class="govuk-summary-list__key">{{ item.key }}</dt>
      <dd class="govuk-summary-list__value">
        <template v-if="item.value">{{ item.value }}</template>
        <template v-else-if="item.values">
          <span v-for="(value, index) in item.values" :key="index">{{ value }}</span>
        </template>
      </dd>
      <dd class="govuk-summary-list__actions" v-if="item.actions">
        <a class="govuk-link" :href="item.actions.href">{{ item.actions.text }}</a>
      </dd>
    </div>
  </dl>
</template>

<script>
export default {
  name: "SimpleSummaryList",
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>
