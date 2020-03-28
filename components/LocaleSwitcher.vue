<template>
    <base-dropdown tag="li" class="locale-switcher nav-item" v-model="$i18n.locale">
        <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="fa fa-language"></i><span class="nav-link-inner--text">{{ dropdownLabel }}</span>
        </a>
        <li class="dropdown-item"
                v-for="locale in locales"
                :key="locale.id"
                :class="{ 'is-current': locale === activeLocale }">
            <a href="#" @click="setLocale(locale)">
              <img :src="getLanguageFlag(locale)" width="24" class="mr-1" />
              {{ getLanguageString(locale) }}
            </a>
        </li>
    </base-dropdown>
</template>

<script>

    import Vue from 'vue';
    //import VueCookie from 'cookie-universal-nuxt';
    import BaseDropdown from "@/components/BaseDropdown";

    //Vue.use(VueCookie);

    // Locale by default
    Vue.config.lang = 'en';
    Vue.config.locales = {
        default: "en",
        support: [
          "en",
          //"nl",
          "ru",
          "uk",
          //"fr",
          //"de"
        ],
        strings: {
          en: "English",
          nl: "Nederlands",
          ru: "Русский",
          uk: "Українська",
          fr: "Français",
          de: "Deutsch"
        },
        flags: {
          en: "../../img/flags/en.svg",
          nl: "../../img/flags/nl.svg",
          ru: "../../img/flags/ru.svg",
          uk: "../../img/flags/uk.svg",
          fr: "../../img/flags/fr.svg",
          de: "../../img/flags/de.svg"
        }
    };

    function getCookie(cname) {
      if (!(typeof document === 'undefined')) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookie = decodedCookie.split(';');
        for (let i = 0; i < cookie.length; i++) {
          let c = cookie[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
      }
      return false;
    }

    function getClient() {
      if (!(typeof window === 'undefined')) {
        return window.navigator ? (window.navigator.language ||
          window.navigator.systemLanguage ||
          window.navigator.userLanguage) : Vue.config.locales.default;
      }
      return false;
    }

    function getDetectedLocale() {
      let client = getClient();
      if (client) {
        return (client.search('-') > 0) ?
          client.substring(0, client.search('-')).toLowerCase() :
          client.toLowerCase();
      }
      return false;
    }

    export default {
        props: {
            locales: {},
            showFull: Boolean,
            dropup: Boolean,
            locLabel: {
              type: String,
              default: 'Language'
            }
        },
        data: function () {

            var locale = getCookie('locale');
            if (!locale) {
              let locale = getDetectedLocale();
              if (locale) {
                console.log("Set detected locale: " + locale);
              } else {
                console.log("Load default locale: " + Vue.config.lang);
                locale = Vue.config.lang;
              }
            } else {
              console.log("Set locale from cookie: " + locale);
            }

            this.$i18n.locale = locale;

            return {
                activeLocale: locale
            }
        },
        computed: {
            dropdownLabel: function () {
                //return this.locLabel ? this.locLabel : getLanguageString(this.activeLocale)
                return this.activeLocale ? this.getLanguageString(this.activeLocale) : this.locLabel;
            }
        },
        methods: {
            setLocale: function (locale) {
                Vue.config.lang = locale;
                console.log("New locale = " + Vue.config.lang + ": language = " + Vue.config.locales.strings[Vue.config.lang]);
                this.activeLocale = locale;
                this.$cookies.set('locale', locale, {
                  path: '/',
                  maxAge: 60 * 60 * 24 * 7
                });
                this.$i18n.locale = Vue.config.lang;
                return this.$root.$emit('localeChange', locale);
            },
            getLanguageFlag: function (locale) {
                return Vue.config.locales.flags[locale];
            },
            getLanguageString: function (locale) {
                return this.showFull ? Vue.config.locales.strings[locale] : locale;
            }
        },
        components: {
            BaseDropdown
        }
    }

</script>
