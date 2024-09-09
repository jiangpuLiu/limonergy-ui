<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <lm-alert type="success">Success alert</lm-alert>
    <lm-alert type="info">Info alert</lm-alert>
    <lm-alert type="warning">Warning alert</lm-alert>
    <lm-alert type="danger">Error alert</lm-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <lm-alert type="success" title="Success alert" />
    <lm-alert type="info" title="Info alert" />
    <lm-alert type="warning" title="Warning alert" />
    <lm-alert type="danger" title="Error alert" />
  </div>
</template>
