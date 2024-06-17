<template>
    <div class="reviews">
        <div class="container-fluid">
            <div class="reviewcontainer text-center">
                <div class="icon">
                    <font-awesome-icon icon="fa-solid fa-quote-left" />
                </div>
                <div id="carouselReviews" class="carousel slide carouselReviews" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselReviews" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselReviews" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselReviews" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" v-motion-slide-visible-once-bottom :delay="200" :duration="1000">
                            <img src="@/assets/images/reviews/testimonial-1.jpg" class="d-block rounded-pill" alt="review">
                            <div class="review-description">
                                <p>Working with Mahmoud Gaber was an absolute pleasure. Their attention to detail and commitment to delivering a top-notch frontend experience is unparalleled. The website they developed for us is not only visually stunning but also incredibly user-friendly. I highly recommend their services to anyone looking for a professional and skilled frontend developer.</p>
                                <h5 class="c-name">Emily Johnson</h5>
                                <h6>Marketing Director at Digital Dreams</h6>
                            </div>
                        </div>
                        <div class="carousel-item" v-motion-slide-visible-once-bottom :delay="200" :duration="1000">
                            <img src="@/assets/images/reviews/testimonial-2.jpg" class="d-block rounded-pill" alt="review">
                            <div class="review-description">
                                <p>Mahmoud Gaber has a rare combination of technical expertise and creative flair. They took our ideas and turned them into a beautiful, responsive website that exceeded our expectations. The seamless integration and smooth user experience have significantly enhanced our online presence. We couldn't be happier with the results!</p>
                                <h5 class="c-name">David Thompson</h5>
                                <h6>Lead Developer at Web Wizards</h6>
                            </div>
                        </div>
                        <div class="carousel-item" v-motion-slide-visible-once-bottom :delay="200" :duration="1000">
                            <img src="@/assets/images/reviews/testimonial-3.jpg" class="d-block rounded-pill" alt="review">
                            <div class="review-description">
                                <p>I have collaborated with many developers, but Mahmoud Gaber stands out for their exceptional frontend development skills. They bring innovative solutions to the table and execute them flawlessly. Their code is clean, efficient, and well-documented, making it easy for our team to maintain and build upon. A true asset to any project!</p>
                                <h5 class="c-name">Sarah Lee</h5>
                                <h6>Product Manager at Creative Solutions</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped></style>