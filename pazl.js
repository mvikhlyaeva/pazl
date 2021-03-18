var pazl  = document.querySelectorAll('.partOfPazl');
let b = document.querySelector(".button");

$(function(){
  $('.pazl').height($('.pazl').width()*0.72265625); // Соотношение 4 к 3

  $(window).resize(function(){
    $('.pazl').height($('.pazl').width()*0.72265625);
  });
});

var numberOfOrder = [];
for(let i=0;i<16;i++){
	numberOfOrder[i]=i;
}
for(let i=15;i>0;i--){
   let x=Math.floor(Math.random() * i )  
   	let t=numberOfOrder[i];
   	numberOfOrder[i]=numberOfOrder[x];
   	numberOfOrder[x]=t;
}
for(let i=0;i<16;i++){
console.log(numberOfOrder[i]);
}


b.onclick = function(){
	console.log("3");
for(let i=0;i<16;i++){
	pazl[i].style.order=numberOfOrder[i];
}	
$('.q').detach();
 }

var first=true;
var order;
var k;
for(let i=0;i<16;i++)
 pazl[i].onclick = function() {
 	if(first){
 		console.log("1");
 		order = pazl[i].style.order;
 	    k = i;
 	    first = false;
 	    pazl[i].style.border = "0.1px solid #888";
 	}
 	else{
 		console.log("2");
        pazl[k].style.order = pazl[i].style.order;
        pazl[i].style.order = order;
        first = true;
        pazl[k].style.border = "none";
        for(let i =1;i<15;i++){
        	console.log(i, pazl[i].style.order);
        	if (i==4) continue;
        	if(pazl[i].style.order!=i) break;
        	if(i==14) $('.praise').append('<p class="q">Поздравляю, ты молодец!</p>');

        }
        //pazl[k].style.cssText = "border: none;";
 	}   
 	    
 	   
}
