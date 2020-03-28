<template>
  <div id="app">
    <app-header />
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <nuxt />
      </fade-transition>
    </main>
    <app-footer />
    <noscript><div><img src="https://mc.yandex.ru/watch/55144840" style="position:absolute; left:-9999px;" alt="Yandex.Metrika" /></div></noscript>
  </div>
</template>

<script>
  import Vue from 'vue';
  import i18n from "~/plugins/i18n";
  import Badge from "~/components/Badge";
  import BaseAlert from "~/components/BaseAlert";
  import BaseButton from "~/components/BaseButton";
  import BaseCheckbox from "~/components/BaseCheckbox";
  import BaseInput from "~/components/BaseInput";
  import BasePagination from "~/components/BasePagination";
  import BaseProgress from "~/components/BaseProgress";
  import BaseRadio from "~/components/BaseRadio";
  import BaseSlider from "~/components/BaseSlider";
  import BaseSwitch from "~/components/BaseSwitch";
  import Card from "~/components/Card";
  import Icon from "~/components/Icon";
  import Header from "~/layouts/Header";
  import Footer from "~/layouts/Footer";
  import { FadeTransition } from "vue2-transitions";
  import VueLazyload from "vue-lazyload";
  import ClickOutside from "~/directives/click-outside";

  Vue.use({
    install(Vue) {
      Vue.component(Badge.name, Badge);
      Vue.component(BaseAlert.name, BaseAlert);
      Vue.component(BaseButton.name, BaseButton);
      Vue.component(BaseInput.name, BaseInput);
      Vue.component(BaseCheckbox.name, BaseCheckbox);
      Vue.component(BasePagination.name, BasePagination);
      Vue.component(BaseProgress.name, BaseProgress);
      Vue.component(BaseRadio.name, BaseRadio);
      Vue.component(BaseSlider.name, BaseSlider);
      Vue.component(BaseSwitch.name, BaseSwitch);
      Vue.component(Card.name, Card);
      Vue.component(Icon.name, Icon);
      Vue.directive("click-outside", ClickOutside);
      Vue.use(VueLazyload);
    },
  });

  export default {
    i18n,
    components: {
      FadeTransition,
      'app-header': Header,
      'app-footer': Footer
    },
    directives: {
      ClickOutside
    }
  }
</script>
