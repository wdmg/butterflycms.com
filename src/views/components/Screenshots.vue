<template>
    <section class="section section-components pb-0" id="section-screenshots">
        <div class="container container-lg">
            <div class="row justify-content-center text-center mb-3">
                <div class="col-lg-8">
                    <h4 class="display-4 mb-4">Screenshots of the <b>Butterfly.CMS</b> admin panel</h4>
                </div>
            </div>
            <div class="row mb-sm">
                <div
                    class="col-md-4 mb-3 mb-lg-4"
                    v-for="(image, index) in images"
                >
                    <div class="card card-lift--hover shadow border-0">
                        <img
                            v-lazy="image.src"
                            class="card-img"
                            @click="openGallery(index)"
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
    <LightBox
        :images="images"
        ref="lightbox"
        :show-caption="true"
        :show-light-box="false"
    >
    </LightBox>
</template>
<script>
    import LightBox from 'vue-image-lightbox';
    require('vue-image-lightbox/dist/vue-image-lightbox.min.css');
    export default {
        components: {
            LightBox,
        },
        data() {
            return {
                images: [
                    {
                        src: '/img/screenshots/01_example.com.png',
                        thumb: '/img/screenshots/01_example.com_thumb.png',
                        caption: 'Butterfly.CMS'
                    },
                    {
                        src: '/img/screenshots/02_example.com.png',
                        thumb: '/img/screenshots/02_example.com_thumb.png',
                        caption: 'Butterfly.CMS'
                    },
                    {
                        src: '/img/screenshots/03_example.com.png',
                        thumb: '/img/screenshots/03_example.com_thumb.png',
                        caption: 'Butterfly.CMS'
                    },
                    {
                        src: '/img/screenshots/04_example.com.png',
                        thumb: '/img/screenshots/04_example.com_thumb.png',
                        caption: 'Butterfly.CMS'
                    },
                    {
                        src: '/img/screenshots/05_example.com.png',
                        thumb: '/img/screenshots/05_example.com_thumb.png',
                        caption: 'Butterfly.CMS'
                    },
                    {
                        src: '/img/screenshots/06_example.com.png',
                        thumb: '/img/screenshots/06_example.com_thumb.png',
                        caption: 'Butterfly.CMS'
                    },
                    {
                        src: '/img/screenshots/07_example.com.png',
                        thumb: '/img/screenshots/07_example.com_thumb.png',
                        caption: 'Butterfly.CMS'
                    },
                    {
                        src: '/img/screenshots/08_example.com.png',
                        thumb: '/img/screenshots/08_example.com_thumb.png',
                        caption: 'Butterfly.CMS'
                    },
                    {
                        src: '/img/screenshots/09_example.com.png',
                        thumb: '/img/screenshots/09_example.com_thumb.png',
                        caption: 'Butterfly.CMS'
                    },
                ]
            }
        },
        methods: {
            openGallery(index) {
                this.$refs.lightbox.showImage(index);
            }
        }
    }
</script>
<style>
</style>
