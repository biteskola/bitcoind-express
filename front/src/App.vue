<template>
  <div>
    Nuestro nodo esta en la altura de bloque <b>#{{blockcount}}</b>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      blockcount: undefined
    }
  },
  created() {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => { console.log('data', data);this.blockcount = data.blockcount});
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>