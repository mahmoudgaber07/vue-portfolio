<template>
    <ProjectCard title="Goal App" :image="props.goalApp" link="#" />
</template>

<script>
import ProjectCard from './ProjectCard.vue';
export default {
    props: ['goalApp'],
    components: {
        ProjectCard,
    },
    setup(props) {
        return {
            props,
        }
    }
}
</script>

<style lang="scss" scoped></style>