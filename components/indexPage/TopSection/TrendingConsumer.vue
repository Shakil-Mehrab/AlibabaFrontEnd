<template>
  <div
    class="w-full hidden xs:block xl:w-3/12 px-2"
    v-observe-visibility="{
      callback: showProductsNow,
      once: true
    }"
  >
    <div
      class="p-2 text-center text-sm font-bold bg-customcolor-300 rounded-sm text-white"
    >
      Trending Consumer Electronics
    </div>
    <div v-if="!isLoading">
      <ul class="flex xl:block">
        <li
          class="border-b border-gray-200 hover_increase"
          v-for="product in products"
          :key="product.id"
        >
          <a href="" class="flex">
            <span class="w-2/3 p-1">
              Ladies health monitoring smartwatch<br />
              <span
                class="py-1 px-4 text-white bg-customcolor-300 rounded-full text-xs text-center whitespace-no-wrap"
                >Source Now</span
              >
            </span>
            <span class="w-1/3 p-1">
              <img
                src="//i.alicdn.com/img/imgextra/i1/O1CN01ypfQ2q1zTydNAQ99D_!!6000000006716-0-tps-1000-1000.jpg_100x100.jpg"
                alt="jfk"
              />
              <!-- <img
                v-if="product.thumbnail"
                v-lazy="product.thumbnail"
                :alt="product.name"
              /> -->
            </span>
          </a>
          <br />
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-center xl:mt-20" v-else>
      <img src="/img/app/loading.gif" alt="loading" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
      products: []
    };
  },
  props: {
    endpoints: {
      required: true,
      type: String,
      default: "products?per-page=9"
    }
  },
  async asyncData({ app }) {
    let productsResponse = await app.$axios.$get("products");
    return {
      products: productsResponse.data
    };
  },
  methods: {
    async showProductsNow(visible) {
      if (visible) {
        await this.getProducts(this.endpoints);
      }
    },
    async getProducts(endpoint) {
      try {
        this.isLoading = true;
        let response = await this.$axios.$get(endpoint);

        this.products = response.data;
      } catch (e) {}
      this.isLoading = false;
    },
    link(arg) {
      return {
        name: "products-slug",
        params: {
          slug: arg.slug
        }
      };
    }
  }
};
</script>
