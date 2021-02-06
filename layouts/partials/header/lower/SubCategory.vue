<template>
  <ul
    class="md:absolute top-0 shadow-sm bg-white z-50 w-full md:ml-60 flex flex-wrap border"
    v-if="subCategory == category.id && category.children.length"
    style="min-height:40vw"
  >
    <li class="p-2 w-1/2" v-for="child in category.children" :key="child.id">
      <nuxt-link
        :to="link(child)"
        exact
        class="flex justify-between text-customcolor-300 text-sm font-bold"
      >
        <span>{{ child.name }}</span>
      </nuxt-link>
      <ul class="w-full">
        <li
          class="text-xs text-black"
          v-for="grandChild in child.children"
          :key="grandChild.id"
        >
          <nuxt-link
            :to="link(grandChild)"
            exact
            class="flex justify-between hover:text-customcolor-300"
          >
            <span>{{ grandChild.name }}</span>
          </nuxt-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    subCategory: {
      required: true,
      type: Number
    },
    category: {
      required: true,
      type: Object
    }
  },
  methods: {
    link(arg) {
      return {
        name: "products",
        query: { slug: arg.slug }
      };
    }
  }
};
</script>
