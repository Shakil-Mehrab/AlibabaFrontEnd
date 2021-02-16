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
    let productsResponse = await app.$axios.$get(`products?per-page=2`, {
      params: {
        ...query
      }
    });
    return {
      products: productsResponse.data,
      meta: productsResponse.meta
    };
  },
  watch: {
    "$route.query"(query) {
      this.getCategoryProducts(1, query);
    }
  },
  methods: {
    async getCategoryProducts(
      page = this.$route.query.page,
      query = this.$route.query
    ) {
      await this.$axios
        .$get(`products?per-page=2`, {
          params: {
            page,
            ...query
          }
        })
        .then(response => {
          this.products = response.data;
          this.meta = response.meta;
        });
    },

    // async getCategoryMeta(category) {
    //   let response = await this.$axios.get(`categories/${category}`);

    //   this.char.title = response.data.data.name;
    // },

    async paginationSwitched() {
      // this.$scrollTo(".content-bg");
    }
  }
};
</script>
