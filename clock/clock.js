const clockContainer = document.querySelector(".js-clock"), // class이름을 통해서 태그 정보 받아옴
    clockTitle = clockContainer.querySelector(".js-title"); // 위의 태그 안에서 한번 더 찾는다

function getTime() {
    const date = new Date(), // 날짜 객체 생성 -> 현재 날자를 받아온다
        minutes = date.getMinutes(), // 분
        hours = date.getHours(), // 시간
        seconds = date.getSeconds(); // 초

    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}
    : ${minutes < 10 ? `0${minutes}` : minutes}
    : ${seconds < 10 ? `0${seconds}` : seconds}`; 
    // String으로 만들어서 시간을 보여준다
    // seconds가 10보다 작을경우는 0을 앞에 붙여주고, 아닐경우는 그냥 그대로 보여준다
}

function init() {
    getTime(); // 시간을 불러오는 함수 실행
    setInterval(getTime, 1000);
		// setInterval(함수, 시간)
		// 원하는 시간마다 지정 함수를 실행시킨다
		// 여기서 시간을 millsecond를 의미한다
}

init(); // HTML이 실행되면 실행되는 함수