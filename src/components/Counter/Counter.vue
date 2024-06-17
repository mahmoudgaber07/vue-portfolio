<template>
    <div class="counter">
        <div class="container">
            <CounterItem :counter="count"/>
            <CounterButton @increment="inc" @decrement="dec"/>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import CounterItem from './CounterItem.vue'
import CounterButton from './CounterButton.vue'
export default {
    components:{
        CounterItem,
        CounterButton
    },
    setup () {
        const count = ref(0);
        const inc = (val) => {
            count.value >= 0 ? count.value += val : null;
        };
        const dec = (val) => {
            count.value > 0 ? count.value -= val : null;
        };
        return {
            count,
            inc,
            dec
        }
    }
}
</script>

<style lang="scss" scoped>

</style>