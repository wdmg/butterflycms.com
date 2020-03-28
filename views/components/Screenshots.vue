<template>
    <section class="section section-screenshots pb-0" id="section-screenshots">
        <div class="container container-lg">
            <div class="row justify-content-center text-center mb-3">
              <div class="col-lg-8">
                  <h4 class="display-4 mb-4">{{ $t('Screenshots of the Butterfly.CMS admin panel') }}</h4>
              </div>
            </div>
            <div class="row mb-sm">
              <div class="col-md-4 mb-3 mb-lg-4" v-for="(image, index) in images" v-bind:key="image.src">
                  <a :href="image.src" :title="image.caption" class="card card-lift--hover shadow border-0" v-on:click.prevent="openGallery(index)">
                      <img v-lazy="image.src" class="card-img" />
                  </a>
              </div>
              <light-box :images="images" ref="lightbox" :show-caption="true" :show-light-box="false"></light-box>
            </div>
        </div>
    </section>
</template>

<script>

    import Vue from 'vue';
    import imagesEn from '../../static/data/en/screenshots.json';
    import imagesRu from '../../static/data/ru/screenshots.json';
    import siteLoading from '../../static/img/siteloading.gif';

    export default {
        data () {
            return {
              images: [],
              siteLoading
            }
        },
        created() {
          if (Vue.config.lang == 'ru' || Vue.config.lang == 'ua')
            this.images = imagesRu;
          else
            this.images = imagesEn;

        },
        mounted() {
          var _this = this;
          this.$root.$on('localeChange', function (locale) {
            if (locale == 'ru' || locale == 'ua')
              _this.images = imagesRu;
            else
              _this.images = imagesEn;
          });
        },
        methods: {
            openGallery(index) {
                this.$refs.lightbox.showImage(index);
            }
        }
    }
</script>
