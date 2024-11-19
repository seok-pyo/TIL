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
## 16일 - 토
[ Drag&Drop 웹사이트 개발 복습 ]
- DOM 요소 선택
- OOP 렌더링
- Dom Element 상호작용
  - configure 함수와 subminHandler 함수로 나눠서 작성하는 방법.
- 사용자 입력 가져오기
  - this 바인딩, 데코레이터, 디스크립터
  - 데코레이터는 객체의 속성의 메타데이터 / 데이터 디스크립터와 접근자 디스크립터로 나뉘고, 둘 중 하나를 선택해야 한다.
  - 접근자를 이용하면 속성처럼 메서드를 사용할 수 있는 인터페이스를 쓸 수 있다.
  - 데코레이터는 매개변수를 통해서 구분되고, 메서드 데코레이터의 경우 반환하는 객체를 디스크립터로 해석한다.
- 재사용 가능한 검증 기능 만들기
  - 입력값을 모아서 처리할 수 있는 자료형 만들기 - 인터페이스 활용
  - 튜플 형태로 자료 받아서 검증할 수 있도록 하기(gatherUserInput)
  - validatable 인터페이스 만들기 - validate 함수 만들기 - gatherUserInput 함수 만들고(튜플 타입 정의), validate호출해서 사용 - submitHandler 함수에서 호출해서 사용하기 /
  - validatable 인터페이스 - validate 함수 - gatherUserInput 함수 - submitHandler 함수
  - submitHnadler 함수에서 gatherUserInput 함수의 반환값이 튜플인지 확인 후에 값을 사용하는 방법 - Array.isArray(값) : 왜냐하면 튜플도 배열이기 때문에, 배열인지 확인한다.
## 17일 - 일
- 프로젝트 목록 렌더링 하기
- 싱글톤으로 애플리메이션 상태 관리하기
  - prjState 상태관리 클래스 생성
    - private static 키워드로 싱글톤 인스턴스 생성
    - addListener 메서드를 만들어서 list가 변경될 때 listener 함수를 추가
    - addProject 메서드로 프로젝트 객체를 만들고, projects 배열에 추가 - 리스터 함수 배열을 호출해서 프로젝트 배열을 전달
  - ProjectList 클래스에서 입력을 받을 수 있도록 하고, 받은 입력을 addProject를 실행해서 prjState 클래스를 호출
  - ProjectList가 생성될 때, prjState.addListener를 추가한다. 
## 18일 - 월
- 클래스, 커스텀 타입으로 교체하기
- enum status 자료형 추가 
- eventListener에서 필터링을 통해서 active / finished 따른 렌더링 나누기 / 열거형으로 프로젝트 필터링 하기(projectList 클래스에서 수행)
- 중복 렌더링 방지
- 클래스 필드 키워드 public / private / protected / readonly / static / abstract
- 디스크립터란? value는 누가 가지고 있나?
## 19일 - 화
- 운영체제의 역사(ms-dos / unix)
- 운영체제 자원 관리자
- class 타입을 만들때 enum 타입을 활용해서 필터링하기.
- 상속 & 제네릭으로 중복 제거하기
- 객체는 참조형, 복사해서 전달하는 것
- 퍼블릭 메서드는 관례상 프라이빗 메서드 위에
- super, protected 키워드
