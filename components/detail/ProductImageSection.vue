<template>
  <div class="mt-5">
    <div class="relative z-40">
      <zoom-on-hover
        v-if="idOfImage.thumbnail"
        :img-normal="idOfImage.thumbnail"
        :img-zoom="idOfImage.thumbnail"
        :scale="2.5"
        :disabled="false"
        @loaded="onload"
        @resized="onresize"
      >
      </zoom-on-hover>
      <div class="absolute bottom-0 left-0 right-0" align="center">
        <span class="text-sm text-customcolor-300">{{ serial }}/7</span>
      </div>
    </div>
    <br />
    <div v-if="product.variations">
      <client-only>
        <carousel
          class="product-detail-slider"
          :perPageCustom="[[200, 5]]"
          :loop="true"
          :navigationEnabled="true"
        >
          <slide v-for="(variation, index) in product.variations" :key="index">
            <div class="mx-1">
              <a href="#" @mouseover="selectImage(variation, index + 1)">
                <img :src="variation.thumbnail" class="w-full" alt="" />
              </a>
            </div>
          </slide>
        </carousel>
      </client-only>
    </div>
    <div v-else class="text-center">
      No variation
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      idOfImage: this.product,
      serial: 1
    };
  },
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  methods: {
    selectImage(img, serial) {
      this.idOfImage = img;
      this.serial = serial;
    }
  }
};
</script>
<style>
.product-detail-slider .VueCarousel-navigation {
  position: absolute;
  width: 100%;
  justify-content: space-between;
  top: 45%;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}
.product-detail-slider .VueCarousel-navigation-button {
  color: #775ba7;
}
.product-detail-slider .VueCarousel-navigation-prev {
  border: none !important;
  left: 24px;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
}
.product-detail-slider .VueCarousel-navigation-next {
  border: none !important;
  right: 24px;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
}
.product-detail-slider .VueCarousel-navigation-button[data-v-453ad8cd]:focus {
  outline: none;
}
.product-detail-slider .VueCarousel-dot-container {
  display: none !important;
}
</style
