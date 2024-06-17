<template>
    <div class="experience" id="experience">
            <div class="container">
                <h2 class="main-heading">My Resume</h2>
                <h2 class="text-center pb-3">Working Experience</h2>
                <div class="timeline">
                    <div class="timeline-item left" v-motion-slide-visible-once-right :delay="200" :duration="1200">
                        <div class="timeline-text">
                            <div class="timeline-date">6/2024 - current</div>
                            <h2>Frontend Developer</h2>
                            <h4>Gravity Real State, Zaid City, Giza</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right" v-motion-slide-visible-once-left :delay="200" :duration="1200">
                        <div class="timeline-text">
                            <div class="timeline-date">3/2023 - 6/2024</div>
                            <h2>Frontend Developer</h2>
                            <h4>Logic Designs, Nasr City, Cairo</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item left" v-motion-slide-visible-once-right :delay="200" :duration="1200">
                        <div class="timeline-text">
                        <div class="timeline-date">9/2022 - 11/2022</div>
                            <h2>React Development- FWD</h2>
                            <h4>Udacity, Cairo, Egypt</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right" v-motion-slide-visible-once-left :delay="200" :duration="1200">
                        <div class="timeline-text">
                            <div class="timeline-date">8/2021 - 11/2021</div>
                            <h2>Frontend Development</h2>
                            <h4>ITI, Alex, Egypt</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item left" v-motion-slide-visible-once-right :delay="200" :duration="1200">
                        <div class="timeline-text">
                            <div class="timeline-date">12/2020 - 3/2021</div>
                            <h2>Web Design DEY</h2>
                            <h4>NTI, Cairo, Egypt</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>