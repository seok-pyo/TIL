## 13일 - 수
- 데이터형, 기본형과 참조형의 차이점. 메모리에 어떻게 저장되는지 설명해보자.
- 데이터는 선언 후에 할당
- 메모리에 식별자를 저장(선언) - 값을 메모리에 저장 - 식별자와 값의 메모리를 연결(할당)
- 타입스크립트로 drag&drop 웹사이트 만들기 시작 - DOM 요소 선택 및 OOP 렌더링
- HTML template 태그
- document.importNode
- template.content 속성 / documentFragment 객체(DOM 컨텐츠를 포함하는 임시 컨테이너)
- insertAdjacentElement

## 14일 - 목
- autobind 데코레이터 만들기
- 이벤트 핸들러, 콜백 함수의 this 바인딩
- 선언시점, 호출시점
- 일반함수, 화살표함수
- 이벤트 리스너, 비동기, 콜백큐, 이벤트 루프, 백그라운드,이벤트 객체
- 콜백함수 실행 순서
  - [ 이벤트 리스너가 백그라운드에 등록 - 이벤트 발생 - 이벤트 객체를 핸들러에 넘기고, 콜백큐로 이동 - 스택이 다 비면 콜스택으로 이동 - 실행 ]

## 15일 - 금
- autobind 데코레이터는 어떻게 동작할까?
  - [ 클래스 정의 시점에 디스크립터에 getter 함수 세팅, 수정된 디스크립터 반환 - 메서드가 호출되면 수정된 디스크립터의 get 함수 실행 - 수정된 메서드 반환 - 수정된 메서드 실행 ]
- 클래스 데코레이터는 클래스나 클래스 생성자를 반환할 수 있다.
- 메서드 데코레이터는 프로퍼티 디스크립터를 반환한다.
- 속성 데코레이터는 메타데이터를 설정하는데 사용된다.
- 접근자 데코레이터는 프로퍼티 디스크립터를 반환하여 getter/setter 메서드의 동작을 수행한다.
- 재사용 가능한 검증 기능 생성 : 정해진 형태의 객체를 받도록 하고, 해당 객체를 검증하는 함수를 이용한다.
- 이때 Interface를 사용할 수 있다.
- != null : null or undefined
- 프로젝트 목록 렌더링하기
- 선언과 정의 차이점
- 제네릭, 제네릭 유틸리티 타입
