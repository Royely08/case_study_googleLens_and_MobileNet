function setup() {
    canvas = createCanvas(200, 200);
    canvas.center();
  
    video = createCapture(VIDEO);
    video.hide();
  
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
  }
  
  function draw(){
    image(video,0,0,200,200);
  
    classifier.classify(video,gotResult);
  }
  
  function modelLoaded(){
    console.log('modelLoaded');
  }
  
  function gotResult(error,results){
    if(error){
      console.error(error);
    }
    else{
      console.log(results);
      document.getElementById("google_lens").innerHTML = results[0].label;
      document.getElementById("mobile_net").innerHTML = results[0].confidence.toFixed(3);
    }
  }