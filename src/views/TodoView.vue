<template>
    <div class="todo">
        <Todo />
    </div>
</template>

<script>
import Todo from '../components/Todo/Todo.vue'
export default {
    components: {
        Todo,
    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>