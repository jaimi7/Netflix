<script setup>
import api from '@/plugin/apis/movie'
import Navbar from '@/components/element/NavBar.vue'
import MainPoster from '@/components/home/MainPoster.vue'
import MovieBox from '@/components/home/MovieBox.vue'
import LoaderSpinar from '@/components/element/LoaderSpinar.vue'
</script>

<template>
  <div>
    <Navbar />
    <MainPoster />

    <Suspense>
      <div class="px-2 md:pt-1">
        <MovieBox title="Trending" largeImage :fetchUrl="api.getTrending" />
        <MovieBox title="Netflix Originals" :fetchUrl="api.getNetflixOriginals" />
        <MovieBox title="Top Rated" :fetchUrl="api.getTopRated" />
        <MovieBox title="Action Movies" :fetchUrl="api.getActionMovies" />
        <MovieBox title="Comedy Movies" :fetchUrl="api.getComedyMovies" />
        <MovieBox title="Horror Movies" :fetchUrl="api.getHorrorMovies" />
        <MovieBox title="Animation Movies" :fetchUrl="api.getAnimationMovies" />
        <MovieBox title="Documentaries" :fetchUrl="api.getDocumentaries" />
      </div>

      <template #fallback>
        <LoaderSpinar />
      </template>
    </Suspense>
  </div>
</template>
