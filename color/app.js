const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // 2d말고도 많은 요소가 있다

ctx.strokeStyle = "#2c2c2c2";
ctx.lineWidth = 2.5; // 그림을 그리는데 선의 굵기를 설정한다

let painting = false; // 그림에 대한 기능

function stopPainting() {
    painting = false;
}

function startPaintring() {
    painting = true;
}

function onMouseMove(event) {
    // event에는 client(x, y)는 윈도우 전체 기준으로 좌표
    //  -> offset(x, y)는 캔버스 기준으로 좌표

    const x = event.offsetX;
    const y = event.offsetY;
    // 마우스 움직이면 그 마우스의 위치를 저장한다

}

function onMouseDown(event) {
    painting = true; // 클릭에 대한 반응으로 true로 바꾼다

}

if (canvas) { // canvas가 있을 경우
    canvas.addEventListener("mousemove", onMouseMove);
    // canvas 위에서 마우스가 움직이는 이벤트 대기(다른곳에서 움직이는 건 인식 되지 않는다)
    // mouseenter : 마우스가 canvas로 들어왔을때를 의미한다
    // mousemove : 마우스가 움직이는 이벤트

    canvas.addEventListener("mousedown", startPaintring);
    // 마우스 클릭 이벤트 -> paint 기능 시작

    canvas.addEventListener("mouseup", stopPainting);
    // 마우스 클릭 해제 이벤트 -> paint 기능 종료

    canvas.addEventListener("mouseleave", stopPainting);
    // 마우스가 canvas 밖으로 나갔을때 -> paint 기능 종료
}