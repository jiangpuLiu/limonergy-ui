<script setup>
function handleBtnClick() {
  console.log('btn click')
}
</script>

<template>
  <p>
    <lm-button @click="handleBtnClick">with throttle</lm-button>
    <lm-button :use-throttle="false" @click="handleBtnClick">
      without throttle
    </lm-button>
  </p>
</template>
