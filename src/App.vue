<template>
  <div id="app">
    
    <Loader />
    <Navigation />
    <Hero />
    <About />
    <MultiDemos />
   
  </div>
</template>

<script>
import Loader from './components/Loader.vue';
import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import MultiDemos from './components/MultiDemos.vue';


export default {
  components: {
    Loader,
    Navigation,
    Hero,
    About,
    MultiDemos, 

  },
};
</script>

<style>

</style>
