<template>
  <div>
    <div
      class="border-4 border-gray-400 my-2 rounded-md"
      v-if="nameOfPage == 'cart'"
    >
      <div class="border" :class="widthBorderColor"></div>
    </div>
    <div
      class="border-4 border-gray-400 my-2 rounded-md flex"
      v-if="nameOfPage == 'checkout'"
    >
      <div class="border w-1/4 border-red-300"></div>
      <div class="border" :class="widthBorderColor"></div>
    </div>
    <!-- <div class="border-4 border-gray-400 my-2 rounded-md flex">
      <div class="border w-1/4 border-red-300"></div>
      <div class="border w-1/4 border-customcolor-300"></div>
      <div class="border" :class="widthBorderColor"></div>
    </div>
    <div class="border-4 border-gray-400 my-2 rounded-md flex">
      <div class="border w-1/4 border-red-300"></div>
      <div class="border w-1/4 border-customcolor-300"></div>
      <div class="border w-1/4 border-blue-400"></div>
      <div class="border" :class="widthBorderColor"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    widthBorderColor: {
      required: false,
      type: String,
      default: "w-1/4 border-red-400"
    },
    nameOfPage: {
      required: false,
      type: String,
      default: "cart"
    }
  },
  methods: {}
};
</script>
