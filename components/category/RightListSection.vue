<template>
  <div>
    <div
      class="flex my-5 pb-2 border-b-2"
      v-for="product in products"
      :key="product.id"
    >
      <div class="w-6/12 sm:w-3/13 mr-2 flex items-center">
        <img
          src="https://m.media-amazon.com/images/I/9164elyDY5L._AC_UY218_.jpg"
          alt=""
          class="w-full"
        />
      </div>
      <div class="w-full">
        <h1 class="text-xs sm:text-lg">
          Samsung 75" LST7 QLED Terrace 4K UHD Smart TV 2020 (Alexa Built-in)
          with Samsung The Terrace Soundbar w/Dolby 5.1ch (2020)
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
        <p class="text-xs sm:text-sm">Electronics</p>
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
  }
};
</script>
