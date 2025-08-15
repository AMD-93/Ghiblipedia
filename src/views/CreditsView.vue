<script setup lang="ts"></script>

<template>
  <div class="container">
    <div>
      <h1 class="chunk">Credits</h1>

      <p class="chunk">Ghiblipedia is a non-commercial project.</p>
      <h2 class="chunk">Attributions</h2>
      <p class="chunk">
        All English movie titles, release dates, poster images, plots, summaries, director, genre
        and runtime data have been obtained from <a href="https://www.omdbapi.com/">OMDb API</a>.
        This content is licensed under
        <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>. Ghiblipedia is
        not endorsed by or affiliated with OMDb.
      </p>
      <p class="chunk">
        All Japanese titles have been obtained from
        <a href="https://www.ghibli.jp">Studio Ghibli</a>. Romanization in the Hepburn style is made
        by Ghiblipedia. Ghiblipedia is not endorsed by or affiliated with Studio Ghibli.
      </p>
    </div>
  </div>
</template>

<style scoped>
h1,
h2 {
  line-height: 1.6;
  letter-spacing: 0.7px;
}

h1 {
  font-size: 30px;
  font-weight: 400;
}

h2 {
  font-size: 24px;
  font-weight: 200;
}

p {
  line-height: 1.6;
  letter-spacing: 0.7px;
  font-weight: 100;
  font-size: 15px;
  text-align: justify;
}

@media only screen and (max-width: 480px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #b7b7a4;
    border-radius: 8px;
  }

  .chunk {
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 481px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #b7b7a4;
    border-radius: 8px;
  }

  .chunk {
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 769px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: 5px auto;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #b7b7a4;
    border-radius: 8px;
    max-width: 80%;
  }

  .chunk {
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #b7b7a4;
    border-radius: 8px;
    max-width: 80%;
  }

  .chunk {
    margin-bottom: 20px;
  }
}
</style>
