# hsmotion

## 1.0.n - Test version

## React {name} from 'hsmotion';

---

- scrollMove(tagName, gap)
  - 메뉴 이동 함수 입니다.
  - 매개변수로 tagName과 gap 값을 받고, 해당 함수 선언 시 tagName이 위치한 스크롤 위치로 gap 값의 속도 만큼 이동 시킵니다.
  - 존재하지 않는 tagName 일 경우 false 값을 반환합니다.
  - 사용 예시) {name}.scrollMove('.test-class', 40);
  - header 태그가 존재한다면, header 태그의 높이까지 계산되어 스크롤 처리 됩니다.

---

- navScroll
  - 페이지 스크롤 시 GNB 노출 여부 함수 입니다.
  - 스크롤 위치가 최상단일때 body 태그에 nav-fixed 라는 함수를 추가합니다.
  - 현재 버전에서는 스크롤 이벤트 처리가 되어있지 않습니다.

---

- consoleTest(text)
  - console.log 테스트용 함수 입니다.
