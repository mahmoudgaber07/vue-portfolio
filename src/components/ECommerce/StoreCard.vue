<template>
         <div class="product-card">
             <div class="image-holder position-relative">
                 <img :src="props.img" alt="product-item" class="img-fluid w-100">
                <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                        <a href="#" class="btn btn-medium btn-black" @click="addItemToCart(props)">
                            Add to Cart
                            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                        </a>
                        <router-link class="btn btn-medium btn-black" :to="{ name: 'ProductDetail', params: { id: props.id } }">View</router-link>
                    </div>
                </div>
             </div>
             <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                 <h3 class="card-title text-uppercase">
                     <a href="#">{{props.title}}</a>
                 </h3>
                 <span class="item-price">{{props.price}}</span>
             </div>
         </div>

</template>

<script>
import { useStore } from 'vuex';
export default {
    props:['img','title','price','id'],
    setup(props) {
        const store = useStore();
        const addItemToCart = (product) => {
        store.commit("addToCart", product);
    };
        return {
            props,
            addItemToCart
        }
    }
}
</script>

<style lang="scss" scoped>
</style>