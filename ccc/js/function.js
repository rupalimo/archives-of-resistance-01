// Show class
const popupLink = document.querySelectorAll(".item-link");

if (popupLink != null) {
	popupLink.forEach(element => {
		let showLink = element.querySelector(".show-icon");
		let visBox = element.querySelector("#toggleDisplay");
		let closeIcon = element.querySelector(".close-icon");
		let introDiv = element.querySelector("#introBox")

		showLink.addEventListener("click", function () {
			visBox.setAttribute("class", "show");
		});

		closeIcon.addEventListener("click", function () {
			visBox.setAttribute("class", "hide");
			introDiv.setAttribute("class", "hideIntro");
		});
	});
};

/* Get our elements */
var ngoymalayinVideo = document.querySelector('#ngoymalayin .video-player.desktop video');
var ngoymalayinFullscreen = document.querySelector('#ngoymalayin .video-player.desktop #desktopbutton');
var ngoymalayinIcon = document.querySelector('#ngoymalayin .video-player.desktop #desktopbutton img');

/* Build out functions */
// toggle play/pause
function ngoymalayintogglePlay() {
  var method = ngoymalayinVideo.paused ? 'play' : 'pause';
  ngoymalayinVideo[method]();
}

// Create fullscreen video button
function ngoymalayintoggleFullscreen() {
  if (ngoymalayinVideo.requestFullScreen) {
    ngoymalayinVideo.requestFullScreen();
    ngoymalayintogglePlay();
  } else if (ngoymalayinVideo.webkitRequestFullScreen) {
    ngoymalayinVideo.webkitRequestFullScreen();
    ngoymalayintogglePlay();
  } else if (ngoymalayinVideo.mozRequestFullScreen) {
    ngoymalayinVideo.mozRequestFullScreen();
    ngoymalayintogglePlay();
  };
  ngoymalayinVideo.controls = true;
  ngoymalayinVideo.muted = false;
  ngoymalayinIcon.className = "hide";
}

// what happens when you exit fullscreen
function ngoymalayinexitHandler() {
  if (document.webkitIsFullScreen === false) {
    ngoymalayintogglePlay();
    ngoymalayinVideo.muted = true;
    ngoymalayinVideo.controls = false;
  } else if (document.mozFullScreen === false) {
    ngoymalayintogglePlay();
    ngoymalayinVideo.muted = true;
    ngoymalayinVideo.controls = false;
  } else if (document.msFullscreenElement === false) {
    ngoymalayintogglePlay();
    ngoymalayinVideo.muted = true;
    ngoymalayinVideo.controls = false;
  }
}

/* Hook up the event listeners */
// Click events
ngoymalayinFullscreen.addEventListener('click', ngoymalayintoggleFullscreen);

// hide first video on click 

function hide() {
    var myClasses = document.querySelectorAll('.video-intro'),
        i = 0,
        l = myClasses.length;

    for (i; i < l; i++) {
        myClasses[i].style.display = 'none';
    }
}