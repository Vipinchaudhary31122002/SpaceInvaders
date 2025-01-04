//  Create the starfield.
var container = document.getElementById("starfield");
var starfield = new Starfield();
starfield.initialise(container);
starfield.start();

//  Setup the canvas.
var canvas = document.getElementById("gameCanvas");
canvas.width = 1000;
canvas.height = 1000;

//  Create the game.
var game = new Game();

//  Initialise it with the game canvas.
game.initialise(canvas);

//  Start the game.
game.start();

//  Listen for keyboard events.
window.addEventListener("keydown", function keydown(e) {
  var keycode = e.which || window.event.keycode;
  //  Supress further processing of left/right/space (37/29/32)
  if (keycode == 37 || keycode == 39 || keycode == 32) {
    e.preventDefault();
  }
  game.keyDown(keycode);
});
window.addEventListener("keyup", function keydown(e) {
  var keycode = e.which || window.event.keycode;
  game.keyUp(keycode);
});

window.addEventListener(
  "touchstart",
  function (e) {
    game.touchstart(e);
  },
  false
);

window.addEventListener(
  "touchend",
  function (e) {
    game.touchend(e);
  },
  false
);

window.addEventListener(
  "touchmove",
  function (e) {
    game.touchmove(e);
  },
  false
);

function toggleMute() {
  game.mute();
  document.getElementById("muteLink").innerText = game.sounds.mute
    ? "unmute"
    : "mute";
}

var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-41728580-1"]);
_gaq.push(["_trackPageview"]);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol
      ? "https://ssl"
      : "http://www") + ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();