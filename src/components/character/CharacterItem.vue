<template>
  <div>
    <router-link
      :to="{
        name: 'CharacterPage',
        params: { id: character.id, character: character },
      }"
      class="text-decoration-none black--text"
    >
      <v-img max-height="200px" max-width="300px" :src="character.image">
      </v-img>
      <v-card-title
        style="max-width: 300px"
        class="d-inline-block text-truncate"
        >{{ character.name }}</v-card-title
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CharacterItem",
  props: {
    character: Object,
    id: Number,
  },
};
</script>