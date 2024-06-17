<template>
    <Header />
    <RouterView />
    <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'defaultLayout',
    components: {
        Header,
        Footer
    },
}
</script>

<style lang="scss" scoped></style>