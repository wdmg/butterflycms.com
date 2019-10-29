<template>
  <div>
    <hero></hero>
    <about></about>
    <screenshots></screenshots>
  </div>
</template>

<script>
  import Hero from "~/views/components/Hero";
  import About from "~/views/components/About";
  import Screenshots from "~/views/components/Screenshots";

  export default {
    name: "home",
    layout: "default",
    components: {
      Hero,
      About,
      Screenshots,
    }
  }
</script>
