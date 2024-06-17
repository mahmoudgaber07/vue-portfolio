<template>
    <div class="text-center py-5">
        <button class="btn btn-dark mx-2 px-3 py-2" type="button" @click="increment">+</button>
        <button class="btn btn-dark mx-2 px-3 py-2" type="button" @click="decrement">-</button>
    </div>
</template>

<script>
export default {
    emits:['increment','decrement'],
    setup (props, context) {
        const increment = () => {
            context.emit('increment',1)
        }

        const decrement = () => {
            context.emit('decrement',1)
        }
        return {
            increment,
            decrement

        }
    }
}
</script>

<style lang="scss" scoped>

</style>