<template>
    <section class="section section-components mt-0" id="section-about">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <h3>{{ $t('Welcome!') }}</h3>
                    <div v-html="$t('home.about-section')"></div>
                    <p style="text-align: center;">
                        <a class="btn btn-secondary" href="https://github.com/wdmg/butterfly.cms/archive/1.0.18.zip" target="_blank">{{ $t('Download') }} [v1.0.18]</a>
                        <a class="btn btn-primary" href="https://github.com/wdmg/butterfly.cms/graphs/contributors" target="_blank">{{ $t('Join to Us') }}!</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
