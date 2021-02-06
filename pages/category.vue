<template>
  <div>
    <div class="container mx-auto flex">
      <div class="w-3/12">
        <LeftFilterSection />
      </div>
      <div
        class="w-9/12 ml-1 sm:ml-5 border-l border-customcolor-300 pl-1 sm:pl-5"
      >
        <RightListSection />
      </div>
    </div>
  </div>
</template>
<script>
import LeftFilterSection from "@/components/category/LeftFilterSection";
import RightListSection from "@/components/category/RightListSection";

export default {
  components: {
    LeftFilterSection,
    RightListSection
  }
};
</script>
