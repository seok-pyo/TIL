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
- - -
- class 타입을 만들때 enum 타입을 활용해서 필터링하기.
- 상속 & 제네릭으로 중복 제거하기
- 객체는 참조형, 복사해서 전달하는 것
- 퍼블릭 메서드는 관례상 프라이빗 메서드 위에
- super, protected 키워드
## 20일 - 수
- 비트 > 스위치 > 1 = on, 0 = off
- 1비트 > 2가지의 경우의수
- 2진수 > 16진수 > 4비트 > 8 4 2 1
- 메모리주소, 색상표현(8비트 > 16진수 표현 2개로 표현 가능) 
- - -
- 접근자 디스크립터와 getter의 차이점 / this.method Vs this.method();
- 메서드 데코레이터는 어떻게 실행되는가
- 인터페이스 Implements
- interface : 순수하게 청사진만을 제공 / 메서드 구현을 가질 수 없음 / 다중 구현이 가능
- abstract class : 추상 메서드와 일반 메서드를 모두 가질 수 있음 / 단일 상속만 가능
- abstract 메서드는 abstract class 내에서만 사용가능 / 구현을 하지 않고 자식 클래스에서 구현하도록 강제하는 메서드
- abstract 메서드는 인스턴스화 할 수 없음. 상속을 통해서 자식 클래스에서 구현해야 함. 
## 21일 - 목
- 드래그이벤트에 데이터를 붙이고, 받아서 ui 업데이트 하기
- dragEvent api
## 22일 - 금
- 모듈 / 네임스페이스, esm
- 기본적으로는 전역 스코프, export로 노출시켜야 모듈로 인식
## 23일 - 토
- JSON.stringify는 객체를 JSON 형태의 문자열로 반환
## 25일 - 월
- 데코레이터 팩토리를 실행하면 반환되는 데코레이터를 실행할 수 있다. decorator()();
- webpack 설정하기 / 번들러를 사용하는 이유
- declare
- 기본적으로 스크립트의 변수는 전역
- npm init / tsc --init
- 클래스는 클래스이자 타입
- REST Api / HTTP protocol / HTTP 메서드 / URI, URL
- SDK
Rest (representational State Transfer)

API는 HTTP를 기반으로 하는 웹 서비스의 아키텍처 스타일 중 하나

RESTful API 는 클라이언트와 서버 간의 통신을 통해 자원(데이터)를 주고 받으며, 아래 주요 개념을 따른다.
1. 자원, 웹상의 모든 정보를 의미, 각 자원은 고유한 URI로 식별된다.
2. HTTP 메서드
3. 무상태성
4. 표현
4. 인터페이스 일관성
6. 계층화
7. 캐시 가능

HTTP 메서드
- 클라이언트가 서버에게 무엇을 하기 원하는지에 대한 요청 방식(메서드)

Node.js 의 http 모듈

HTTP 프로토콜 (HyperText Transfer protocol)
클라이언트와 서버 간의 정보 교환을 위한 규약을 정의하며, 웹에서 데이터를 전송하는 방식에 대해 규명한다.
HTTP 프로토콜은 클라이언트가 서버에 요청(request)를 보내고, 서버는 이를 처러하여 응답(response)를 보내는 방식으로 동작한다. 이 과정에서 중요한 것은 Http 메서드와 헤더, 그리고 본문이다.

URL (Locator) 자원의 위치, 하나의 파일 위치
URI 식별자, 파일이 위한 곳에서 구분할 수 있도록 하는것. URL에 식별자가 붙으면 URI 라고 할 수 있다.
## 26일 화
- Fetch 메서드
- async/await
- 이벤트 위임(버블링, 타깃, 캡처링) - 이벤트의 시작은 window 객체
- $0
- matches() / getAttribute() / Object.values() / Object.keys / map / join
- 상위 노드 찾는 함수 구현
## 27일 수
- imperative(명령형) - how / declarative(선언형) - what
## 29일 금
- 비동기와 콜백큐
