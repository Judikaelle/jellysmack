<template>
  <div>
    <h1 class="text-center white--text mb-15 font-weight-black">
      Rick & Morty API
    </h1>
    <v-row>
      <v-col align="center">
        <div>
          <v-text-field
            class="input"
            label="Search a character"
            v-model.trim="searchText"
            autofocus
            dark
          ></v-text-field>
        </div>
        <div class="mb-2 align-self-start">
          <v-btn
            color="primary text-uppercase align-self-start"
            @click="() => onSearch(true)"
            >Search</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <div class="text-center white--text mt-10" v-if="isLoading">Loading...</div>
    <v-row v-else align="center" justify="center">
      <v-alert
        class="alert mt-15 text-center"
        type="info"
        outlined
        v-if="!characters"
        >Sorry, there is no result 😢</v-alert
      >
      <v-container fluid v-else>
        <v-col cols="12">
          <v-row>
            <v-card
              class="ma-3"
              v-for="character in characters"
              :key="character.id"
              shaped
            >
              <v-img
                max-height="200px"
                maw-width="100px"
                :src="character.image"
              >
              </v-img>
              <v-card-title class="justify-center">{{
                character.name
              }}</v-card-title>
              <!-- <router-link :to="`/characters/${character.id}`">
									<character-item :character="character" />
								</router-link> -->
            </v-card>
          </v-row>
        </v-col>
        <v-row align="center" justify="center">
          <v-pagination
            class="pagination"
            v-model="currentPage"
            :length="nbPages"
            :total-visible="7"
            @input="onSearch"
          ></v-pagination>
        </v-row>
      </v-container>
    </v-row>
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
      baseUrl: `https://rickandmortyapi.com/api/character`,
      currentUrl: "",
      isLoading: false,
    };
  },
  methods: {
    onSearch: async function (value) {
      // If value === true, reset currentPage
      if (typeof value === "boolean" && value === true) {
        this.currentPage = 1;
      }
      // Remove name param if searchText is null
      this.currentUrl =
        this.searchText !== null
          ? `${this.baseUrl}?name=${this.searchText}&page=${this.currentPage}`
          : `${this.baseUrl}?page=${this.currentPage}`;
      try {
        this.isLoading = true;
        const res = await fetch(this.currentUrl);
        const data = await res.json();
        this.characters = data.results;
        this.nbPages = data.info.pages;
      } catch (err) {
        console.error(err);
      }
      this.isLoading = false;
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
.pagination {
  margin-top: 3rem;
  color: #fff;
}

.alert {
  width: 30%;
}

.input {
  width: 30%;
}

.info {
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  background-color: transparent;
}
</style>
