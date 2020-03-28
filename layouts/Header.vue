<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
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
        <!-- li class="nav-item">
            <a href="#about" class="nav-link" target="_blank" rel="noopener">About</a>
        </li>
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
            <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                <i class="ni ni-ui-04 d-lg-none"></i>
                <span class="nav-link-inner--text">Overview</span>
            </a>
            <div class="dropdown-menu-inner">
                <router-link to="/guide" class="media d-flex align-items-center">
                    <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                        <i class="ni ni-spaceship"></i>
                    </div>
                    <div class="media-body ml-3">
                        <h6 class="heading text-primary mb-md-1">Getting started</h6>
                        <p class="description d-none d-md-inline-block mb-0">Get started with Butterfly.CMS your most powerful web application.</p>
                    </div>
                </router-link>
                <router-link to="/docs" class="media d-flex align-items-center">
                    <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                        <i class="ni ni-ui-04"></i>
                    </div>
                    <div class="media-body ml-3">
                        <h5 class="heading text-warning mb-md-1">Modules & Components</h5>
                        <p class="description d-none d-md-inline-block mb-0">Learn how to use Butterfly.CMS modules and components.</p>
                    </div>
                </router-link>
            </div>
        </base-dropdown -->
        <!-- base-dropdown tag="li" class="nav-item">
            <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                <i class="ni ni-collection d-lg-none"></i>
                <span class="nav-link-inner--text">Examples</span>
            </a>
            <router-link to="/landing" class="dropdown-item">Landing</router-link>
            <router-link to="/profile" class="dropdown-item">Profile</router-link>
            <router-link to="/login" class="dropdown-item">Login</router-link>
            <router-link to="/register" class="dropdown-item">Register</router-link>
        </base-dropdown -->
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
