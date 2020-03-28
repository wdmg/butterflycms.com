<template>
  <div>
    <about></about>
    <screenshots></screenshots>
  </div>
</template>
<script>
  import About from "~/views/components/About";
  import Screenshots from "~/views/components/Screenshots";

  export default {
    name: "about-page",
    layout: "inner",
    components: {
      About,
      Screenshots,
    }
  }
</script>
