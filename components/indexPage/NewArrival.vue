<template>
  <div class="w-full bg-white rounded-md p-2">
    <div class="text-base font-bold">
      <i class="fas fa-globe"></i> New Arrivals
    </div>
    <ul class="flex justify-between">
      <li v-for="m in 3" :key="m">
        <a href="">
          <!-- <img src="//i.alicdn.com/img/imgextra/i1/O1CN01ypfQ2q1zTydNAQ99D_!!6000000006716-0-tps-1000-1000.jpg_100x100.jpg" class="w-full transform hover:scale-110 transition ease-out duration-1000" alt=""> -->
          <!-- <img :src="art.image" alt="Awesome Image" /> -->
          <!-- backgroundImage: 'url(' + art.image + ')', -->
          <div
            class="exh-cover-img hover_increase"
            style="min-height:100px;"
            :style="{
              backgroundImage:
                'url(' +
                '//i.alicdn.com/img/imgextra/i1/O1CN01ypfQ2q1zTydNAQ99D_!!6000000006716-0-tps-1000-1000.jpg_100x100.jpg' +
                ')',
              backgroundColor: '#f7f7f7',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain'
            }"
          ></div>
          <div class="text-center">
            <p class="text-xs font-bold">120 BDT</p>
            <p class="text-xs">Trending Now</p>
          </div>
        </a>
      </li>
    </ul>
    <br />
  </div>
</template>
