<template>
    <section class="section section-components pb-0" id="section-screenshots">
        <div class="container container-lg">
            <div class="row justify-content-center text-center mb-3">
                <div class="col-lg-8">
                    <h4 class="display-4 mb-4">{{ $t('Screenshots of the Butterfly.CMS admin panel') }}</h4>
                </div>
            </div>
            <div class="row mb-sm">
                <div class="col-md-4 mb-3 mb-lg-4" v-for="(image, index) in images">
                    <div class="card card-lift--hover shadow border-0">
                        <img v-lazy="image.src" class="card-img" @click="openGallery(index)" />
                    </div>
                </div>
                <LightBox :images="images" ref="lightbox" :show-caption="true" :show-light-box="false"></LightBox>
            </div>
        </div>
    </section>
</template>

<script>
    import LightBox from 'vue-image-lightbox';
    require('vue-image-lightbox/dist/vue-image-lightbox.min.css');
    import images from './../../screenshots';
    import siteLoading from './../../siteloading.gif';
    export default {
        components: {
            LightBox,
        },
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
