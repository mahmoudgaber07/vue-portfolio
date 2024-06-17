<template>
    <div class="container mt-5 p-3 rounded cart">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="product-details mr-2">
                    <div class="d-flex flex-row align-items-center">
                        <RouterLink to="/ecommerce" class="text-dark">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" />
                        <span class="ms-2">Continue Shopping</span>
                        </RouterLink>
                    </div>
                    <hr>
                    <div class="empty-cart" v-if="cartItems.length === 0">
                        <EmptyCart />
                    </div>
                    <div class="cart-container" v-else>
                        <Cart :tAmount="totalAmount" :tQty="totalqty" :cItems="cartItems" @rmItem="rmItem" @rmAllItems="rmAllItems"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import EmptyCart from '../components/ECommerce/Cart/EmptyCart.vue';
import Cart from '../components/ECommerce/Cart/Cart.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    components: {
        EmptyCart,
        Cart
    },
    setup() {
        const store = useStore();
        const cartItems = computed(() => store.getters.cartItems);
        const totalAmount = computed(() => store.getters.totalAmount);
        const totalqty= computed(() => store.getters.totalQty);
        const rmItem = (item) => {
            store.commit('removeFromCart',item);
        }
        const rmAllItems = () => {
            store.commit('removeAllCart');
        }
        return {
            cartItems,
            totalAmount,
            totalqty,
            rmItem,
            rmAllItems
        }
    }
}
</script>

<style lang="scss" scoped></style>