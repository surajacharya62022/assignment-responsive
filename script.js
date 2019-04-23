var prev = document.getElementById('prev');
var next= document.getElementById('next');
var imageSlides = document.getElementsByClassName('header-container-1');
var textNumbers = document.getElementsByClassName('textNumber');
var bulletDots = document.getElementsByClassName('dot');
var imageNumber = 1;
var textNumber = 1 ;

//slideImage(imageNumber);

var stopInterval
function sliding(){
    stopInterval=setInterval(function() {
console.log(imageNumber);
    if(imageNumber > imageSlides.length )
    {
        textNumber = 1;
        imageNumber = 1;
    }

    for(var i=0 ; i < textNumbers.length; i++){
        textNumbers[i].style.display= 'none';
    }

    for(var i=0 ; i< imageSlides.length; i++){
        imageSlides[i].style.display= 'none';
    }

    for (var k = 0; k < bulletDots.length; k++) {
        bulletDots[k].className = bulletDots[k].className.replace(" changeColor", "");
    }
    imageSlides[imageNumber-1].style.display= 'block';
    
     bulletDots[imageNumber-1].className += ' changeColor';

   
    imageNumber++;
    console.log(imageNumber);

    },2000);
}
sliding();
function imageSliding(number){

 if( number > imageSlides.length){
    imageNumber = 1;
  }

  if(number < 1 ){

    imageNumber = imageSlides.length;

  }
  for(var i=0 ; i < imageSlides.length; i++){
    imageSlides[i].style.display= 'none';
  }
  imageSlides[imageNumber-1].style.display= 'block';
  //imageNumber++;
  

 }


prev.addEventListener('click',function(){
  clearInterval(stopInterval);

    imageNumber= imageNumber - 1 ;
  textNumber = textNumber - 1;
  console.log(imageNumber);

  imageSliding(imageNumber);

  for (i = 0; i < bulletDots.length; i++) {
    bulletDots[i].className = bulletDots[i].className.replace(" changeColor", "");
  }
  bulletDots[imageNumber-1].className += ' changeColor';

 sliding();

});

next.addEventListener('click',function(){


  clearInterval(stopInterval);

    imageNumber= imageNumber + 1 ;
  textNumber = textNumber + 1;
  console.log(imageNumber);

  imageSliding(imageNumber);
  for (i = 0; i < bulletDots.length; i++) {
    bulletDots[i].className = bulletDots[i].className.replace(" changeColor", "");
  }
  bulletDots[imageNumber-1].className += ' changeColor';

 sliding();
});
