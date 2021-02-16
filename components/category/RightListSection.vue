<template>
  <div>
    <div
      class="flex my-5 pb-2 border-b-2"
      v-for="product in products"
      :key="product.id"
    >
      <div class="w-6/12 sm:w-3/13 mr-2 flex items-center">
        <img :src="product.thumbnail" alt="" class="w-full" />
        <!-- <router-link :to="link(product)" exact>
          <img
            v-if="product.thumbnail"
            v-lazy="product.thumbnail"
            :alt="product.name"
            class="w-full"
          />
        </router-link> -->
      </div>
      <div class="w-full">
        <h1 class="text-xs sm:text-lg">
          <router-link :to="link(product)" exact>{{
            product.name
          }}</router-link>
        </h1>
        <span>
          <a href="" class="text-xs">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i> </a
          ><br />
        </span>
        <p class="text-xs sm:text-sm">{{ product.category }}</p>
        <p class="text-xs sm:text-sm">My One</p>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    products: {
      required: true,
      type: Array
    }
  },
  methods: {
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
