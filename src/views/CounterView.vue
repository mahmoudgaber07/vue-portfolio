<template>
      <div v-if="loading">
    <Loader />
  </div>
  <div v-else>
      <Counter/>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Counter from '../components/Counter/Counter.vue'
import Loader from '../components/Loader.vue';
import useLoader from '@/composables/loader.js';
export default {
    components: {
        Counter,
        },
        setup () {
        const { loading, start, stop } = useLoader();
        onMounted(() => {
            stop();
        })

        return {
            loading,
            start,
            stop    
        }
    }
}
</script>

<style lang="scss" scoped>

</style>