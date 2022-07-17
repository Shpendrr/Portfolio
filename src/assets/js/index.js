let typed = new Typed(".auto-type", {
  strings: ["Shpend Rrustemi", "a Front End Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  looped: true,
});
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "/assets/images/pause-btn.png";
  } else {
    mySong.pause();
    icon.src = "/assets/images/play-btn.png";
  }
};

var scroll = new SmoothScroll('a[href*="#"]');
