<template>
    <h6 class="mb-0">Shopping cart</h6>
    <div class="d-flex justify-content-between">
        <span class="py-2">You have {{ totalqty }} items in your cart</span>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded" v-for="cart in cartItems"
        :key="cart.id">
        <div class="d-flex flex-row">
            <img class="rounded" :src="cart.img" width="40" />
            <div class="ms-2">
                <span class="font-weight-bold d-block">{{ cart.title }}</span>
                <span class="spec">{{ cart.description }}</span>
            </div>
        </div>
        <div class="d-flex flex-row align-items-center">
            <span class="d-block">{{ cart.quantity }}</span>
            <span class="d-block ms-5 font-weight-bold me-3">{{ cart.totalprice }}</span>
            <button class="btn btn-black" @click="remveItem(cart)">
                <font-awesome-icon icon="fa-solid fa-trash" class="fs-5" />
            </button>
        </div>
    </div>
    <div class="d-flex justify-content-between align-items-center items p-2">
        <span class="d-block fw-bold ">TOTAL</span>
        <span class="d-block ms-5 font-weight-bold ms-auto px-2">{{ totalAmount }}</span>
        <button class="btn btn-black" @click="removeAllItems()">
            <font-awesome-icon icon="fa-solid fa-trash-can" class="fs-5" />
        </button>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    props: ['tAmount', 'tQty', 'cItems'],
    emits: ['rmItem', 'rmAllItems'],
    setup(props, context) {
        const cartItems = computed(() => props.cItems);
        const totalAmount = computed(() => props.tAmount);
        const totalqty = computed(() => props.tQty);
        const remveItem = (item) => {
            context.emit('rmItem', item)
        }
        const removeAllItems = () => {
            context.emit('rmAllItems')
        }
        return {
            cartItems,
            totalAmount,
            totalqty,
            remveItem,
            removeAllItems
        }
    }
}
</script>

<style lang="scss" scoped></style>