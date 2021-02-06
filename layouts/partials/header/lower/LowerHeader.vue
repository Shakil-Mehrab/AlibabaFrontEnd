<template>
  <div v-click-outside="hide">
    <div class="container p-2 mx-auto">
      <div class="flex items-center justify-between relative">
        <div
          class="pr-2"
          @mouseover="rootCategory = true"
          @mouseleave="rootCategory = false"
        >
          <a href="#" class="whitespace-no-wrap">
            <i class="fas fa-list text-gray-600 text-sm"></i>
            Categories
          </a>
          <div
            class="absolute top-0 shadow-lg bg-white z-50 mt-6 w-64"
            v-show="rootCategory"
          >
            <RootCategory :categories="treeCategories" />
          </div>
        </div>
        <HatirpalInfo />
        <div class="pl-2 md:hidden">
          <a
            href="#"
            class="whitespace-no-wrap"
            @click.prevent="menuList = !menuList"
          >
            <svg
              class="w-8 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <MobileMenu :menuList="menuList" />
  </div>
</template>
<script>
import MobileMenu from "@/layouts/partials/header/mobileMenu/MobileMenu";
import RootCategory from "@/layouts/partials/header/lower/RootCategory";
import HatirpalInfo from "@/layouts/partials/header/lower/HatirpalInfo";
import ClickOutside from "vue-click-outside";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menuList: false,
      rootCategory: false
    };
  },
  components: {
    MobileMenu,
    RootCategory,
    HatirpalInfo
  },
  computed: {
    ...mapGetters({
      treeCategories: "treeCategories"
    })
  },
  directives: {
    ClickOutside
  },
  methods: {
    hide() {
      this.menuList = false;
    }
  }
};
</script>

