<template>
  <div id="app">
    <app-header />
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <nuxt />
      </fade-transition>
    </main>
    <app-footer />
  </div>
</template>

<script>
  import i18n from '~/i18n';
  import Header from "~/layouts/Header";
  import Footer from "~/layouts/Footer";
  import { FadeTransition } from "vue2-transitions";

  import '~/assets/scss/styles.scss';
  import "~/assets/vendor/nucleo/css/nucleo.css";
  import "~/assets/vendor/font-awesome/css/font-awesome.css";
  import globalComponents from "~/plugins/globalComponents";
  import globalDirectives from "~/plugins/globalDirectives";
  import VueLazyload from "vue-lazyload";
  //import ClickOutside from "~/directives/click-ouside.js";

  export default {
    i18n,
    //ClickOutside,
    install(Vue) {
      Vue.use(globalComponents);
      Vue.use(globalDirectives);
      Vue.use(VueLazyload);
    },
    components: {
      FadeTransition,
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>
