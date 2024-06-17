<template>
  <div v-if="loading">
    <Loader />
  </div>
  <div v-else>
    <div class="hero">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 m-auto">
            <h1 class="my-3 px-2" v-motion-slide-visible-once-left :delay="200" :duration="1200">I'M</h1>
            <h1 class="my-3 px-2" v-motion-slide-visible-once-left :delay="200" :duration="1200">MAHMOUD GABER</h1>
            <p class="fs-3 px-2"  v-motion-slide-visible-once-left :delay="200" :duration="1200">FRONTEND DEVELOPER</p>
          </div>
          <div class="col-12 col-lg-6">
            <img class="img-fluid rounded-pill avatar-img" src="@/assets/images/MahmoudGaber_LinkedIn.png"
              alt="avatar-image" v-motion-roll-visible-once-right :delay="200" :duration="1200">
          </div>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6">
            <h2 class="main-heading" v-motion-slide-visible-once-left :delay="200" :duration="1200">ABOUT ME</h2>
            <h2 v-motion-slide-visible-once-left :delay="200" :duration="1200">3 Years Experience</h2>
            <p  v-motion-slide-visible-once-left :delay="200" :duration="1200">
              Passionate React developer with advanced training in
              modern frameworks. Builds beautiful, responsive web
              apps that prioritize intuitive user interfaces and flawless
              user experiences. Thrives on problem-solving and
              constantly seeks to push boundaries in front-end
              development, bringing a commitment to innovation to
              every project. Eager to leverage skills to contribute to a
              team-oriented environment and create exceptional web
              experiences.
            </p>
            <div class="skills" v-motion-slide-visible-once-left :delay="200" :duration="1200">
              <Skills title="WEB DESIGN" value="90%" />
              <Skills title="WEB DEVELOPMENT" value="90%" />
              <Skills title="MOBILE DEVELPMENT" value="50%" />
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <img class="img-fluid about-img" src="@/assets/images/about-2.jpg" alt="about-image" v-motion-slide-visible-once-right :delay="200" :duration="1200"/>
          </div>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="container">
        <h2 class="main-heading" v-motion-slide-visible-once-left :delay="200" :duration="1200">WHAT I DO</h2>
        <div class="row">
          <Service title="WEB DEVELOPMENT" icon="fa-solid fa-code" />
          <Service title="WEB DESIGN" icon="fa-solid fa-laptop" />
          <Service title="MOBILE DEVELOPMENT" icon="fa-brands fa-android" />
          <Service title="MOBILE DESIGN" icon="fa-solid fa-mobile" />
        </div>
      </div>
    </div>
    <Experince/>
    <Portfolio/>
    <Reviews/>
    
  </div>

</template>
<script>
import Skills from '../components/About/Skills.vue'
import Service from '../components/About/Services.vue'
import Loader from '@/components/Loader.vue';
import useLoader from '@/composables/loader.js';
import { onMounted } from 'vue';
import Reviews from '@/components/About/Reviews.vue';
import Experince from '@/components/About/Experince.vue';
import Portfolio from '@/components/About/Portfolio.vue';

export default {
  name: 'about',
  components: {
    Skills,
    Service,
    Reviews,
    Experince,
    Portfolio,
    Loader
  },
  setup() {
    const {loading, start, stop} = useLoader();
    onMounted(() => {
      stop();
    })
    return {
      loading,
      start,
      stop
    }
  }
}
</script>
<style></style>
