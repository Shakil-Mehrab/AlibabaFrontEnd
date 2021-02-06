<template>
  <div>
    <div class="flex justify-between items-center py-2">
      <div class="text-2xl font-bold sm:whitespace-no-wrap mr-2">
        CHOOSE YOUR SUPPLIERS BY REGIONS
      </div>
      <div class="border-b-4 border-gray-600 w-full rounded-md"></div>
    </div>
    <div class="flex items-center justify-between">
      <div>
        <ul class="flex flex-wrap">
          <li class="pr-2" v-for="n in 10" :key="n">
            <a class="flex items-center" href="">
              <img
                src="//img.alicdn.com/tfs/TB18omIbIrI8KJjy0FhXXbfnpXa-48-48.png"
                alt="Awesome Image"
              />
              <span class="text-xl font-bold mx-2  hover:text-customcolor-300">
                USA
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="text-sm font-bold sm:whitespace-no-wrap mx-2">
        See All Region
        <i class="fas fa-arrow-right text-sm"></i>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
export default {};
</script>
