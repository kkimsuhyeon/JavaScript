const body = document.querySelector("body");
const IMG_NUMBER = 5;

function paintImage(imgNumber) {

    const image = new Image(); // image Object를 생성, img 태그를 추가하기 위해서 사용하는듯
    image.src = `image/${imgNumber + 1}.jpg`; // img에 대한 path를 지정해준다
    image.classList.add("bgImage");
    body.appendChild(image);

    // const imgTest = document.createElement("img");
    // imgTest.src = `image/${imgNumber + 1}.jpg`;
    // imgTest.classList.add("bgImage");
    // body.appendChild(imgTest);
    // 이렇게도 할 수 있는듯
}


function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    // 5를 곱해주는 이유는 0 ~ 1사이의 값을 0 ~ 5사이에 값이 랜덤으로 나오게 하기 위해서

    return number;

    // Math에는 많은 함수가 있다
    // Math.random() : 랜덤으로 0 ~ 1 까지 숫자를 리턴해준다
    // Math.floor() : 소수를 버림으로 처리한다
    // Math.ceil() : 소수를 올림으로 처리한다
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();