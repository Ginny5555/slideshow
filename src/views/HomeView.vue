<template>
  <div class="home">
    <div class="home-header container">
      <img alt="Vue logo" src="../assets/logo.webp" />
      <h1>Carousele</h1>
    </div>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 200px;
}
</style>
<style lang="scss">
.home {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    & h1 {
      text-transform: uppercase;
      font-size: 40px;
    }
  }
}
.container {
  width: 80%;
  margin: 0 auto;
}
ul {
  list-style-type: none;
}
@media (max-width: 650px) {
  .container {
    width: 330px;
  }
  .home-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
