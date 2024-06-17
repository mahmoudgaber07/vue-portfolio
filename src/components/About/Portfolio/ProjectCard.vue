<template>
    <div class="col-12 col-lg-4 portfolio-item" v-motion-slide-visible-once-right :delay="200" :duration="1200">
        <div class="portfolio-wrap">
            <div class="portfolio-img">
                <img :src="props.image" alt="portfolio">
            </div>
            <div class="portfolio-text">
                <h3>{{ props.title }}</h3>
                <a class="btn" :href="props.link">
                    <font-awesome-icon icon="fa-solid fa-globe" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['image','title','link'],
    setup(props) {
        return {
            props
        }
    }
}
</script>

<style lang="scss" scoped></style>