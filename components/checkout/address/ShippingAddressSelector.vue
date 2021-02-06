<template>
  <div class="bg-white">
    <h1 class="text-base font-bold">Select Shipping Address</h1>
    <div class="flex justify-between my-5" v-for="n in 10" :key="n">
      <div>
        Nayakandi<br />
        Nayakandi ,Jalirpur Nayakandi ,Jalirpur<br />
        Gopalgonj<br />
        7791<br />
        Banglasesh
      </div>
      <div>
        <a
          href=""
          class="text-sm bg-customcolor-300 text-white px-2 py-1 rounded-sm whitespace-no-wrap"
          @click.prevent="$emit('click', address)"
        >
          Ship Here
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
