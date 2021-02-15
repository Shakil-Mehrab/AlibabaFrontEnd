<template>
  <div>
    <div class="container mx-auto flex">
      <div class="w-3/12">
        <LeftFilterSection />
      </div>
      <div
        class="w-9/12 ml-1 sm:ml-5 border-l border-customcolor-300 pl-1 sm:pl-5"
      >
        <RightListSection :products="products" />
        <Pagination
          v-if="meta.current_page"
          :meta="meta"
          @pagination:switched="paginationSwitched"
        />
      </div>
    </div>
  </div>
</template>
<script>
import LeftFilterSection from "@/components/category/LeftFilterSection";
import RightListSection from "@/components/category/RightListSection";
import Pagination from "@/components/pagination/Pagination";

export default {
  components: {
    LeftFilterSection,
    RightListSection,
    Pagination
  },
  async asyncData({ query, app }) {
    console.log(`products?per-page=9`, {
      params: {
        page: query.page,
        ...query
      }
    });
    let productsResponse = await app.$axios.$get(`products?per-page=9`, {
      params: {
        ...query
      }
    });
    return {
      products: productsResponse.data,
      meta: productsResponse.meta
    };
  }
};
</script>
