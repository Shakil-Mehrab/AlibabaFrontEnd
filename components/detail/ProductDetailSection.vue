<template>
  <div class="mt-5">
    <h1
      class="text-lg font-semibold text-customcolor-200 hover:text-customcolor-300 cursor-pointer"
    >
      {{ product.name }}
    </h1>
    <div class="inline-block">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <hr />
    <div class="mt-5 flex items-center text-green-500">
      <span class="text-lg pr-2 my-2 font-semibold whitespace-no-wrap"
        >Price :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      {{ product.price }}
    </div>
    <div class="mt-5 flex">
      <span class="text-lg pr-2 my-2 font-semibold whitespace-no-wrap"
        >Size
        :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
      >
      <uL class="flex flex-wrap">
        <li
          class="border border-customcolor-300 m-2 text-base px-2"
          v-for="n in 9"
          :key="n"
        >
          <a href="">xl</a>
        </li>
      </uL>
    </div>
    <div class="mt-5 flex">
      <span class="text-lg pr-2 my-2 font-semibold whitespace-no-wrap"
        >Color :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
      >
      <uL class="flex flex-wrap items-center">
        <li
          class="border border-customcolor-300 mx-2 mb-2 text-base w-12 overflow-hidden"
          v-for="variation in product.variations"
          :key="variation.id"
        >
          <a href=""><img :src="variation.thumbnail" alt=""/></a>
        </li>
      </uL>
    </div>
    <div class="my-5 overflow-hidden">
      <input
        type="number"
        placeholder="Quantity"
        class="border border-customcolor-300 rounded-sm px-1 text-sm h-8 focus:outline-none"
      />
      <a
        href=""
        class="bg-customcolor-300 text-white  p-2 font-bold rounded-sm"
      >
        Add to Cart
      </a>
    </div>
    <hr />
    <div class="my-5">
      <h1 class="text-center text-lg font-semibold">About this item</h1>
      <ul>
        <li v-for="n in 5" :key="n">
          <a href="" class="text-sm font-semibold text-customcolor-400">
            &#9679; Dimensions with Stand (W x H x D): 28.8" x 18.9" x 7.1" |
            Without Stand (W x H x D): 28.8" x 17.2" x 2.9" | Weight with Stand:
            8.2 lbs | Weight without Stand: 8.0 lbs
          </a>
        </li>
      </ul>
    </div>
    <hr />
    <br />
    <ProductBodyCertificketComment />
  </div>
</template>
<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  }
};
</script>
