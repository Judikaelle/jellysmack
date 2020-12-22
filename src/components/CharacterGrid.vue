<template>
  <div>
    <div id="form">
      <input
        type="text"
        placeholder="Search a character..."
        v-model.trim="searchText"
        autofocus
      />
      <button v-on:click="onSearch" id="search">Search</button>
    </div>
    <div v-if="isLoading === true">Loading!</div>
    <div class="cards">
      <div class="card" v-for="character in characters" :key="character.id">
        <img :src="character.image" :alt="character.name" />
        <h2>{{ character.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterGrid",
  data() {
    return {
      characters: null,
      isLoading: null,
      searchText: null,
    };
  },
  methods: {
    onSearch: function () {
      fetch(`https://rickandmortyapi.com/api/character?name=${this.searchText}`)
        .then((res) => res.json())
        .then((data) => (this.characters = data.results))
        .catch((err) => console.error(err));
    },
  },
  created: function () {
    window.addEventListener("keydown", (e) => {
      const key = e.which || e.keyCode;
      const symbol = e.key;
      if (key === 13 || symbol === "Enter") {
        this.onSearch();
      }
    }),
      (this.isLoading = true);
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => (this.characters = data.results))
      .catch((err) => console.error(err));
    this.isLoading = false;
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
}

.card {
  cursor: pointer;
  height: 30rem;
  margin-bottom: 1rem;
}

.card h2 {
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
}

.card img {
  width: 100%;
  height: 29rem;
  border-radius: 1rem;
  border: 0.3rem solid #fff;
  box-shadow: 5px 10px 5px 0px rgba(0, 0, 0, 0.28);
  -webkit-box-shadow: 5px 10px 5px 0px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 5px 10px 5px 0px rgba(0, 0, 0, 0.28);
}

div#form {
  display: flex;
  justify-content: center;
  margin: 3rem 0 1rem 0;
}

input[type="text"] {
  color: #9d5716;
  margin-bottom: 2rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
  background-color: #fff;
}

button#search {
  text-transform: uppercase;
  height: 3.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #1f9ce0;
  padding: 0.5rem 1rem;
  color: #fff;
  margin-left: 0.5rem;
  cursor: pointer;
  letter-spacing: 0.1rem;
  font-size: 1.7rem;
}
button#search:focus {
  outline: none;
}
</style>
