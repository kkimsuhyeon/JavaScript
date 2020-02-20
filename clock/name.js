const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text); // 이름에 대한 정보를 Storage에 저장한다
}

function handleSubmit(event) {
    event.preventDefault();
    // form의 기본 이벤트인 submit을 막는 기능을 한다
    // 원래 enter를 누르면 form의 기능은 submit이 되면서 어딘가로 정보를 보내게 되는데
    // prevent를 통해서 form의 기능인 submit을 막게 된다

    const currentValue = input.value;
    // input에 들어간 값을 받아온다

    paintGreeting(currentValue);
    saveName(currentValue);

}

function askForName() { // 이름에 대한 정보가 없을 경우 실행되는 함수
    form.classList.add(SHOWING_CN); // form태그를 보여주게 한다
    form.addEventListener("submit", handleSubmit);
    // submit 이벤트를 기다린다, 이벤트가 들어오게 되면 handle을 실행시킨다
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); // form 태그를 삭제시킨다
    greeting.classList.add(SHOWING_CN); // 이름 출력줄을 보이게 한다
    greeting.innerText = `Hello ${text}`; // 이름 출력
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        // 유저 정보가 없는 경우
        askForName();
    } else {
        // 유저 정보가 있는 경우
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();

// Seletor는 결과중 제일 첫번째를 가지고 온다
// SelectAll은 해당되는 모든 결과를 가지고 온다
// All로 가지고 오는 결과는 Array로 결과를 리턴해주게 된다

// Application -> Local Storage
// 여러가지 정보가 들어가있는것을 확인할 수 있다
// 자바스크립트들의 정보들을 저장할 수 있는 공간이라고 생각하면 된다

// localStorage.setItem("itemKey", "itemValue");
// Local Storage에 저장된 값은 새로고침을 해도 저장되어 있다

// localStorage.getItem("itemKey")
// Local Storage에 저장된 값을 key를 통해서 불러올수 있다
// 없는 key를 전달하면 null을 리턴해준다