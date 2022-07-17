<template>
  <div class="wrapper header-item">
    <div class="header">
      <video
        loop
        autoplay
        muted
        plays-inline
        src="../assets/videos/VideoBG.mp4"
        id="myVideo"
      ></video>
      <div class="header-items">
        <div class="header-logo">
          <img src="../assets/images/Logo.png">
        </div>
      </div>
      <div class="header-links">
        <a href="#top">Home</a>
        <a href="#about-items">About</a>
        <a href="#experience-content-items">Projects</a>
        <a href="#skills">Skills</a>
      </div>
    </div>
  </div>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox">
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="#top">Home</a></li>
			<li><a class="menu__item" href="#about-items">About</a></li>
			<li><a class="menu__item" href="#experience-content-items">Projects</a></li>
			<li><a class="menu__item" href="#skills">Skills</a></li>
    </ul>
  </div>
</template>
<style src="../assets/style/style.css" lang="css"></style>
