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
                    <div class="card card-lift--hover shadow border-0">
                        <img v-lazy="image.src" class="card-img" @click="openGallery(index)" />
                    </div>
                </div>
                <client-only>
                  <LightBox :images="images" ref="lightbox" :show-caption="true" :show-light-box="false"></LightBox>
                </client-only>
            </div>
        </div>
    </section>
</template>

<script>
    import images from './../../screenshots';
    import siteLoading from './../../siteloading.gif';

    export default {
        data () {
            return {
                images,
                siteLoading,
            }
        },
        methods: {
            openGallery(index) {
                this.$refs.lightbox.showImage(index)
            }
        }
    }
</script>
