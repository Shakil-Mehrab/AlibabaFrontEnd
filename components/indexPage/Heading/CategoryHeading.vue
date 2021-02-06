<template>
  <fragment>
    <img
      src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png"
      alt=""
      class="w-full h-20 sm:h-full object-cover"
    />
    <div class="absolute top-0 p-1 md:p-4">
      <h5 class="text-white text-xl" v-if="title">{{ title }}</h5>
      <div
        class="bg-white rounded-full transform hover:scale-125 transition ease-out duration-300 hover:shadow-inner hover:bg-opacity-100 flex items-center"
      >
        <a
          href=""
          class="text-customcolor-200 hover:text-customcolor-300 px-2 text-xs whitespace-no-wrap"
        >
          See All Products
        </a>
      </div>
    </div>
  </fragment>
</template>
<script>
export default {
  props: {
    title: {
      required: false,
      type: String,
      default: "All Categories"
    }
  }
};
</script>
