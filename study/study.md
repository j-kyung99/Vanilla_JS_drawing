## Canvas 정리

### 사각형 그리기

- ctx.rect(x, y, w, h);
- ctx.stroke() (테두리) or ctx.fill() (채우기)

### canvas에서 그림을 그릴 때는 단계별로 진행이 필요함

- 새 경로 시작하는 방법: ctx.beginPath();

### rect를 이루는 두가지 function

- moveTo(x, y); => 브러쉬의 좌표를 움직임
- linkTo(x, y); => 라인을 그려줌
- 라인이 끝나는 지점이 다음 시작하는 브러쉬 좌표임
