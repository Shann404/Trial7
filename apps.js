var carouselslide=document.querySelector('.carousel-slide');
const carouselimages=document.querySelectorAll('.carousel-slide img');
const prevbtn=document.querySelector('.prevbtn');
const nxtbtn=document.querySelector('.nxtbtn');

let counter=1;
const size=carouselimages[1].clientWidth;

carouselslide.style.transform='translateX('+(-size*counter)+'px)';

nxtbtn.addEventListener('click',function(){
  if(counter>=carouselimages.length-1) return;
  carouselslide.style.transition='transform 0.5s ease-in-out';
    counter++;
    carouselslide.style.transform='translateX('+(-size*counter)+'px)';
});
prevbtn.addEventListener('click',function(){
  if(counter<=0) return;
    carouselslide.style.transition='transform 0.5s ease-in-out';
    counter--;
    carouselslide.style.transform='translateX('+(-size*counter)+'px)';
});
carouselslide.addEventListener('transitionend',function(){
  if(carouselimages[counter].id==="lastclone"){
    carouselslide.style.transition='none';
 counter=carouselimages.length-2;
 carouselslide.style.transform='translateX('+(-size*counter)+'px)';
  }  
});
carouselslide.addEventListener('transitionend',function(){
    if(carouselimages[counter].id==="firstclone"){
      carouselslide.style.transition='none';
   counter=carouselimages.length-counter;
   carouselslide.style.transform='translateX('+(-size*counter)+'px)';
    }  
  });