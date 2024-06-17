<template>
    <div class="container">
        <div v-if="todoItems.length == 0">
            <h4 class="py-5 text-danger">No Todo Items</h4>
        </div>
        <ul class="list-group" v-else>
            <li class="list-group-item" v-for="item in todoItems">
                <div class="d-flex justify-content-between align-items-center">
                    <input type="text" class="form-control" v-model="item.title">
                    <div class="d-flex">
                        <button class="btn btn-success mx-2" @click="editTodo(item)">
                            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                        </button>
                        <button class="btn btn-danger" @click="removeTodo(item)">
                            <font-awesome-icon icon="fa-solid fa-trash" />
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import store from '../../store/store.js'
import { computed } from 'vue'
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const todoItems = computed(() => store.getters.todoItems);
        const editTodo = (item) => {
            store.commit('updateTodo', item);
        };
        const removeTodo = (item) => {
            store.commit('removeTodo', item);
        }
        return {
            todoItems,
            editTodo,
            removeTodo,
        }
    }
}
</script>

<style lang="scss" scoped></style>