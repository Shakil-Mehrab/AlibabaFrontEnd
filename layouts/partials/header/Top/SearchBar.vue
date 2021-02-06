<template>
  <fragment>
    <div
      class="border-t-2 border-b-2 border-l-2 border-customcolor-300 rounded-l-full overflow-hidden h-6 sm:h-10 absolute left-0"
    >
      <div
        class="px-4 sm:pt-2  bg-white border-r border-gray-400 h-full text-sm font-semibold"
      >
        <select name="userType" id="userType" class="focus:outline-none">
          <option value="1" class="whitespace-wrap">
            <span>Products</span>
            <svg
              class="w-4 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </option>
          <option value="2">
            Suppliers
            <svg
              class="w-4 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </option>
        </select>
      </div>
    </div>
    <input
      type="search"
      class="flex-grow border-2 border-customcolor-300 h-6 sm:h-10 px-2 focus:outline-none rounded-full"
    />
    <div
      class="border-t-2 border-b-2 border-r-2 border-customcolor-300 rounded-r-full bg-customcolor-300 text-white tracking-wider overflow-hidden h-6 sm:h-10 absolute right-0"
    >
      <div class="px-1 sm:px-4 sm:pt-2 h-full">
        <svg
          class="w-4 sm:w-6 inline-block mb-1 text-xs sm:text-sm sm:font-semibold"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  </fragment>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
