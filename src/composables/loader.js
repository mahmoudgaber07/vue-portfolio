import { ref } from 'vue';

export default function useLoader() {
    const loading = ref(true)
    const start = () => {
        loading.value = true;
    }
    const stop = () => {
        loading.value = false;
    }
    return{
        loading,
        start,
        stop
    }

}