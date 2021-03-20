var pazl  = document.querySelectorAll('.partOfPazl');
var first=true;
var order;
var k;

for(let i=0;i<numberOfPart*numberOfPart;i++)
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
