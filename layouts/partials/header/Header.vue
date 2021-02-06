<template>
  <fixed-header :threshold="100">
    <div class="bg-white shadow-sm navbar">
      <TopHeader />
      <hr />
      <div class="remove_lowheader_from_top_fixed">
        <LowerHeader />
      </div>
    </div>
  </fixed-header>
</template>
<script>
import FixedHeader from "vue-fixed-header";
import TopHeader from "@/layouts/partials/header/Top/TopHeader";
import LowerHeader from "@/layouts/partials/header/lower/LowerHeader";
export default {
  components: {
    TopHeader,
    LowerHeader,
    FixedHeader
  }
};
</script>
<style>
@media only screen and (min-width: 768px) {
  .navbar.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 9999;
  }
  /* by shakil */
  .navbar.vue-fixed-header--isFixed .remove_lowheader_from_top_fixed {
    display: none;
  }
}
</style>
