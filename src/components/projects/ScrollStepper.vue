<script>
import { computed, ref } from 'vue';

  const projectIndex = ref(0)
  const stepIndex = ref(0)
  const currentProject = computed(
    () => props.projects[projectIndex.value]
  )
  const currentStep = computed(
    () => currentProject.value.steps[stepIndex.value]
)
</script>

<template>
  <section class="stepper">
    <ProjectStep
      :project="currentProject"
      :step="currentStep"
    />
    <StepIndicator
      :steps="currentProject.steps"
      :current="stepIndex"
    />
  </section>
</template>