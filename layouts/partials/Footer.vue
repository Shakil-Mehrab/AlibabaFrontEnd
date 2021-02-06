<template>
  <div class="bg-customcolor-300 text-white w-full">
    <div class="container mx-auto">
      <div class="flex flex-wrap px-2">
        <div class="w-1/2 md:w-1/4 text-center" v-for="n in 4" :key="n">
          <div
            class="text-base py-2 mt-16 bg-background-600 whitespace-no-wrap"
          >
            About PressRoom
          </div>
          <div>
            <ul class="">
              <li v-for="n in 5" :key="n">
                <a href="#" class="text-xs">33 Farlane Street</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div class="text-center text-xs">
        &copy; All Right Reserved By Hatirpal.com. Developed By:Md Shakil Sarder
      </div>
      <br />
    </div>
  </div>
</template>
