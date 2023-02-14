<template>
  <div v-if="width < 1000" class="mobile">
    <MobileGuide></MobileGuide>
  </div>
  <div v-else class="desktop">
    <DesktopGuide></DesktopGuide>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { useBreakpoints } from "../components/breakpoints";

const MobileGuide = defineAsyncComponent(() =>
  import("../components/initial/MobileGuide.vue")
);
const DesktopGuide = defineAsyncComponent(() =>
  import("../components/initial/DesktopGuide.vue")
);

const { width } = useBreakpoints();
</script>

<style lang="scss" scoped>
p {
  font-size: 2rem;
}
</style>
