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
    if(text == "take my selfie"){
        speech();
        console.log("Protocol Command 1 Initiated");
        setTimeout(function(){
        speech2()
        },1000);
        setTimeout(function(){
            speech3()
            },1000);
            setTimeout(function(){
                speech4()
                },1000);
                setTimeout(function(){
                    speech5()
                    },1000);
                    setTimeout(function(){
                        speech6()
                        },1000);
    }
    Webcam.attach(camera);
    
}
function speech(){
    var speech_object = window.speechSynthesis;
    var words = "Taking your selfie in 5 seconds";
    var uttered_word = new SpeechSynthesisUtterance(words);
    speech_object.speak(uttered_word);
    setTimeout(function(){
        snapshot();
        save(); 
    },7000);
}
function speech2(){
    var speech_object = window.speechSynthesis;
    var words = "4";
    var uttered_word = new SpeechSynthesisUtterance(words);
    speech_object.speak(uttered_word); 
}
function speech3(){
    var speech_object = window.speechSynthesis;
    var words = "3";
    var uttered_word = new SpeechSynthesisUtterance(words);
    speech_object.speak(uttered_word); 
}
function speech4(){
    var speech_object = window.speechSynthesis;
    var words = "2";
    var uttered_word = new SpeechSynthesisUtterance(words);
    speech_object.speak(uttered_word); 
}
function speech5(){
    var speech_object = window.speechSynthesis;
    var words = "1";
    var uttered_word = new SpeechSynthesisUtterance(words);
    speech_object.speak(uttered_word); 
}
function speech6(){
    var speech_object = window.speechSynthesis;
    var words = "Initiating Speech Protocol";
    var uttered_word = new SpeechSynthesisUtterance(words);
    speech_object.speak(uttered_word); 
}

camera=document.getElementById("camera");
Webcam.set({
    width:320,
    height:240,
    image_format:'png',
    png_quality:90
});

function snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='image'src="+data_uri+">";
    });
}
function save(){
    link = document.getElementById("image").src;
    anchor=document.getElementById("download");
    anchor.href=link;
    anchor.click();
}
