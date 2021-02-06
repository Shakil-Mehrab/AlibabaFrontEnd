<template>
  <!-- w-64 sm:w-96 -->
  <ul class="">
    <li
      class="p-2 text-sm font-semibold w-full hover:shadow-lg border hover:text-customcolor-300"
      v-for="category in categories"
      :key="category.id"
      @mouseover="subCategoryUl(category.id)"
      @mouseleave="subCategoryUlHide()"
    >
      <nuxt-link
        :to="link(category)"
        exact
        target="_blank"
        class="flex justify-between"
      >
        <span>{{ category.name }} </span>
        <svg
          class="w-4 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </nuxt-link>
      <SubCategory :category="category" :subCategory="subCategory" />
    </li>
  </ul>
</template>
<script>
import SubCategory from "@/layouts/partials/header/lower/SubCategory";

export default {
  data() {
    return {
      subCategory: 0
    };
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  components: {
    SubCategory
  },
  methods: {
    subCategoryUl(arg) {
      this.subCategory = arg;
    },
    subCategoryUlHide() {
      this.subCategory = 0;
    },
    link(arg) {
      return {
        name: "products",
        query: { categories: arg.slug }
      };
    }
  }
};
</script>
