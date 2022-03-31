<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import "./static/css/index.css";


#test iframe { 
  width: 100%; 
  height: 100%;
} 

#test { 
  width: 100%; 
  height: 100%; 
} 


/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.red-button {
  background-color: #b93131;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
} */

</style>

<script>
export default {
  created () {
    console.log("dentro")
  }
}
</script>

<script src="./static/js/index"></script>