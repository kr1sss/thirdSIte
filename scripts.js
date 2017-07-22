var leftImg = document.getElementById("imgLeft");
var rightImg = document.getElementById("imgRight");
var number = 0;

function setSlide() {
	switch(number) {
		case 0:
			leftImg.src = "images/Livello5.jpg";
			rightImg.src = "images/Livello6.jpg";
		break;
		case 1:
			leftImg.src = "images/Livello6.jpg";
			rightImg.src = "images/slider3.jpg";
		break;
		case 2:
			leftImg.src = "images/slider3.jpg";
			rightImg.src = "images/slider4.jpg";
		break;
		case 3:
			leftImg.src = "images/slider4.jpg";
			rightImg.src = "images/slider5.jpg";
		break;
		case 4:
			leftImg.src = "images/slider5.jpg";
			rightImg.src = "images/Livello5.jpg";
		break;
	}
}

function moveSlide() {
	number = (number + 1);

		if (number > 4) {
			number = 0;
		}

	setSlide();
	setTimeout(moveSlide, 5000);
}

setTimeout(moveSlide, 5000);