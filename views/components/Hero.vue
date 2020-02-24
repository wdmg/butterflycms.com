<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center mb-5">
                    <div class="col-lg-7 text-center">
                        <img src="/img/welcome.png" style="width: 320px;" class="img-fluid">
                        <p class="lead text-white mt-4 mb-2">{{ $t("We build an Innovative Content Management System based on Yii2 framework. It's Free and Open Source.") }}</p>
                        <div class="btn-wrapper">
                            <base-button tag="a"
                                         href="https://github.com/wdmg/butterfly.cms/archive/1.0.16.zip"
                                         class="mb-3 mb-sm-0"
                                         type="white"
                                         icon="fa fa-cloud-download">
                                {{ $t('Download') }} [1.0.16]
                            </base-button>
                            <base-button tag="a"
                                         href="https://github.com/wdmg/butterfly.cms"
                                         class="mb-3 mb-sm-0"
                                         type="primary"
                                         icon="fa fa-code">
                                {{ $t('Join to Us') }}
                            </base-button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-around mt-5">
                    <div class="col-sm-4 text-center text-sm-left">
                        <span class="text-white alpha-7">{{ $t("Powered by") }}</span>
                        <a href="https://www.yiiframework.com" target="_blank" title="Yii PHP Framework">
                            <img src="/img/brand/yiiframework-white-slim.png" class="ml-3" style="height: 36px; margin-top: -4px;">
                        </a>
                    </div>
                    <div class="col-sm-4 mt-4 pb-3 text-center text-sm-right">
                        <span class="text-white alpha-7">{{ $t("Coded by") }}</span>
                        <a href="https://wdmg.com.ua" target="_blank" title="W.D.M.Group, Ukraine">
                            <img src="/img/brand/wdmg-white-slim.png" class="ml-3" style="height: 42px; margin-top: -2px;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import BaseButton from "~/components/BaseButton";
export default {
  components: {
    BaseButton
  }
};
</script>

<style></style>
