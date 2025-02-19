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
      <div class="card-content">
        <div class="trailer">
          <div class="trailer-clip">
            <video width="280" height="200" controls>
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
  margin-top: 1rem;
  width: 80%;
}

.card-content {
  display: flex;
  flex-direction: row;
}

.trailer {
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
  width: 70%;
  justify-content: center;
  text-align: justify;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 20%;
  padding: 1rem;
}

h2 {
  font-size: 20px;
}

h3 {
  font-style: italic;
  font-size: 15px;
}

p {
  font-size: 13px;
}
</style>
