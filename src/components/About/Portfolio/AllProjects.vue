<template>
    <WebProjects :saudiMarket="props.saudiMarket" :sahl="props.sahl" :settle="props.settle" :adviceovercoffe="props.adviceovercoffe" :mse="props.mse" :logicDesign="props.logicDesign" :waterWorlds="props.waterWorlds" :alkanaaco="props.alkanaaco" />
    <MobileProjects :goalApp="props.goalApp"/>
</template>

<script>
import WebProjects from './WebProjects.vue';
import MobileProjects from './MobileProjects.vue';
export default {
    props: ['sahl', 'settle', 'adviceovercoffe', 'mse', 'logicDesign', 'waterWorlds', 'alkanaaco', 'saudiMarket', 'goalApp'],
    components: {
        WebProjects,
        MobileProjects
    },
    setup(props) {
        return {
            props
        }
    }
}
</script>

<style lang="scss" scoped></style>