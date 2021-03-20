//var pazl  = document.querySelectorAll('.partOfPazl');
let b = document.querySelector(".button");
var pazl;
var numberOfPart;
// $(function(){
//   $('.pazl').height($('.pazl').width()*0.72265625); // Соотношение 4 к 3

//   $(window).resize(function(){
//     $('.pazl').height($('.pazl').width()*0.72265625);
//   });
// });

var numberOfOrder = [];
function createSortNumberOfOrder(numberOfPart){

for(let i=0;i<numberOfPart*numberOfPart;i++){
	numberOfOrder[i]=i;
}
for(let i=numberOfPart*numberOfPart-1;i>0;i--){
   let x=Math.floor(Math.random() * i )  
   	let t=numberOfOrder[i];
   	numberOfOrder[i]=numberOfOrder[x];
   	numberOfOrder[x]=t;
}
for(let i=0;i<numberOfPart*numberOfPart;i++){
//console.log(numberOfOrder[i]);
}
}

b.onclick = function(){
	//console.log("3");
	$('.a').detach();
	let radios = document.querySelectorAll('input[type="radio"]');
	for (let radio of radios) {
		if (radio.checked) {
			 numberOfPart = radio.value;
		}
	}
$('.partOfPazl').detach();	

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

createSortNumberOfOrder(numberOfPart);

for(let i=0;i<numberOfPart*numberOfPart;i++){
	//console.log(numberOfOrder[i]);
    pazl  = document.querySelectorAll('.partOfPazl');
	pazl[i].style.order= +numberOfOrder[i];
}	
$('.q').detach();
//$('.scripts').append('<script class="a" src="changePart.js"></script>');
var scripts = document.querySelector('.scripts');
var js = document.createElement('script');
js.src = "changePart.js";
js.classList.add("a");
scripts.appendChild(js);
 }

// var first=true;
// var order;
// var k;
//  var pazl  = document.querySelectorAll('.partOfPazl');

///  pazl[i].onclick = function() {
//  	if(first){
//  		console.log("1");
//  		order = pazl[i].style.order;
//  	    k = i;
//  	    first = false;
//  	    pazl[i].style.border = "0.1px solid #888";
//  	}
//  	else{
//  		console.log("2");
//         pazl[k].style.order = pazl[i].style.order;
//         pazl[i].style.order = order;
//         first = true;
//         pazl[k].style.border = "none";
//         for(let i =1;i<15;i++){
//         	console.log(i, pazl[i].style.order);
//         	if (i==4) continue;
//         	if(pazl[i].style.order!=i) break;
//         	if(i==14) $('.praise').append('<p class="q">Поздравляю, ты молодец!</p>');

//         }
//         //pazl[k].style.cssText = "border: none;";
//  	}   
 	    
 	   
// }
