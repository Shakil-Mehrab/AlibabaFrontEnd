<template>
  <div>
    <div class="container mx-auto">
      <div class="text-xs mt-2">
        Home > All Industries > Apparel > Plus Size Clothing > Plus Size Jackets
        Subscribe to Trade Alert
      </div>
      <div class="sm:flex">
        <div class="w-full sm:w-6/12 md:w-4/12 p-2">
          <ProductImageSection :product="product" />
        </div>
        <div class="w-full sm:w-6/12 md:w-8/12 p-2">
          <ProductDetailSection :product="product" />
        </div>
      </div>
    </div>
    <br />
    <div class="container mx-auto">
      <!-- <RelatedProduct /> -->
    </div>
  </div>
</template>
<script>
import ProductImageSection from "@/components/detail/ProductImageSection";
import ProductDetailSection from "@/components/detail/ProductDetailSection";
import ProductBodyCertificketComment from "@/components/detail/ProductBodyCertificketComment";
import RelatedProduct from "@/components/detail/RelatedProduct";
export default {
  components: {
    ProductImageSection,
    ProductDetailSection,
    RelatedProduct,
    ProductBodyCertificketComment
  },
  async asyncData({ params, app, error }) {
    try {
      let response = await app.$axios.$get(
        `products/${encodeURI(params.slug)}`
      );

      return {
        product: response.data
      };
    } catch (e) {
      error({
        statusCode: e.response.status
      });
    }
  }
};
</script>
