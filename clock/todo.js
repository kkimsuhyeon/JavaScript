const toDoform = document.querySelector(".js-toDoForm"), // 내용을 입력 받는 form
    toDoInput = toDoform.querySelector("input"), // 실제로 입력 받는 부분
    toDoList = document.querySelector(".js-toDoList"); // 리스트가 생성되는 태그

const TODOS_LS = "toDos";

let toDos = []; // 해야할일은 여러개이기 때문에 리스트로 들어온다

function filterFn(toDo) {
    return toDo.id === 1;
}

function deleteTodo(event) {
    // HTML에서 li를 지우는 역할을 한다
    // event.target 어떤버튼이 클릭되었는지에 대한 정보가 들어가 있다
    // event.target.parentNode; 클릭된 버튼의 부모태그를 찾아서 확인이 가능하다

    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); // ul 밑에 있는 지정된 li를 제거하는 역할을 한다

    // const cleanToDos = toDos.filter(filterFn);
    // filter는 Object에 대한 function이라고 생각하면 편할 것 같다
    // toDos 행렬에서 Object가 존재 그 Object의 키 값을 통해서 값을 사용 함수에 적용시킨다
    // 여기서는 toDo.id 값이 1인 값은 true를 리턴 아니면 false를 리턴
    // 결과를 다시 행렬로 만들어서 리턴해준다 -> cleanToDos에 행렬에 True인 값만 들어가 행렬을 이룬다

    const cleanTodos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id); // 일치하면 false, 일치하지 않으면 true -> 일치하는 것만 빠지게 된다
        // li의 id는 String이므로 비교를 위해서 Int로 바꿔준다
    });

    toDos = cleanTodos;
    saveToDos();
}

function saveToDos() {
    // local에 저장하는 역할을 한다

    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // local에는 javascript의 데이터를 저장할 수 없다 -> Object 저장이 불가능 하다(오직 String만 저장 가능)
    // 그래서 Object를 String 형태로 바꿔준다
}

function paintToDo(text) { // 리스트를 만드는 역할을 한다
    const li = document.createElement("li"); // li 태그 생성

    const delBtn = document.createElement("button"); // button 태그 생성
    delBtn.innerText = "삭제"; // 버튼에 글자를 넣는다
    delBtn.addEventListener("click", deleteTodo); // 클릭하게 되면 삭제를 실행한다

    const span = document.createElement("span"); // span 태그 생성
    span.innerText = text; // span에는 입력한 내용이 들어간다

    const newId = toDos.length + 1; // id값을 지정
    // length는 배열의 길이를 알려준다  

    li.id = newId; // 각각의 li마다 id를 설정해준다

    li.appendChild(span); // li 안에 span을 넣는다
    li.appendChild(delBtn); // li 안에 button을 넣는다
    toDoList.appendChild(li); // ul안에 li을 넣는다

    const toDoObj = {
        text: text, // 내용이 들어가게 된다
        id: newId // id에는 고유값이 들어가게 된다

    }

    toDos.push(toDoObj); // 리스트에 오브젝트를 넣는다
    saveToDos(); // 설정된 toDos를 Local에 저장한다, toDos에 계속 덮어쓰게 된다
}

function handleSubmit(event) { // submit에 대한 이벤트 처리를 한다
    event.preventDefault(); // 기본 이벤트 막기
    const currentValue = toDoInput.value; // input에 있는 값을 받아온다
    paintToDo(currentValue); // 받은 값을 통해 리스트에 추가
    toDoInput.value = ""; // input칸을 빈칸으로 초기화 한다

}

function loadToDos() {
    const loadedtoDos = localStorage.getItem(TODOS_LS); // Storage에 저장된 값을 불러온다

    if (loadedtoDos !== null) { // Storage가 빈칸이 아닌경우
        const parsedToDos = JSON.parse(loadedtoDos);
        // String을 JSON형식으로 다시 변형시킬수 있다 -> 다시 javaScript 데이터 형식으로 바꿀수 있다

        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
        // forEach는 배열에 들어간것을 한개씩 뽑아와서 함수에 전달하는 역할을 한다(배열을 위한 function)
        // list에 있는 모든 item을 위한 함수
        // parsedToDos.forEach(something)을 통해서 parameter를 전달하면서 함수 사용이 가능하다
    }
}

function something(toDo) {
    console.log(toDo.text);
}

function init() {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
    // form에 대해서 submit 이벤트를 기다리게 하고 이벤트가 작동하면 handle을 실행시킨다
}

init();