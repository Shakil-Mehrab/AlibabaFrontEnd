<template>
  <div>
    <div class="container mx-auto">
      <div class="text-xs mt-2">
        Home > All Industries > Apparel > Plus Size Clothing > Plus Size Jackets
        Subscribe to Trade Alert
      </div>
      <div class="xs:flex">
        <div class="w-full xs:w-4/12 p-2">
          <ProductImageSection />
        </div>
        <div class="w-full xs:w-8/12 p-2">
          <ProductDetailSection />
        </div>
      </div>
    </div>
    <br />
    <div class="container mx-auto">
      <RelatedProduct />
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
  }
};
</script>
