<template>
  <div>
    <br />
    <div class="container mx-auto bg-white">
      <div class="flex">
        <div class="hidden md:block sm:w-4/12 lg:w-3/12 xl:w-2/12 relative">
          <div
            class="font-bold text-sm uppercase text-center border-b-2 border-gray-200"
          >
            My Markets
          </div>
          <RootCategory :categories="selectedCategories" />
        </div>
        <div class="w-full md:w-8/12 lg:w-9/12 xl:w-10/12">
          <div class="flex flex-wrap">
            <MainSlider />
            <TrendingConsumer
              endpoints="products?categories=norwood&per-page=12"
            />
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <NewArrival />
        <NewArrival />
        <NewArrival />
      </div>
    </div>
    <br />
    <div class="container mx-auto sm:flex bg-white">
      <div class="w-full overflow-hidden  sm:w-2/12 relative">
        <CategoryHeading title="Electronics" />
      </div>
      <div class="w-full sm:w-10/12">
        <SlideSectionOne
          endpoints="products?categories=richie&per-page=12"
          :short_des="true"
          :skeleton="6"
        />
      </div>
    </div>
    <div class="md:mx-10">
      <div class="flex justify-between items-center py-2 w-full">
        <div
          class="text-2xl font-bold whitespace-no-wrap mr-2 text-customcolor-400"
        >
          Choose Your Product
        </div>
        <div class="rounded-md text-sm font-bold">
          <a href="" class="text-customcolor-200 hover:text-customcolor-300">
            See All Products
            <i class="fas fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>
      <SlideSectionOne
        endpoints="products?categories=richie&per-page=12"
        :short_des="true"
        :skeleton="10"
      />
    </div>
    <br />
    <div class="container mx-auto">
      <div class="flex justify-between items-center py-2">
        <div
          class="text-2xl font-bold whitespace-no-wrap mr-2 text-customcolor-400"
        >
          JUST FOR YOU
        </div>
        <div class="border-b-4 border-gray-600 w-full rounded-md"></div>
      </div>
      <JustForYou
        endpoints="products?categories=richie&per-page=12"
        :short_des="true"
        :skeleton="10"
      />
    </div>
    <br />
    <div class="md:mx-10">
      <!-- <SlideSectionOne /> -->
    </div>
    <br />
    <div class="container mx-auto">
      <SupplierRegion />
    </div>
  </div>
</template>
<script>
import RootCategory from "@/layouts/partials/header/lower/RootCategory";
import MainSlider from "@/components/indexPage/TopSection/MainSlider";
import TrendingConsumer from "@/components/indexPage/TopSection/TrendingConsumer";
import NewArrival from "@/components/indexPage/NewArrival";
import CategoryHeading from "@/components/indexPage/Heading/CategoryHeading";
import CategorySection from "@/components/indexPage/CategorySection";
import SlideSectionOne from "@/components/indexPage/ProductSlide/SlideSectionOne";
import JustForYou from "@/components/indexPage/JustForYou";
import SupplierRegion from "@/components/indexPage/SupplierRegion";
import { mapGetters } from "vuex";

export default {
  components: {
    RootCategory,
    MainSlider,
    TrendingConsumer,
    NewArrival,
    CategorySection,
    CategoryHeading,
    SlideSectionOne,
    JustForYou,
    SupplierRegion
  },
  computed: {
    ...mapGetters({
      selectedCategories: "selectedCategories"
    })
  },
  async asyncData({ app }) {
    let response = await app.$axios.$get("products");

    return {
      products: response.data
    };
  }
};
</script>
