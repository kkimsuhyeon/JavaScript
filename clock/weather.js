const weather = document.querySelector(".js-date");
// 날씨정보가 출력될 태그의 정보

const API_KEY = `ca813e26ebab7a6de75f75a2d4a5f59c`;
// API key는 weatherAPI라는 홈페이지에서 가지고 왔음
// wzxy2002@naver.com, tngus1598
// 날씨 데이터를 가지고 오기 위해서 사용함

const COORDS = 'coords';

function getWeather(lat, long) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
        .then(function(respoonse) { // 데이터가 들어올때 까지 기다린후
            return respoonse.json();
        }).then(function(json) { // 위의 함수가 모든 동작을 완료할때까지 기다린 후
            const temper = json.main.temp;
            const place = json.name;

            weather.innerText = `${temper} @ ${place}`;
        });

    // http를 통해서 데이터를 받아오는 방법(fetch)
    // API를 통한 데이터를 받아올때 사용한다
    // 값을 받아오는 것을 확인하기 위해서는 Network창에서 확인하면 된다
    // then은 데이터가 들어왔을 경우 실행이 된다(데이터가 느리게 들어오는 경우가 있기 때문에)
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    // local에 저장하기 위해 Object를 String으로 교체
}

function handleGeoSucces(position) {
    // 좌표를 받아오기를 성공했을때

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // 좌표를 변수에 저장한다

    const coordsObj = {
        // latitude: latitude,
        // longitude: longitude

        latitude,
        longitude
        // 같은 이름을 사용할 경우 생략이 가능하다
    };
    saveCoords(coordsObj); // 좌표를 local에 저장하는 기능
    getWeather(latitude, longitude); // 날씨 정보를 받아오는 기능
}

function handleGeoError() {
    // 좌표를 받아오기를 실패했을때
    console.log("cant");
}

function askForCoords() {
    // 위치 좌표를 받아오기 위한 함수

    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    // 현재 client의 위치 정보를 알수있는 API를 사용
    // 첫번째 인자는 position을 잘 받아왔을때 함수, 두번째 인자는 position을 못받아 왔을때 함수
    // 실행이 되면 왼쪽 상단에 위치정보를 허용할 것인지를 물어보게 된다
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS); // Local에서 값을 가지고 온다
    if (loadedCoords === null) { // 값이 없는 경우
        askForCoords(); // 위치를 물어보는 함수를 실행
    } else { // 값이 있는 경우
        const parsedCoords = JSON.parse(loadedCoords); // 좌표 정보를 불러와서
        getWeather(parsedCoords.latitude, parsedCoords.longitude); // 날씨 정보 데이터를 불러오는 함수 실행
    }
}

function init() {
    loadCoords();

}

init();