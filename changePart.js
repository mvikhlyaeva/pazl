var pazl = document.querySelectorAll('.partOfPazl');
var first = true;
var order;
var k;

for (let i = 0; i < numberOfPart * numberOfPart; i++)
	pazl[i].onclick = function () {
		if (first) {
			console.log("1");
			order = pazl[i].style.order;
			k = i;
			first = false;
			pazl[i].style.border = "3px solid #ababab";
			// $(this).css({
			// 	border: "3px solid #ababab"
			// })
		} else {
			console.log("2");
			pazl[k].style.order = pazl[i].style.order;
			pazl[i].style.order = order;
			first = true;
			pazl[k].style.border = "none";
			for (let i = 0; i < numberOfPart * numberOfPart; i++) {
				if (pazl[i].style.order != i) break;
				if (i == numberOfPart * numberOfPart - 1) $('.praise').append('<p class="q">Поздравляю, ты молодец!</p>');

			}
		}
	}