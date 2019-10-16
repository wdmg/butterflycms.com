<template>
    <base-dropdown tag="li" class="locale-switcher nav-item" v-model="$i18n.locale">
        <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="fa fa-language"></i>
            <span class="nav-link-inner--text">Language</span>
        </a>
        <li class="dropdown-item"
                v-for="locale in locales"
                :key="locale.id"
                :class="{ 'is-current': locale === activeLocale }">
            <a href="#" @click="setLocale(locale)">{{ getLanguageString(locale) }}</a>
        </li>
    </base-dropdown>
</template>

<script>

    import Vue from 'vue';
    //import VueCookie from 'cookie-universal-nuxt';
    import BaseDropdown from "@/components/BaseDropdown";

    //Vue.use(VueCookie);

    const localeStrings = {
        en: "English",
        nl: "Nederlands",
        ru: "Русский",
        ua: "Українська",
        fr: "Français",
        de: "Deutsch"
    };

    Vue.config.lang = 'en';
    console.log("Locale from cookie = " + Vue.config.lang + ": language = " + localeStrings[Vue.config.lang]);

    export default {
        props: {
            locales: {},
            showFull: Boolean,
            dropup: Boolean,
            locLabel: {
              type: String,
              default: ''
            }
        },
        data: function () {

            if (Vue.config.lang)
                this.$i18n.locale = Vue.config.lang;

            return {
                activeLocale: Vue.config.lang
            }
        },
        computed: {
            dropdownLbl: function () {
                return this.locLabel ? this.locLabel : this.activeLocale
            }
        },
        methods: {
            setLocale: function (locale) {
                Vue.config.lang = locale;
                console.log("New locale = " + Vue.config.lang + ": language = " + localeStrings[Vue.config.lang]);
                this.activeLocale = locale;
                this.$cookies.set('locale', locale, {
                  path: '/',
                  maxAge: 60 * 60 * 24 * 7
                });
                this.$i18n.locale = Vue.config.lang;
            },
            getLanguageString: function (locale) {
                return this.showFull ? localeStrings[locale] : locale;
            }
        },
        components: {
            BaseDropdown
        }
    }

</script>
