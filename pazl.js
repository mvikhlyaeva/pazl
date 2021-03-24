//var pazl  = document.querySelectorAll('.partOfPazl');
let b = document.querySelector(".buttonStart");
var pazl;
var numberOfPart;

//Функция, задающая случайный порядок элементов
var numberOfOrder = [];
function createAnsortNumberOfOrder(numberOfPart){

for(let i=0;i<numberOfPart*numberOfPart;i++){
	numberOfOrder[i]=i;
}
for(let i=numberOfPart*numberOfPart-1;i>0;i--){
   let x=Math.floor(Math.random() * i )  
   	let t=numberOfOrder[i];
   	numberOfOrder[i]=numberOfOrder[x];
   	numberOfOrder[x]=t;
}
}

b.onclick = function(){
	//Удаляем класс со скриптом меняющим картинки
	$('.a').detach();
	let radios = document.querySelectorAll('input[type="radio"]');
	for (let radio of radios) {
		if (radio.checked) {
			 numberOfPart = radio.value;
		}
	}
//удаляем выведенный пазл	
$('.partOfPazl').detach();	

//Добавляем нужное количество частей пазла
for(let i=0;i<numberOfPart*numberOfPart; i++){
	$('.pazl').append('<div class="partOfPazl"><img class="partOfPazlImg" src="'+ imgsrc + '"></div>');
}


img = document.querySelector(".partOfPazlImg");
//console.log(img.naturalWidth);
//console.log(img.naturalHeight);

//Задаем размеры картинки внутри частей пазла
var partOfPazl = document.querySelectorAll('.partOfPazl');
for(let i=0;i<partOfPazl.length;i++){
partOfPazl[i].style.width = 100/numberOfPart +'%';
partOfPazl[i].style.height = 100/numberOfPart +'%';
}

//Задаем отступы для правильного отображения пазла
 var partOfPazlImg  = document.querySelectorAll('.partOfPazlImg');
 for(let i=0;i<partOfPazlImg.length;i++){
   partOfPazlImg[i].style.margin = (Math.floor(i/numberOfPart)*-(img.naturalHeight/img.naturalWidth*100) +'% 0 0 '+ ((i%numberOfPart)*-100) +'%');
     partOfPazlImg[i].style.width = numberOfPart*100 +'%';
}

createAnsortNumberOfOrder(numberOfPart);

//Перемешиваем части пазла 
for(let i=0;i<numberOfPart*numberOfPart;i++){
    pazl  = document.querySelectorAll('.partOfPazl');
	pazl[i].style.order= +numberOfOrder[i];
}
//Удаляем поздравительную надпись	
$('.q').detach();

//Добавляем скрипт для замены местами
var scripts = document.querySelector('.scripts');
var js = document.createElement('script');
js.src = "changePart.js";
js.classList.add("a");
scripts.appendChild(js);
 }


