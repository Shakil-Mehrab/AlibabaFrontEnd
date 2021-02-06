<template>
  <div
    v-observe-visibility="{
      callback: showProductsNow,
      once: true
    }"
  >
    <template v-if="products.length">
      <client-only>
        <carousel
          class="product-slider"
          :perPageCustom="[[200, 3], [(768, 6)], [1024, 10]]"
          :loop="true"
          :navigationEnabled="true"
        >
          <slide v-for="product in products" :key="product.id">
            <div class="mx-1 hover_increase">
              <nuxt-link :to="link(product)" exact>
                <img :src="product.thumbnail" class="w-full" alt="" />
                <!-- <img
                  v-if="product.thumbnail"
                  v-lazy="product.thumbnail"
                  :alt="product.name"
                /> -->
                <div class="text-center py-2 w-40">
                  <p class="text-xs font-bold text-green-500">
                    {{ product.price }}
                  </p>
                  <h3
                    class="text-sm font-bold truncate text-customcolor-200 hover:text-customcolor-300"
                  >
                    {{ product.name }}
                  </h3>
                  <p class="text-xs text-customcolor-400" v-if="short_des">
                    {{ product.short_description }}
                  </p>
                </div>
              </nuxt-link>
            </div>
          </slide>
        </carousel>
      </client-only>
    </template>
    <template class="text-center" v-else>
      No Product Found
    </template>
    <div class="flex" v-if="isLoading">
      <div class="w-48 p-2" v-for="skull in skeleton" :key="skull">
        <content-placeholders>
          <content-placeholders-img />
          <content-placeholders-heading />
        </content-placeholders>
      </div>
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
      default: "news?per-page=9"
    },
    short_des: {
      required: true,
      type: Boolean,
      default: false
    },
    skeleton: {
      required: false,
      type: Number,
      default: 1
    }
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
<style>
.product-slider .VueCarousel-navigation {
  position: absolute;
  width: 100%;
  justify-content: space-between;
  top: 45%;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}
.product-slider .VueCarousel-navigation-button {
  color: #333;
}
.product-slider .VueCarousel-navigation-prev {
  left: 35px;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
}
.product-slider .VueCarousel-navigation-next {
  right: 35px;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
}
.product-slider .VueCarousel-navigation-button[data-v-453ad8cd]:focus {
  outline: black;
}
.product-slider .VueCarousel-dot-container {
  display: none !important;
}
</style>
