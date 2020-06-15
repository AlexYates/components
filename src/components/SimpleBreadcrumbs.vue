<template>
  <ol class="flex flex-wrap items-center mb-2 simple-breadcrumbs__list">
    <li v-for="(item, index) in items" :key="item.url" class="simple-breadcrumbs__list-item">
      <span
        tabindex="0"
        class="cursor-pointer flex inline-flex items-center mb-2 text-sm <!-- simple_interactive --> hover:bg-yellow-400 focus:bg-yellow-400 active:bg-yellow-400 hover:border-gray-800 focus:border-gray-800 active:border-gray-800 border-transparent border-b-4 <!-- simple_interactive --> simple-breadcrumbs__link"
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
