function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('mobilenet',mobileLoaded);
}

function draw(){
  image(video,0,0,300,300);
  clssifier.classify(video,gotResult);


}

function modelloaded(){
console.log("model loaded");
}
var previous_result="";


function gotResult(error,results){
  if(error){
    console.error(error);


  }
  else{
    if((results[0].cofidence> 0.5)&& (previous_result !=results[0].label)){
      console.log(results);
      previous_result=results[0].label;
      synth=window.speechSynthesis;
      speekdata="Object deteceted is "results[0].label;
    }
  }


}