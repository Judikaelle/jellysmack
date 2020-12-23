<template>
  <div>
    <router-link :to="'/characters'">Back</router-link>
    <img :src="character.image" :alt="character.name" />
    <h2>{{ character.name }}</h2>
    <h4>{{ character.status }}</h4>
  </div>
</template>

<script>
export default {
  name: "CharacterItem",
  props: ["character"],
};
</script>

<style lang="scss" scoped>
</style>