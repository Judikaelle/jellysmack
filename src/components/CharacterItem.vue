<template>
  <div>
    <router-link :to="'/characters'">Back</router-link>
    <h1>Character Item</h1>
    <p>{{ character.name }}</p>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>