
$(function(){
  $('.pazl').height($('.pazl').width()*0.72265625); // Соотношение 4 к 3

  $(window).resize(function(){
    $('.pazl').height($('.pazl').width()*0.72265625);
  });
});


var numberOfPart=1;


for(let i=0;i<numberOfPart*numberOfPart; i++){
	$('.pazl').append('<div class="partOfPazl"><img class="partOfPazlImg" src="https://cdn.pixabay.com/photo/2021/02/08/16/03/dinosaur-5995333_1280.png"></div>');
}

var partOfPazl = document.querySelectorAll('.partOfPazl');
for(let i=0;i<partOfPazl.length;i++){
partOfPazl[i].style.width = 100/numberOfPart +'%';
partOfPazl[i].style.height = 100/numberOfPart +'%';
}

 var partOfPazlImg  = document.querySelectorAll('.partOfPazlImg');
 for(let i=0;i<partOfPazlImg.length;i++){
   partOfPazlImg[i].style.margin = (Math.floor(i/numberOfPart)*-72.265625 +'% 0 0 '+ ((i%numberOfPart)*-100) +'%');
     partOfPazlImg[i].style.width = numberOfPart*100 +'%';
}

// var numberOfOrder = [];
// for(let i=0;i<16;i++){
// 	numberOfOrder[i]=i;
// }
// for(let i=15;i>0;i--){
//    let x=Math.floor(Math.random() * i )  
//    	let t=numberOfOrder[i];
//    	numberOfOrder[i]=numberOfOrder[x];
//    	numberOfOrder[x]=t;
// }
// for(let i=0;i<16;i++){
// console.log(numberOfOrder[i]);
// }