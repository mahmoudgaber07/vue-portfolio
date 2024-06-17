<template>
    <ProjectCard title="Saudi Market" :image="props.saudiMarket" link="https://www.saudimarket-ksa.com/" />
    <ProjectCard title="Settle" :image="props.settle" link="https://settle-eg.com/"/>
    <ProjectCard title="Adviceovercoffe" :image="props.adviceovercoffe" link="https://adviceovercoffee.com/" />
    <ProjectCard title="Water Worlds" :image="props.waterWorlds" link="https://waterworlds-sa.com/" />
    <ProjectCard title="MSE" :image="props.mse" link="https://mse.edu.eg/" />
    <ProjectCard title="Sahl" :image="props.sahl" link="https://easy-excellence.com/" />
    <ProjectCard title="Logic Landing page" :image="props.logicDesign" link="https://www.logic-designs.com/sa/" />
    <ProjectCard title="alkanaaco" :image="props.alkanaaco" link="https://alkanaaco.com/" />
</template>

<script>
import ProjectCard from './ProjectCard.vue';
export default {
    props: ['sahl', 'settle', 'adviceovercoffe', 'mse', 'logicDesign', 'waterWorlds', 'alkanaaco', 'saudiMarket'],
    components: {
        ProjectCard,
    },
    setup(props) {
        return {
            // imag
            props
        }
    }
}
</script>

<style lang="scss" scoped></style>