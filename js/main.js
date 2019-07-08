'use strict';

if (navigator.mediaDevices) {
  console.log("getUserMedia supported!")


  var constraints = {
    // audio: true,
    // echoCancellation = true
    video: {
      width: { min: 1280 },
      height: { min: 720 }
    }
  };

  var chunks = [];

  navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
      init(stream);
      var mediaRecorder = new MediaRecorder(stream);

      // visualize(stream);

    })
}else {
  console.log("getUserMedia not supported in this browser")
}

function init(stream) {
  try {
    // const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (e) {
    console.error('navigator.getUserMedia error:', e);
  }
}

function handleSuccess(stream) {
  // recordButton.disabled = false;
  console.log('getUserMedia() got stream:', stream);
  window.stream = stream;

  const gumVideo = document.querySelector('video#gum');
  gumVideo.srcObject = stream;
}
