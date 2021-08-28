function btn_click(clicked_id){ //onclick event -> 버튼이 눌렸을의 함수를 임의로 선언. clicked_id는 onclick event가 발생했을 때의 id파라미터.
    if (clicked_id == 0){ // clicked_id 가 0일때 getElementById로 내가 변경하고싶은 html id를 가져오고, innerHTML을 이용해 HTML값을 바꾸어준다. 추가로, 만약 id가 숫자가아니라 char형태라면 ""로 감싸준다.
        document.getElementById("mainscr").innerHTML = "정석학술정보관";
    }
    else if (clicked_id == 1){
        document.getElementById("mainscr").innerHTML = "2호관";
    }
    else if (clicked_id == 2){
        document.getElementById("mainscr").innerHTML = "4호관";
    }
    else if (clicked_id == 3){
        document.getElementById("mainscr").innerHTML = "60주년기념관";
    }
    else if (clicked_id == 4){
        document.getElementById("mainscr").innerHTML = "본관";
    }
    else if (clicked_id == 5){
        document.getElementById("mainscr").innerHTML = "드림센터";
    }
}

//알고리즘 순서
// B(onclick event 발생) -> A, C, E 변경 -> 데이터베이스에서 문제발생 시 map 변화?
// A  C 완료. E는 데이터베이스 연결.