<template>

  <div id="app">

    <router-view :key="$route.path" />

  </div>

</template>

<style>
  body {
    margin: 2rem;
    text-align: center;
    font-family: sans-serif;
  }
  /* add your styling here */

</style>
