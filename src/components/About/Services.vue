<template>
    <div class="col-12 col-lg-6 my-3">
          <div class="service-item" v-motion-fade-visible-once :delay="200" :duration="1000">
            <div class="service-icon">
              <font-awesome-icon :icon="icon" />
            </div>
            <div class="service-text">
              <h3>{{title}}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt adipisci necessitatibus delectus reprehenderit, at modi nihil dolores quam. Obcaecati corporis quas et a ut quibusdam eum, amet vero quisquam?</p>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    props:['title','icon'],
    setup (props) {
        const title = props.title;
        const icon = props.icon;

        return {
            title,
            icon
        }
    }
}
</script>

<style lang="scss" scoped>

</style>