<template>
  <div>
    <lm-button type="primary" loading>Loading</lm-button>
    <lm-button type="primary" loading-icon="circle-notch" loading>
      Loading
    </lm-button>
    <lm-button type="primary" loading>
      <template #loading>
        <lm-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </lm-button>
  </div>
</template>
