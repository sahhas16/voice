var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var text=event.results[0][0].transcript;
    console.log(text);
    document.getElementById("textbox").innerHTML=text;
    speech();
    Webcam.attach(camera);
    
}
function speech(){
    var speech_object=window.speechSynthesis;
    var words=document.getElementById("textbox").value;
    var uttered_word=new SpeechSynthesisUtterance(words);
    speech_object.speak(uttered_word);
}
camera=document.getElementById("camera");
Webcam.set({
    width:320,
    height:240,
    image_format:'png',
    png_quality:90
});
