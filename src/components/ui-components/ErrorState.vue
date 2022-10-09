<script lang="ts" setup>
const props = defineProps({ alertTitle: String, alertMsg: String });
</script>

<template>
  <article class="message is-danger error-state-container">
    <div class="message-body">
      <div class="is-size-4" data-role="alert-title">
        {{ props.alertTitle }}
      </div>
      <p data-role="alert-message">{{ props.alertMsg }}</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.error-state-container {
  margin: 5rem auto;
  min-height: 200px;
  max-width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
