<template>
  <div
    class="md:hidden absolute top-0 bg-black bg-opacity-50 z-50 w-10/12 transition duration-500 ease-in-out"
    v-show="menuList"
  >
    <div class="p-2 bg-white w-64 xs:w-1/2 transition duration-500 ease-in-out">
      <div class="px-2">
        <ul class="">
          <li
            class="px-2 py-2 text-base font-semibold"
            v-for="m in 20"
            :key="m"
            @click.prevent="myMarketLiUl(m)"
          >
            <a href="" class=" hover:text-customcolor-300">
              <span>Machinery / {{ menuList }} & Accessories ddf{{ m }} </span>
              <svg
                class="w-4 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <ul class="ml-4" v-if="myMarket == m">
              <li><a href="">fgvfdfdf dfgf</a></li>
              <li><a href="">fgvfdfdf dfgf</a></li>
              <li><a href="">fgvfdfdf dfgf</a></li>
              <li><a href="">fgvfdfdf dfgf</a></li>
              <li><a href="">fgvfdfdf dfgf</a></li>
              <li><a href="">fgvfdfdf dfgf</a></li>
              <li><a href="">fgvfdfdf dfgf</a></li>
              <li><a href="">fgvfdfdf dfgf</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myMarket: ""
    };
  },
  props: {
    menuList: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    myMarketLiUl(arg) {
      if (this.myMarket == "") {
        this.myMarket = arg;
      } else {
        this.myMarket = "";
      }
    }
  }
};
</script>
