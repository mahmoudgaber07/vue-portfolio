<template>
    <div v-if="loading">
        <Loader />
    </div>
    <div class="store-container" v-else>
        <div class="container">
            <div class="error" v-if="error">
                Error fetching product details.
            </div>
            <div class="row justify-content-center" v-else-if="products">
                <div class="col-12 col-lg-4" v-for="product in products" :key="product">
                    <StoreCard :title="product.title" :price="product.price" :img="product.images[0]"
                        :id="product.id" />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import StoreCard from './StoreCard.vue'
import axios from 'axios'
import { onMounted, reactive, ref, toRefs } from 'vue'
import useLoader from '@/composables/loader.js';
import Loader from '@/components/Loader.vue';
const { loading, start, stop } = useLoader();

export default {
    components: {
        StoreCard,
        Loader
    },
    setup() {
        let products = ref(null);
        const error = ref(false);
        const { loading, start, stop } = useLoader();
        const getproducts = () => {
            axios.get('https://dummyjson.com/products').then((res) => {
                products.value = res.data.products;
                stop();
            }).catch((err) => {
                error.value = true;
                stop();
                console.log(err)
            });
        }
        onMounted(() => {
            start();
            getproducts();
        })

        return {
            products,
            getproducts,
            error,
            loading,
            start,
            stop
        }
    }
}
</script>

<style lang="scss" scoped></style>