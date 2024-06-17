<template>
  <div class="skill my-3">
    <div class="skill-name d-flex px-2">
      <p class="flex-fill">{{ skillName }}</p>
      <p class="flex-fill text-end">{{ skillVal }}</p>
    </div>
    <div class="skill-progress">
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar" :style="{ width: skillVal }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
  props: ['title', 'value'],
  setup(props) {
    const skillName = props.title;
    const skillVal = props.value;

    return {
      skillName,
      skillVal,
    }
  }
}
</script>

<style lang="scss" scoped></style>