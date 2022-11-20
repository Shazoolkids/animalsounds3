function startClassification()
{
  navigator.mediaDevices.getUserMedia({audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7_rHqbonE/', modelReady);
}
function modelReady()
{
  classifier.classify(gotResults);
}
function gotResults(error, results) 
{
if (error) {
  console.log(error);
} else
 console.log(results);
random_number_r = Math.floor(Math.random() * 255) +1;
random_number_g = Math.floor(Math.random() * 255) +1;
random_number_b = Math.floor(Math.random() * 255) +1; 

document.getElementById("result_label").innerHTML = 'I can hear - '+
results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
(results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color = "rgb("
+random_number_r+","+random_number_g+ "," +random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb("
+random_number_r+","+random_number_g+ "," +random_number_b+")";


img = document.getElementById('Cat.webp');
img1 = document.getElementById('cow1.jpeg');
img2 = document.getElementById('lion2.jpeg');
img3 = document.getElementById('dog3.jpeg');

if (results[0].label == "Meowing") {
  img.src = 'Cat.png';

} else if (results[0].label == "mooing") {
  img.src = 'cow1.jpeg';

}else if (results[0].label == "Roaring") {
  img.src2 = "lion2.jpeg";

  } else if (results[0].label == "Barking") {
    img.src = 'dog3.jpeg';
  
}else {
  img.src = 'Cat.png';
  img.src1 = 'cow1.jpeg';
  img.src2 = "lion2.jpeg";
  img.src3 = 'dog3.webp';
}
}
