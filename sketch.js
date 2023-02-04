let int = 0;
let jsonPath = './json/superArray.json';
let data = {};
let imgArray = [];

function preload() {
  data = loadJSON(jsonPath);
}

function setup() { 
  c = createCanvas(windowWidth, windowHeight);
  frameRate(30);
  background(0);
  blendMode(DIFFERENCE);
  for (let i = 0; i < data.imageNames.length; i++){
    fetch('./images/' + data.imageNames[i])
      .then(response => {
        if (response.ok) {
          loadImage('./images/' + data.imageNames[i], img => {      
            imgArray.push(img);
            console.log('image pushed');
          });
        }
      })
      .catch(error => {
        console.error('File not found:', error);
      });
  }
}

function draw() {
  if (imgArray.length > 1000) {
    image(imgArray[int], random(-100, windowWidth), random(-100, windowHeight));
  int++;
  if (int > imgArray.length-1) {
    int = 0;
  }
  }
}