<template>
  <div class="simple-breadcrumbs">
    <ol class="simple-breadcrumbs__list">
      <li v-for="(item, index) in items" :key="item.url" class="simple-breadcrumbs__list-item">
        <span
          tabindex="0"
          class="simple-breadcrumbs__link simple_interactive"
          href="#"
          :data-url="item.url"
        >
          <span>{{ item.text }}</span>
          <SimpleIcon class="px-1">
            <path v-if="index !== (items.length - 1)" d="M12 30 L24 16 12 2" />
          </SimpleIcon>
        </span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "SimpleBreadcrumbs",
  components: {
    SimpleIcon: () => import("@/components/SimpleIcon.vue")
  },
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>
