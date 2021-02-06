<template>
  <div class="container mx-auto px-2">
    <h1 class="mt-5 text-lg font-bold">Cart</h1>
    <Progressbar widthBorderColor="w-1/4  border-red-300" nameOfPage="cart" />
    <CartSumury />
    <div class="flex justify-between my-2">
      <a href="" class="text-base text-customcolor-300 py-2"
        >Continue Shopping</a
      >
      <a href="" class="text-base text-white p-2 bg-customcolor-300 rounded-sm"
        >Go to Checkout</a
      >
    </div>
  </div>
</template>
<script>
import Progressbar from "@/components/cart/Progressbar";
import CartSumury from "@/components/cart/CartSumury";

export default {
  components: {
    Progressbar,
    CartSumury
  }
};
</script>
