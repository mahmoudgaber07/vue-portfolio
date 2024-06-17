<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Type todo here" v-model="todoText" @keyup.enter="addTodo">
        <button class="btn btn-outline-secondary" type="button" @click="addTodo">
            <font-awesome-icon icon="fa-solid fa-square-plus" />
        </button>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex';
export default {
    setup() {
        const todoText = ref('');
        const store = useStore();
        const addTodo = () => {
            if(todoText.value === ''){
                alert('Please enter some text');
            }else{
                store.commit('addTodo', todoText.value);
                todoText.value = '';
            }
        }
        return {
            todoText,
            addTodo
        }
    }
}
</script>

<style lang="scss" scoped></style>