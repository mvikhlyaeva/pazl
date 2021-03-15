var pazl  = document.querySelectorAll('.partOfPazl');
let b = document.querySelector(".aaa");


b.onclick = function(){
	console.log("3");
//for(let i=0;i<4;i++){
	pazl[0].style.order = 3;
	pazl[1].style.order = 2;
	pazl[2].style.order = 1;
	pazl[3].style.order = 0;
	
	console.log("1");
// }	
 }

var first=true;
var order;
var k;
for(let i=0;i<4;i++)
 pazl[i].onclick = function() {
 	if(first){
 		console.log("1");
 		order = pazl[i].style.order;
 	    k = i;
 	    first = false;
 	    //pazl[i].style.cssText = "border: 0.1px solid #888;";
 	    pazl[i].style.border = "0.1px solid #888";
 	}
 	else{
 		console.log("2");
        pazl[k].style.order = pazl[i].style.order;
        pazl[i].style.order = order;
        first = true;
        pazl[k].style.border = "none";
        //pazl[k].style.cssText = "border: none;";
 	}   
 	    
 	   
}