<template>
  <div>
    <h1>Rick & Morty API</h1>
    <v-row>
      <v-col>
        <div>
          <v-text-field
            label="Search a character"
            v-model.trim="searchText"
            autofocus
            dark
          ></v-text-field>
        </div>
        <div class="mb-2">
          <v-btn color="primary" @click="onSearch">Search</v-btn>
        </div>
      </v-col>
    </v-row>
    <div class="info" v-if="!characters">No Results</div>
    <v-container fluid v-else>
      <v-row>
        <v-col cols="12">
          <v-row style="height: 300px">
            <v-card
              class="ma-2"
              v-for="character in characters"
              :key="character.id"
              shaped
            >
              <v-img height="200px" :src="character.image"> </v-img>
              <v-card-title class="pb-0">{{ character.name }}</v-card-title>
              <!-- <router-link :to="`/characters/${character.id}`">
									<character-item :character="character" />
								</router-link> -->
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      <v-pagination
        class="pagination"
        v-model="currentPage"
        :length="nbPages"
        :total-visible="7"
        @input="onSearch"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
// import CharacterItem from "./CharacterItem.vue";

export default {
  name: "CharacterGrid",
  // components: { CharacterItem },
  data() {
    return {
      characters: null,
      searchText: null,
      currentPage: 1,
      nbPages: null,
      BASE_URL: `https://rickandmortyapi.com/api/character?page=${this.currentPage}`,
    };
  },
  methods: {
    onSearch: async function (param) {
      let currentUrl = param
        ? `${this.BASE_URL}?name=${this.searchText}&page=${this.currentPage}`
        : this.BASE_URL;
      try {
        const res = await fetch(currentUrl);
        const data = await res.json();
        this.characters = data.results;
        this.nbPages = data.info.pages;
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted: function () {
    window.addEventListener("keydown", (e) => {
      const key = e.which || e.keyCode;
      const symbol = e.key;
      if (key === 13 || symbol === "Enter") {
        this.onSearch(true);
      }
    }),
      this.onSearch();
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4rem;
  text-align: center;
  color: #fff;
  margin-bottom: 7rem;
}

.pagination {
  margin-top: 4rem;
  color: #fff;
}

.info {
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  background-color: transparent;
}

@media (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
