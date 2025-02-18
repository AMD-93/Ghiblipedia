<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  originalTitle: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <div class="card-container">
      <h1>Trailers</h1>
      <div class="card-content">
        <div class="trailer">
          <div class="trailer-clip">
            <video width="320" height="240" controls>
              <!-- <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" /> -->
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="movie-info">
            <h2>{{ title }}</h2>
            <h3>{{ originalTitle }}</h3>
            <p>{{ plot }}</p>
            <p>{{ year }}</p>
          </div>
        </div>
        <div class="links">
          <a href="#">Trailer</a>
          <a href="#">Trailer</a>
          <a href="#">Trailer</a>
          <a href="#">Trailer</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #b7b7a4;
  border-radius: 10px;
  padding: 1rem;
  margin: auto;
  width: 80%;
}

.card-content {
  display: flex;
  flex-direction: row;
}

.trailer {
  flex-grow: 2;
  display: flex;
  flex-direction: row;
}

.trailer-clip {
  padding: 1rem;
}

.movie-info {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-grow: 2;
}

.links {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
}

h3 {
  font-style: italic;
}
</style>
