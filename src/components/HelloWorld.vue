<template>
  <div class="">
    <div class="hello container">
      <span @click="prevSlide" class="lightgrey prev">&#9668;</span>
      <div class="slider-container">
        <ul class="slider" :style="styleObject" v-if="posts && posts.length">
          <li class="green slide" v-for="post of posts" :key="post">
            <div>
              <div
                @click.exact.once="onSelect(post)"
                @click.exact.ctrl="onDel(post)"
              >
                <img :src="post.download_url" alt />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <span @click="nextSlide" class="lightgrey next">&#9658;</span>
    </div>
    <ul>
      <h2 @click="onDel(post)">Click on the link to delete</h2>
      <li v-for="(item, index) in clickedItems" :key="index" class="fade-in">
        <p>{{ item.url }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      posts: "",
      slides: 100,
      active: 0,
      activeSlide: 1,
      clickedItems: [],
    };
  },
  created() {
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=15")
      .then((response) => {
        this.posts = response.data.map((post) => ({
          ...post,
        }));
        console.log(this.posts);
      });
  },
  computed: {
    styleObject: function () {
      const width = 2 - (this.activeSlide - 0) * 230;
      return {
        transform: "translateX(" + width + "px)",
      };
    },
  },
  methods: {
    changeSlide(num) {
      this.activeSlide = num + 1;
    },
    nextSlide() {
      if (this.activeSlide < 10) this.activeSlide++;
    },
    prevSlide() {
      if (this.activeSlide > 0) this.activeSlide--;
    },
    onSelect(post) {
      this.clickedItems.push(post);
      JSON.stringify(this.clickedItems);
      console.log(this.clickedItems.toString());
    },
    onDel(post) {
      this.clickedItems.pop(post);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  text-align: center;
}
.hello {
  height: 100%;
  display: inline-flex;
  align-items: center;
}
.slider-container {
  overflow: hidden;
  width: 93%;
  height: 247px;
  margin: 0 auto;
}
.slider {
  width: 5000px;
  height: 400px;
  overflow: hidden;
  padding: 0;
  transition: all 0.32s ease;
}
.slide {
  float: left;
  width: 200px;
  height: 200px;
  font-size: 20px;
  color: black;
  padding: 10px;
  margin: 4px;
  border: 1px solid #cdae71;
  border-radius: 11px;
  box-shadow: 7px 4px 10px 1px rgb(0 0 0 / 15%);
  &:hover {
    background-color: rgb(179 179 178);
  }
}
.navigator {
  text-align: center;
  display: inline-block;
  margin: 15px auto;
  overflow: hidden;
  padding-bottom: 16px;
  height: 30px;
}
.navigator li {
  width: 20px;
  height: 20px;
  float: left;
  color: #ecf0f1;
  border-radius: 50%;
  padding: 7px;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 3px 17px rgba(0, 0, 0, 0.3);
  transition: all 0.32s ease;
  position: relative;
  background-color: #cdae71;
  &:hover {
    transform: translateY(-2px);
  }
}
img {
  width: 200px;
  height: 200px;
}
.lightgrey {
  position: absolute;
  width: 20px;
  height: 20px;
  float: left;
  color: #ecf0f1;
  border-radius: 50%;
  padding: 7px;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 3px 17px rgba(0, 0, 0, 0.3);
  transition: all 0.32s ease;
  position: relative;
  background-color: #cdae71;
  &:hover {
    transform: translateY(-2px);
  }
}
.next {
  top: 50%;
}
.prev {
  top: 50%;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  opacity: 0; /* make things invisible upon start */
  animation: fadeIn ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 1.4s;
}
p {
  font-size: 16px;
}
ul {
  padding: 0;
}
.visible {
  display: none;
}
</style>
