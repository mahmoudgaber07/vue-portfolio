<template>
    <div v-if="loading">
            <Loader/>
        </div>
    <div class="container" v-else>
        <div class="error" v-if="error">
            Error fetching product details.
        </div>
        <div class="col-12 col-lg-6 single-product" v-else-if="product">
            <div class="d-flex flex-wrap justify-content-center gap-5">
                <h3 class="py-3 text-center">{{ product.title }}</h3>
                <span class="brand p-3 text-end rounded-pill">{{ product.brand }}</span>
            </div>
            <img :src="product.images[0]" alt="product" class="img-fluid single-product-image">
            <p class="product-descriptipn lh-lg">DESCRIPTION :{{ product.description }}</p>
            <p class="product-price">PRICE: {{ product.price }}</p>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import useLoader from '@/composables/loader.js';
import Loader from '@/components/Loader.vue';
export default {
    name: 'ProductDetail',
    components:{
        Loader
    },
    setup() {
        let product = ref(null);
        let error = ref(false);
        let route = useRoute();
        const { id } = route.params;
        let { loading, start, stop } = useLoader();
        const getproduct = () => {
            axios.get(`https://dummyjson.com/products/${parseInt(id)}`).then((res) => {
                product.value = res.data;
                stop();
            }).catch((err) => {
                error.value = true;
                stop();
                console.log(err)
            });
        }
        onMounted(() => {
            start();
            getproduct();
        });

        return {
            product,
            getproduct,
            error,
            loading,
            start,
            stop
        }

    }
}
</script>

<style lang="scss" scoped></style>