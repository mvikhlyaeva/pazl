var numberOfPart=1;
var img;
var imgsrc = 'https://cdn.pixabay.com/photo/2021/03/03/14/55/rhino-6065480_1280.jpg';

var chooseImg=document.querySelectorAll(".chooseImg");
for(let i=0;i<chooseImg.length;i++){
	chooseImg[i].onclick = function() {
		imgsrc = chooseImg[i].src;
		console.log('1');
		$('.partOfPazl').detach();	
		$('.pazl').append('<div class="partOfPazl"><img class="partOfPazlImg" src="'+ imgsrc + '"></div>');
	}
}


for(let i=0;i<numberOfPart*numberOfPart; i++){
	$('.pazl').append('<div class="partOfPazl"><img class="partOfPazlImg" src="https://cdn.pixabay.com/photo/2021/03/03/14/55/rhino-6065480_1280.jpg"></div>');
}

img = document.querySelector(".partOfPazlImg");

$(function(){
  $('.pazl').height($('.pazl').width()*img.naturalHeight/img.naturalWidth);


  $(window).resize(function(){
    $('.pazl').height($('.pazl').width()*img.naturalHeight/img.naturalWidth);
  });
});



// var partOfPazl = document.querySelectorAll('.partOfPazl');
// for(let i=0;i<partOfPazl.length;i++){
// partOfPazl[i].style.width = 100/numberOfPart +'%';
// partOfPazl[i].style.height = 100/numberOfPart +'%';
//}

//  var partOfPazlImg  = document.querySelectorAll('.partOfPazlImg');
//  for(let i=0;i<partOfPazlImg.length;i++){
//    partOfPazlImg[i].style.margin = (Math.floor(i/numberOfPart)*-72.265625 +'% 0 0 '+ ((i%numberOfPart)*-100) +'%');
//      partOfPazlImg[i].style.width = numberOfPart*100 +'%';
// }

console.log(numberOfPart);