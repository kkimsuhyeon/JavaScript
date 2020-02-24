const INITIAL_COLOR = "#2c2c2c2";
const CANVAS_SIZE = 500;

const canvas = document.getElementById("jsCanvas");
// HTML에서 canvas라는 태그는 픽셀을 다루는 기능을 한다

const ctx = canvas.getContext("2d"); // 2d말고도 많은 요소가 있다
// 현재 컨버스는 2d이므로 2d옵션을 사용하여 좌표를 받아올 예정

const colors = document.getElementsByClassName("jsColor");
// 색상들의 정보를 추출한다

const range = document.getElementById("jsRange");
// 글자 크기 조절하는 bar를 추출

const mode = document.getElementById("jsMode");
// fill, paint 버튼을 위해서 추출

const saveBtn = document.getElementById("jsSave");

ctx.strokeStyle = INITIAL_COLOR; // 선 스타일을 나타내는듯, 처음 사용하면 검은색이 설정되어 있따
ctx.lineWidth = 2.5; // 그림을 그리는데 선의 굵기를 설정한다, 처음 사용하면 글 굵기는 기본값인 2.5에 설정되어 있다

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
// 처음에 화면을 하얀색으로 채우는것을 시작으로 한다
// 그림이 저장될때 배경이 없을경우 투명한 배경으로 저장이 되므로 처음에 하얀색으로 채워주어야 한다

ctx.fillStyle = INITIAL_COLOR; // 채우기 색의 기초 설정

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
// 넓이와 높이를 지정해 줘야지 그림이 그려진단다 ??
// 여기 안에서 픽셀을 컨트롤 한다는걸 알려줘야 한다고 한다

let painting = false; // 그림을 그릴지 않그릴지 판단할 flag
let filling = false; // 채우기 모드에 대한 flag

function stopPainting() {
    // 그림 그리기를 멈추겠다
    painting = false;
}

function startPaintring() {
    // 그림 그리기를 시작하겠다
    painting = true;
}

function onMouseMove(event) {
    // event에는 client(x, y)는 윈도우 전체 기준으로 좌표
    //  -> offset(x, y)는 캔버스 기준으로 좌표

    const x = event.offsetX;
    const y = event.offsetY;
    // 마우스 움직이면 그 마우스의 위치를 저장한다

    if (!painting) { // 클릭 안하고 움직일 떄임
        ctx.beingPath(); // path 생성, 필요없을수도 있다고 한다
        ctx.moveTo(x, y); // 좌표를 통해 마지막까지 클릭 안하고 움직이는 곳을 찾음
        // moveTo는 단순히 마우스의 좌표를 업데이트만 시켜주는 것

    } else {
        ctx.lineTo(x, y); // 좌표에 라인을 긋는다
        // lineTo는 전의 좌표에서 지금의 좌표까지 연결하는 기능
        ctx.stroke(); // 선을 긋는다

    }

}

function onMouseDown(event) {
    // 클릭을 하게 되면 그림그리기를 시작하겠다
    painting = true; // 그림그리기 시작을 위한 true

}

function handleColorClick(event) {

    const color = event.target.style.backgroundColor; // 각각의 버튼의 color를 뽑아낸 후에
    ctx.strokeStyle = color; // 색을 바꿔준다
    ctx.fillStyle = color; // 채우는 색도 바꿔준다

}

function handleRangeChange(event) { // input으로 값이 들어오면 작동하게 된다
    ctx.lineWidth = event.target.value; // input에 의한 값으로 굵기를 업데이트 해준다
}

function handleModeClick(event) {
    if (filling === true) {
        filling = false;
        mode.innerText = "FILL";
    } else {
        filling = true;
        mode.innerText = "Paint"; // 버튼의 보이는 글자를 바꿔준다
    }
}

function handleCanvasClick(event) {
    if (filling) { // filling이 true일때만 작동
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE) // 사각형을 그려주는 역할을 한다
            // x좌표, y좌표, 넓이, 높이
    }
}

function handleCM(event) {
    event.preventDefault(); //우클릭 방지를 할때 사용하는 방법, 기존 event의 기능을 막는다
    // canvas내에서 우클릭을 방지한다

}

function handleSaveClick(event) {
    const image = canvas.toDataURL(); // 파일 형식을 정해준다, 기본값은 png
    const link = document.createElement("a");

    link.href = image;
    link.download = "paint"; // a태그에는 download라는 속성이 존재, 실재로 태그 내에서 사용하면 url이동 대신 다운이 가능하다
    // download에는 파일 이름이 들어간다

    link.click(); // link를 클릭하게 한다

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

    canvas.addEventListener("click", handleCanvasClick);

    canvas.addEventListener("contextmenu", handleCM);
    // 우클릭 이벤트
}

Array.from(colors).forEach(color => { // 각각의 버튼을 뽑아낸다
    // 여러개의 내용을 행렬로 바꿔주는 기능을 한다

    color.addEventListener("click", handleColorClick); // 버튼마다 이벤트 클릭 이벤트에 대한 대기를 걸고 함수를 실행시킨다
});

if (range) { // range가 잘 들어왔는지를 확인
    range.addEventListener("input", handleRangeChange);
    // 정보가 input에 의해서 들어오므로
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
    // mode 버튼에 이벤트 대기 설정
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}