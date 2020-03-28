<template>
  <div>
    <hero></hero>
  </div>
</template>

<script>
  import Hero from "~/views/components/Hero";

  export default {
    name: "home-page",
    layout: "index",
    components: {
      Hero,
    }
  }
</script>
