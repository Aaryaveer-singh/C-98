var SpeechRecognition = window.webkitSpeechRecognition;


var recognition = new SpeechRecognition();
Webcam.set({
    width: 360,
    height: 250,
    image_format:"png",
    png_quality: 90
});

function start_listen() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    Webcam.attach("#camera")
    text_to_speech();

}

function text_to_speech() {
    console.log("inside text to speech");
    speak_data = document.getElementById("textbox").value;
    speak_audio = new SpeechSynthesisUtterance(speak_data);
    window.speechSynthesis.speak(speak_audio);
    console.log("end of text to speech");
}

recognition.onresult = function (event) {

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    Webcam.attach("#result2")
    text_to_speech();

}

function text_to_speech() {
    console.log("inside text to speech");
    speak_data = document.getElementById("textbox").value;
    speak_audio = new SpeechSynthesisUtterance(speak_data);
    window.speechSynthesis.speak(speak_audio);
    console.log("end of text to speech");
}

recognition.onresult = function (event) {

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    Webcam.attach("#result3")
    text_to_speech();

}

function text_to_speech() {
    console.log("inside text to speech");
    speak_data = document.getElementById("textbox").value;
    speak_audio = new SpeechSynthesisUtterance(speak_data);
    window.speechSynthesis.speak(speak_audio);
    console.log("end of text to speech");
}