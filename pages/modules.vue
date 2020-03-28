<template>
  <list></list>
</template>

<script>

  import Modules from "~/views/components/Modules";

  export default {
    name: "modules-page",
    layout: "inner",
    components: {
      'list': Modules
    }
  }
</script>
