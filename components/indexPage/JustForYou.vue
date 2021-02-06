<template>
  <div
    v-observe-visibility="{
      callback: showProductsNow,
      once: true
    }"
  >
    <template v-if="products.length">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        <div
          class="w-full bg-white rounded-md p-2 hover_increase"
          v-for="product in products"
          :key="product.id"
        >
          <ul>
            <li>
              <a href="">
                <!-- <img src="//i.alicdn.com/img/imgextra/i1/O1CN01ypfQ2q1zTydNAQ99D_!!6000000006716-0-tps-1000-1000.jpg_100x100.jpg" class="w-full transform hover:scale-110 transition ease-out duration-1000" alt=""> -->
                <!-- <img :src="art.image" alt="Awesome Image" /> -->
                <!-- backgroundImage: 'url(' + art.image + ')', -->
                <div
                  class="exh-cover-img"
                  style="min-height:250px;"
                  :style="{
                    backgroundImage: 'url(' + product.thumbnail + ')',
                    backgroundColor: '#f7f7f7',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain'
                  }"
                ></div>
                <div class="text-center py-2">
                  <p class="text-xs font-bold">{{ product.price }}</p>
                  <h3
                    class="text-sm font-bold truncate hover:text-customcolor-300"
                  >
                    {{ product.name }}
                  </h3>
                  <p class="text-xs">3.0 Pieces (Min. Order)</p>
                </div>
              </a>
            </li>
          </ul>
          <br />
        </div>
      </div>
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
