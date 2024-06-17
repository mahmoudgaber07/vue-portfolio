<template>
    <div class="container">
        <h2 class="main-heading">Todo List</h2>
        <TodoInput />
        <TodoItems />
    </div>
</template>

<script>
import TodoInput from './TodoInput.vue'
import TodoItems from './TodoItems.vue'
export default {
    components: {
        TodoInput,
        TodoItems
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>