<template>
  <div>
    <v-row class="ml-10">
      <router-link :to="'/characters'" class="text-decoration-none white--text">
        <v-btn color="primary">
          <v-icon left> mdi-arrow-left </v-icon>
          Back
        </v-btn></router-link
      >
    </v-row>
    <v-row v-if="!character">Loading...</v-row>
    <v-row v-else align="center" justify="center">
      <v-card class="mx-auto my-12" max-width="374">
        <v-img :src="character.image" height="200px" min-width="300px"></v-img>

        <v-card-title> {{ character.name }} </v-card-title>

        <v-card-subtitle>Status: {{ character.status }} </v-card-subtitle>

        <v-card-actions>
          <v-btn @click="show = !show" color="blue lighten-2" text>
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>ID</v-list-item-title>
                <v-list-item-subtitle>{{ character.id }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Species</v-list-item-title>
                <v-list-item-subtitle>{{
                  character.species
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Episodes</v-list-item-title>
                <v-list-item-subtitle>{{
                  character.episode.length
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CharacterPage",
  props: {
    id: [String, Number],
  },
  data: function () {
    return {
      show: false,
      character: null,
    };
  },
  methods: {
    fetchData: async function () {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${this.id}`
        );
        const data = await res.json();
        this.character = data;
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted: function () {
    if (this.character !== null) return;
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
</style>