<template>
  <div style="position: relative">
    <header class="header-global">
    <base-nav type="default" effect="dark" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/" style="margin-top: -6px;">
        <img src="/img/logotype-inline-white.png" alt="Butterfly.CMS" title="Butterfly.CMS - { $t('Сontent management system (CMS)') }">
      </router-link>
      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <router-link slot="brand" to="/">
            <img src="/img/logotype-inline.png" alt="Butterfly.CMS" title="Butterfly.CMS - { $t('Сontent management system (CMS)') }">
          </router-link>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <router-link to="/about" class="nav-link">{{ $t('About') }}</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/modules" class="nav-link">{{ $t('Modules') }}</router-link>
        </li>
        <!-- li class="nav-item">
          <router-link to="/docs" class="nav-link">{{ $t('Documentation') }}</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link">{{ $t('Contacts') }}</router-link>
        </li -->
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://www.facebook.com/ButterflyCMS-108168870523437" target="_blank" rel="noopener"
             data-toggle="tooltip" title="Follow us on Facebook">
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://vk.com/butterfly_cms"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on VK">
            <i class="fa fa-vk"></i>
            <span class="nav-link-inner--text d-lg-none">VKontakte</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://twitter.com/butterfly_cms" target="_blank" rel="noopener"
             data-toggle="tooltip" title="Follow us on Twitter">
            <i class="fa fa-twitter-square"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://github.com/wdmg/butterfly.cms"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
        <locale-switcher :locales="locales" :show-full="true"></locale-switcher>
      </ul>
    </base-nav>
  </header>
  </div>
</template>

<script>
  import Vue from 'vue';
  import BaseNav from "~/components/BaseNav";
  import BaseButton from "~/components/BaseButton";
  import BaseDropdown from "~/components/BaseDropdown";
  import CloseButton from "~/components/CloseButton";
  import LocaleSwitcher from "~/components/LocaleSwitcher";

  export default {
    data: function () {
      return {
        locales: Vue.config.locales.support
      }
    },
    components: {
      BaseNav,
      CloseButton,
      BaseButton,
      BaseDropdown,
      LocaleSwitcher
    }
  };
</script>

<style></style>
