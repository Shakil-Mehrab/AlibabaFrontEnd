<template>
  <div class="bg-white">
    <ul class="w-full">
      <li
        class="p-2 text-sm font-semibold w-full hover:shadow-lg"
        v-for="n in 8"
        :key="n"
        @mouseover="myMarketUlLi(n)"
        @mouseleave="myMarketUlLiHide()"
      >
        <a
          href="#"
          class="flex justify-between justify-items-center hover:text-customcolor-300"
        >
          <img
            src="https://img.alicdn.com/imgextra/i1/O1CN01r7pL1J1DYSxOOPt7s_!!6000000000228-2-tps-990-400.png"
            class="w-8 h-6 inline-block mr-2"
            alt=""
          />
          <h6>Vehicles & Accessories {{ n }}</h6>

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
        <ul
          class="absolute shadow-sm bg-white z-50 w-1/2 mt-8"
          style="top:-10px;margin-left:15rem"
          v-if="n == myMarketLiUl"
        >
          <li class="p-2 text-sm font-semibold" v-for="m in 10" :key="m">
            <a href="" class="flex justify-between hover:text-customcolor-300">
              <span>Machinery / Vehicles & Accessories{{ m }}</span>
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
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myMarketLiUl: ""
    };
  },
  methods: {
    myMarketUlLi(arg) {
      this.myMarketLiUl = arg;
      console.log(arg);
    },
    myMarketUlLiHide() {
      this.myMarketLiUl = "";
    }
  }
};
</script>
