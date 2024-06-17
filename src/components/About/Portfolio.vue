<template>
    <div  class="portfolio">
        <div class="container">
            <h2 class="main-heading">My Portfolio</h2>
            <div class="portolio-group-btn text-center my-3">
                <button class="btn btn-dark mx-2 px-3 py-2":class="{ active: activeTap === 'All' }" @click="activeTap = 'All'">ALL</button>
                <button class="btn btn-dark mx-2 px-3 py-2":class="{ active: activeTap === 'Web' }" @click="activeTap = 'Web'">WEB DEVELOPMENT</button>
                <button class="btn btn-dark mx-2 px-3 py-2":class="{ active: activeTap === 'Mobile' }" @click="activeTap = 'Mobile'">MOBILE APP</button>
            </div>
            <div class="row">
                <component :is="activeTap" :sahl="sahl" :settle="settle" :adviceovercoffe="adviceovercoffe" :mse="mse" :logicDesign="logicDesign" :waterWorlds="waterWorlds" :alkanaaco="alkanaaco" :saudiMarket="saudiMarket" :goalApp="goalApp"/>
            </div>

        </div>
    </div>
</template>

<script>
import All from './Portfolio/AllProjects.vue';
import Web from './Portfolio/WebProjects.vue';
import Mobile from './Portfolio/MobileProjects.vue';
import sahl from '@/assets/images/portfolio/Sahl.png';
import settle from '@/assets/images/portfolio/Settle-eg.png';
import adviceovercoffe from '@/assets/images/portfolio/adviceovercoffee.png';
import mse from '@/assets/images/portfolio/mse-edu-eg.png';
import logicDesign from '@/assets/images/portfolio/LD.jpg';
import waterWorlds from '@/assets/images/portfolio/waterworlds-sa.png';
import alkanaaco from '@/assets/images/portfolio/alkanaaco.png';
import saudiMarket from '@/assets/images/portfolio/saudimarket-ksa.png';
import goalApp from '@/assets/images/portfolio/goal-app.jpg';
import {ref} from 'vue'
export default {
    components:{
        All,
        Web,
        Mobile
    },
    setup () {
        let activeTap = ref('All');
        return {
            activeTap,
            sahl,
            settle,
            adviceovercoffe,
            mse,
            logicDesign,
            waterWorlds,
            alkanaaco,
            saudiMarket,
            goalApp
        }
    }
}
</script>

<style lang="scss" scoped>

</style>