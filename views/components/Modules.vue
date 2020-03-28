<template>
  <section class="section section-components mt-0" id="section-about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <p v-html="$t('modules.intro')"></p>
          <p></p>
          <div class="table-responsive">
            <table class="table table-sm" v-if="modulesList">
              <thead>
              <tr>
                <th scope="col">{{ $t('ID') }}</th>
                <th scope="col">{{ $t('Repository') }}</th>
                <th scope="col">{{ $t('Version') }}</th>
                <th scope="col">{{ $t('Ready') }}</th>
              </tr>
              </thead>
              <tbody v-for="packageItem in packagesList" v-bind:key="packageItem.id">
              <caption>{{ packageItem.title }}</caption>
              <tr v-for="(moduleItem) in modulesList" v-bind:key="moduleItem.id" v-if="moduleItem.repository && packageItem.id === moduleItem.package">
                <td>{{ moduleItem.id }}</td>
                <td v-if="moduleItem.link">
                  <a :href="moduleItem.link" target="_blank" >{{ moduleItem.repository }}</a>
                </td>
                <td v-else>
                  {{ moduleItem.repository }}
                </td>
                <td>{{ moduleItem.version }}</td>
                <td>
                  <span v-if="moduleItem.ready === 'true'" class="ni ni-check-bold text-success"></span>
                  <span v-else-if="moduleItem.ready === 'false'" class="ni ni-fat-remove text-danger"></span>
                  <span v-else class="text-muted">{{ moduleItem.ready }}</span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import packagesJson from '../../static/data/packages-list.json';
import modulesJson from '../../static/data/modules-list.json';

export default {
  data() {
    return {
      packagesList: packagesJson,
      modulesList: modulesJson
    }
  }
};
</script>
<style>
</style>
