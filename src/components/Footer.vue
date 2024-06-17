<template>
  <footer class="text-center text-lg-start text-white bg-dark">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              VUE-PORTFOLIO
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">LINK</h6>
            <p>
              <a class="text-white">LINK</a>
            </p>
            <p>
              <a class="text-white">LINK</a>
            </p>
            <p>
              <a class="text-white">LINK</a>
            </p>
            <p>
              <a class="text-white">LINK</a>
            </p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a class="text-white" href="https://www.linkedin.com/in/mahmoudgaber07">LINKEDIN</a>
            </p>
            <p>
              <a class="text-white" href="https://github.com/mahmoudgaber07">GITHUB</a>
            </p>
            <p>
              <a class="text-white" href="https://www.upwork.com/freelancers/mahmoudg64">UPWORK</a>
            </p>
            <p>
              <a class="text-white" href="https://www.behance.net/mahmoudgaber16">BEHANCE</a>
            </p>
          </div>

          <!-- Grid column -->
          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <a class="d-block pb-2 text-white">
              <font-awesome-icon icon="fa-solid fa-location-dot" class="me-2" />
              Egypt, Cairo Obour City
            </a>
            <a class="d-block pb-2 text-white" href="mailto:mahmoudgaber94@gmail.com">
              <font-awesome-icon icon="fa-solid fa-envelope" class="me-2" />
              mahmoudgaber94@gmail.com
            </a>
            <a class="d-block pb-2 text-white" href="tel:+201010708870">
              <font-awesome-icon icon="fa-solid fa-phone" class="me-2" />
              + 201 010 7088 70
            </a>
          </div>
          <!-- Grid column -->
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->

      <hr class="my-3">

      <!-- Section: Copyright -->
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <!-- Grid column -->
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <!-- Copyright -->
            <div class="p-3" v-motion-roll-visible-once-top :delay="200" :duration="1200">
              © {{currYear}} Copyright:
              <a class="text-white">mahmoudgaber07</a>
            </div>
            <!-- Copyright -->
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end social">
            <a class="btn btn-outline-light btn-floating m-1" role="button" href="https://www.facebook.com/MahmoudGaber07/" v-motion-roll-visible-once-top :delay="200" :duration="1200">
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </a>
            <a class="btn btn-outline-light btn-floating m-1" role="button" href="https://x.com/MahmoudGaber_50" v-motion-roll-visible-once-top :delay="200" :duration="1200">
              <font-awesome-icon icon="fa-brands fa-x-twitter" />
            </a>
            <a class="btn btn-outline-light btn-floating m-1" role="button" href="https://wa.me/+201010708870" v-motion-roll-visible-once-top :delay="200" :duration="1200">
              <font-awesome-icon icon="fa-brands fa-whatsapp" />
            </a>
            <a class="btn btn-outline-light btn-floating m-1" role="button" href="https://www.instagram.com/mahmoudgaber_50/" v-motion-roll-visible-once-top :delay="200" :duration="1200">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
          </div>

        </div>
      </section>
    </div>
  </footer>
</template>


<script setup>
    const currYear = new Date().getFullYear();
</script>

<style lang="scss" scoped></style>