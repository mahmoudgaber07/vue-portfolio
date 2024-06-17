<template>
    <div class="text-center fs-1 bg-tertiary">{{ counter }}</div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
    props:['counter'],
    setup (props) {
        const localCounter = ref(props.counter);
        watch(() => props.counter, newValue => {
            localCounter.value = newValue;
        });
        return {
            counter: localCounter,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>