<template>
  <div>
    <ul class="grid grid-rows-2 grid-cols-5">
      <li class="row-span-2 w-full h-full">
        <div class="relative w-full h-full">
          <h1
            class="text-white text-base font-bold tracking-wider absolute top-0 sm:ml-10 mt-10 "
          >
            Selected Novelty Products
          </h1>

          <img
            src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png"
            alt=""
            class="h-full"
          />
          <p
            class="text-white text-xs font-bold px-4 rounded-full bg-customcolor-300 inline-block justify-items-center absolute bottom-0 sm:ml-10 mb-10"
          >
            Source Now
          </p>
        </div>
      </li>
      <li
        class="border-r border-b border-customcolor-300 md:flex"
        v-for="n in 8"
        :key="n"
      >
        <div class="w-full p-2">
          <p class="text-xs font-bold">120 BDT-120 BDT</p>
          <h3
            class="text-sm font-bold hover:text-customcolor-300 whitespace-wrap hidden sm:block"
          >
            Trending Now Trending Now Trending Now
          </h3>
          <p class="text-xs hidden sm:block">3.0 Pieces (Min. Order)</p>
        </div>
        <a href="" class="w-full">
          <img
            src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png"
            alt=""
            class="w-full"
          />
        </a>
      </li>
    </ul>
  </div>
</template>
