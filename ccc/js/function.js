// Show class
const popupLink = document.querySelectorAll(".item-link");

if (popupLink != null) {
	popupLink.forEach(element => {
		let showLink = element.querySelector(".show-icon");
		let visBox = element.querySelector("#toggleDisplay");
		let closeIcon = element.querySelector(".close-icon");
		let video = element.querySelector("#vidStop");

		showLink.addEventListener("click", function () {
			visBox.setAttribute("class", "show");
		});

		closeIcon.addEventListener("click", function () {
			visBox.setAttribute("class", "hide");
			video.pause();
		});
	});
};

/* video intro elements */
var ngoymalayinDiv = document.querySelector('#ngoymalayin')
var ngoymalayinVideo = document.querySelector('#ngoymalayin .video-player video');
var ngoymalayinFullscreen = document.querySelector('#ngoymalayin #desktopbutton');
var ngoymalayinIcon = document.querySelector('#ngoymalayin #desktopbutton img');
var ngoymalayinClose = document.querySelector('#ngoymalayin .hidebutton');
var allVideo = document.querySelector('video')

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
	ngoymalayinVideo.pause;
  } else if (document.mozFullScreen === false) {
    ngoymalayintogglePlay();
    ngoymalayinVideo.muted = true;
    ngoymalayinVideo.controls = false;
	ngoymalayinVideo.pause;
  } else if (document.msFullscreenElement === false) {
    ngoymalayintogglePlay();
    ngoymalayinVideo.muted = true;
    ngoymalayinVideo.controls = false;
	ngoymalayinVideo.pause;
  }
}

/* Hook up the event listeners */
// Click events
ngoymalayinFullscreen.addEventListener('click', ngoymalayintoggleFullscreen);
ngoymalayinClose.addEventListener("click", function hide() {
	ngoymalayinDiv.setAttribute("class", "hide");
	ngoymalayinVideo.pause();
	allVideo.pause();
});
// // hide first video on click 

// function hide() {
//     var myClasses = document.querySelectorAll('.video-intro'),
//         i = 0,
//         l = myClasses.length;

//     for (i; i < l; i++) {
//         myClasses[i].style.display = 'none';
//     }
// }

// audio hover event

var test = document.getElementById("audio1");
    test.addEventListener("mouseover", function( event ) {   
        var audio = document.getElementById("sound1");
        audio.play();
    }, false);
    var test = document.getElementById("audio2");
    test.addEventListener("mouseover", function( event ) {   
        var audio = document.getElementById("sound2");
        audio.play();
    }, false);
    var test = document.getElementById("audio3");
    test.addEventListener("mouseover", function( event ) {   
        var audio = document.getElementById("sound3");
        audio.play();
    }, false);
    var test = document.getElementById("audio4");
    test.addEventListener("mouseover", function( event ) {   
        var audio = document.getElementById("sound4");
        audio.play();
    }, false);