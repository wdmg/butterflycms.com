<template>
    <div>
        <hero></hero>
        <about></about>
        <screenshots></screenshots>
        <!-- Modules></Modules>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <navigation></navigation>
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
        <download-section></download-section>
        <carousel></carousel -->
    </div>
</template>
<script>
import Hero from "./components/Hero";
import About from "./components/About";
import Screenshots from "./components/Screenshots";
/*import Modules from "./components/Modules";
import BasicElements from "./components/BasicElements";
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import Navigation from "./components/Navigation";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import DownloadSection from "./components/DownloadSection";*/

export default {
  name: "components",
  components: {
    Hero,
    About,
    Screenshots,
    /*Modules,
    BasicElements,
    Inputs,
    CustomControls,
    Navigation,
    JavascriptComponents,
    Carousel,
    Icons,
    Examples,
    DownloadSection*/
  }
};
</script>
