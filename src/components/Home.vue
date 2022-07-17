<template>
  <Header />
  <div class="wrapper">
    <div class="portfolio">
      <div class="portfolio-hashtag-content">
        <div class="portfolio-hashtag">
          <a href="#"></a>
          <a href="#">Portfolio</a>
        </div>
      </div>
      <div class="audio">
        <div class="audio-btn">
          <img src="../assets/images/play-btn.png" id="icon" />
          <audio id="mySong" loop>
            <source src="../assets/music/Music.mp3" type="audio/mp3" />
          </audio>
          <a href="#">Play Music</a>
        </div>
      </div>
    </div>
  </div>

  <div class="wrapper banners_items_conent">
    <div class="banner-content">
      <div class="banner-item">
        <div class="banner-title">
          <h1>
            Hello I am
            <span class="auto-type"> </span>
          </h1>
        </div>
        <div class="parent">
          <div class="social-links">
            <div class="bg">
              <span></span>
            </div>
            <div class="social-icon">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-facebook-square"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div class="banner_btn_connect">
            <div class="btn__connect">
              <a href="#">Connect</a>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-anime">
        <div class="banner-anime-content">
          <img src="../assets/videos/animation_500_l5jyfabr.gif" alt="" />
        </div>
      </div>
    </div>
  </div>
  <About />
  <Projects />
  <Skills />
</template>
<style src="../assets/style/style.css" lang="css"></style>

<script>
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";

export default {
  name: "header",
  components: {
    Header,
    About,
    Projects,
    Skills,
  },
  data() {
    return {};
  },
  mounted() {
    var mySong = document.getElementById("mySong");
    var icon = document.getElementById("icon");
    var scroll = new SmoothScroll('a[href*="#"]');

    icon.onclick = function () {
      if (mySong.paused) {
        mySong.play();
        icon.src = "../assets/images/pause-btn.png";
      } else {
        mySong.pause();
        icon.src = "../assets/images/play-btn.png";
      }
    };
    let typed = new Typed(".auto-type", {
      strings: ["Shpend Rrustemi", "a Front End Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      looped: true,
    });
  },
};
</script>
