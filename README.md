# Field Note
과정을 기록합니다. 

<br>

## Index
```Javascript```
- [호이스팅](#호이스팅)
- [연산자](#할당)
- [구조분해할당](#구조분해할당)
- [parameter/argument](#parameter--argument)
- [이벤트위임](#2024-11-26)
- [fetch 메서드](#2024-11-29)
- [async/await](./documents/async/async.js)
- [데이터 할당](#2024-11-13)
- [콜백함수](#2024-11-14)
- [V8 엔진](./v8-debug.md)

<br>

```Typescript``` 
- [데코레이터](#2024-11-15)
- [디스크립터](#2024-11-16)
- [제네릭](#2024-11-17)
- [접근자 디스크립터와 getter의 차이점](#2024-11-20)
- 제네릭 유틸리티 타입
- enum
- 클래스, 커스텀 타입
- 싱글톤
- 인터페이스
- 추상클래스

<br>

```React```
- [명령형/선언형](#2024-11-27)
- [Redux, reduxJs/toolkit, React-redux](#2025-01-16)
- [Redux](#2025-01-16)
- [Redux](#2025-01-16)
- [React router](2025-01-18)
<br> 

```Web```
- [로컬 서버의 동작](#웹서버)
- [server.listen](#웹서버)
- [서버 포트란](#웹서버)
- [express](#웹서버-2)
- [CORS](#웹서버-2)
- [nodeJs](https://github.com/seok-pyo/TIL/blob/main/2024/nov.md#18)
- [IP 주소](#IP-주소)
- RESTful API
- [HTTP](#2024-11-25)
- FireBase

<br>

```System```
- [프로세스 & 스레드](#프로세스,스레드,CPU)
- [터미널](#2024-12-12)
- [npm](#2024-12-12)
- 운영체제
- 비트/진법/주소
- [환경변수](#2024-12-08)

<br><br><br>

- - - 

# Log
<br>

## 2024-06-08

### 호이스팅

호이스팅의 개념. 메모리의 공간을 미리 잡아두는 것. 병목이 생기지 않도록. (종업원 한명이 일을 할 때 손님이 몰리면, 대충 테이블을 확보하는 것처럼)

블록 내에 있는 함수는 전체 평가 시점에 호이스팅은 되지만, 함수로 잡히지는 않는다.

자바스크립트 코드는 생성 단계(creation phase)와 실행단계(excution phase)로 진행된다.
코드는 스코프 별로, 평가(컴파일)된 후 실행되며, 평가 시 호이스팅 된다.

순서는 : 전역 코드 평가 -> 전연 코드 실행 -> 함수 코드 평가(호출시) -> 함수 코드 실행 -> 복귀

호이스팅은 평가 시 동작하며 선언부만 해당 스코프 상단으로 이동한다.

<br>

[INDEX](#index)
### 할당
```bash
사실 아래의 식은 수학적으로 성립하지 않고, 메모리의 관점에서 봤을 때(할당의 개념) 의미가 성립한다.
a = a + c;
```

### 구조분해할당
자바스크립트의 배열의 내부는 객체이다. 객체일때는 객체 id로 접근한다.
== 인덱스는 문자이다.

```javascript
arr[1]은 사실 arr['1']이다. 암묵적 형변환이 일어나고, 문자열로 객체의 키로 접근한다.
```

객체로 분해할당 할 때에는 {} 괄호를 블록으로 이해하게 되기 때문에 소괄호()로 한 번더 감싸준다.

객체의 키, 값에 접근하는 방법.

<br>

### parameter / argument

parameter는 함수를 구성하고 있는 변수 / argument는 함수의 전달되는 실제 값

<br>

### 연산자와 제어문

연산의 방향

쉼표연산자와 할당연산자 -> 증감연산자

Null 병합 연산자, BigInt 리터럴

[INDEX](#index)
<br>


## 2024-09-14

웹서버의 기초에 대해서 공부를 했다. nodeJS의 Http 모듈을 이용해서 간단한 서버를 구현하는 코드였는데, http.createServer((req, res) => { }); createServer 메서드를 이용해서 http.Server의 인스턴스를 생성하고,
이 인스턴스에 콜백함수를 붙여서, http.Server의 인스턴스가 Listen이 되면 콜백함수를 실행하도록 코드가 구성되어 있었다. 콜백 함수에 대해서 공부를 다시 하게 되었고, 서버와 클라이언트, 포트의 개념 그리고 프로세스에 대해서도 공부를 할 수 있었다.

### 웹서버

- http.createServer는 http.Server 클래스의 인스턴스 > 콜백함수 > F.O > 환경레코드
- server.listen : 서버를 켜는 것 : PORT를 여는 것

  - 서버 시작 / 연결 대기 / 비동기 동작
  - 서버 시작 : server.listen은 서버를 시작하여 지정된 포트와 호스트(또는 기본 호스트)에서 들어오는 요청을 수신하도록 만든다
  - 연결대기 : 이 메서드를 호출하면 서버는 클라이언트의 연결을 기다리며, 요청이 들어올 때마다 등록된 콜백 함수를 호출하여 해당 요청을 처리한다.
  - 비동기 동작 : server.listen은 비동기적으로 동작하며, 즉시 반환한다. 서버가 요청을 수신할 준비가 되면 선택적으로 제공되는 콜백 함수를 호출할 수 있다.

- 서버 포트란?

  - 포트 번호는 0부터 65535(16비트의 수)까지의 숫자로 표현되며, 컴퓨터에서 실행 중인 여러 네트워크 애플리케이션이 서로 충돌하지 않고 통신할 수 있도록 도와준다.
  - **조합의 수 != 범위의 수 != 실제값의 수**
  - 포트는 네트워크 소켓을 통해 외부와 통신하는 프로세스에만 할당된다.

- 로컬 서버의 동작

  - 서버 실행 : 먼저 server.listen(3000)과 같이 로컬 서버를 실행하면, 이 컴퓨터가 서버로서 특정 포트(예: 3000번 포트)에서 요청을 대기합니다.
  - 이 서버는 클라이언트의 요청을 수신하고 처리할 준비를 한다.
  - 클라이언트 요청 :
  - 같은 컴퓨터에서 웹 브라우저나 다른 클라이언트 프로그램을 사용하여 http://localhost:3000에 요청을 보낼 수 있다.
  - 이 요청은 **로컬 네트워크**를 통해 3000번 포트로 전달된다.
  - 서번 수신 및 응답 :
  - 서버는 3000번 포트에서 이 요청을 수신하고, 정의된 콜백 함수를 통해 응답을 처리한다.
  - 요청을 처리한 후, 응답을 클라이언트에게 보낸다.

[INDEX](#index)
<br>

  ### 프로세스, 스레드, CPU

  - 프로세스 : 두 가지 역할 : 로컬 환경에서는 하나의 컴퓨터에서 두 가지 역할을 모두 수행하지만, 이는 논리적으로 분리된다.
  - 1. 서버 프로세스 : 서버를 실행하는 노드 프로세스가 있다. 이 프로세스는 요청을 수신하고 응답을 처리하는 역할을 한다.
    2. 클라이언트 프로세스 : 웹 브라우저 또는 HTTP 클라이언트 역할을 한다. 이 프로세스는 서버에 요청을 보내고 응답을 수신한다.

  - 프로세스와 CPU

    - 프로세스 : 프로세스는 실행 중인 프로그램을 나타내며, 프로그램의 코드, 현재 상태, 메모리 공간 등을 포함한다.
    - CPU : 중앙 처리 장치는 프로세스를 실제로 실행하는 하드웨어이다.(명령 실행 / 스케줄링 / 문맥 교환)

  - 프로세스와 스레드

    - 프로세스 : 하나의 프로그램이 독립적으로 실행되는 단위이다. 각 프로세스는 독립된 메모리 공간을 가지고 있어 다른 프로세스와 직접 데이터를 공유하지 않는다.
    - 스레드 : 스레드는 프로세스 내에서 실행되는 더 작은 실행 단위이다. 하나의 프로세스는 여러 스레드를 가질 수 있으며, 스레드들은 프로세스의 메모리 공간을 공유한다.

    - 정리1 : 프로세스는 CPU에서 실행되는 프로그램의 인스턴스이다.
    - 정리2 : CPU는 프로세스의 명령어를 읽고 실행하며, 여러 프로세스를 스케줄링하여 실행한다.
    - 정리3 : 프로세스는 독립적인 실행 단위로서 자체적인 메모리 공간과 샐행 상태를 가지고 있다.

<br>

  ### IP 주소

  - IP 주소의 기본 개념
    - IP 주소란 : Internet Protocol Address는 네트워크 상에서 장비를 식별하는 고유한 숫자 주소이다. IP 주소를 사용하여 네트워크 내의 장치들 간에 데이터를 송수신할 수 있다.
    - IP는 공인 IP와 사설 IP로 나뉜다.
    - 프로세스와 IP 주소 : 프로세스(애프리케이션)은 네트워크 통신을 위해 포트 번호를 사용한다. IP 주소는 장비를 식별하고, 포트 번호는 장비 내에서 특정 어플리케이션이나 서비스를 식별한다.
    - IP 주소의 역할 : IP 주소는 네트워크 상에서 데이터 패킷을 목적지로 전송하는 데 사용된다. 네트워크 장비는 IP 주소를 통해 데이터의 출발지와 도착지를 확인한다.
    - 식별과 라우팅 : IP 주소는 네트워크 장비를 식별하고, 데이트를 올바른 경로로 라우팅하는 데 사용된다.
    - 정리 : 1. IP 주소는 네트워크 상에서 장비를 식별하는 고유한 주소이다. 2. 하드웨어 장비는 네트워크에 연결될 때 고유한 IP 주소를 할당받는다. 3. 프로세스는 포트 번호를 통해 네트워크 통신을 하며, IP 주소는 장비르 식별한다.
    - 4. IPv4와 IPv6는 각각 32비트와 128비트 주소 체계를 사용한다.

- 공인 IP 주소는 ISP에서 할당받으며, 인터넷과 연결되는 장비에 사용된다.
- 사설 IP 주소는 로컬 네트워크의 라우터나 DHCP 서버에서 할당받는다.
- 동적 IP 주소는 DHCP 서버에서 자동으로 할당되며, 변경될 수 있다.
- 정적 IP 주소는 수동으로 설정되며, 변경되지 않는다.
- 127.0.0.1의 의미 : 루프백 주소 : 이는 컴퓨터가 자신의 네트워크 인터페이스를 통해 자기 자신과 동신할 수 있도록 해주는 주소이다.

[INDEX](#index)
<br>

### 웹서버 2

- Handling different endpoints

노드를 이용해서 간단한 웹서버 구축하기
url과 method를 이용해서 다양한 상황에서 분기를 나눠서 서버를 작성할 수 있다.
다만, 콜백의 코드가 길어질 수 있고, 관리가 어려워질 수 있다. 그래서 등장하게 된 것이 express 이다.

- Basic Express

  - yarn add express
  - app.method(url, handler);
  - app.listen(port, () => );
  - express는 여러개의 Handler를 사용할 수 있다.

- Middleware

  - application level
  - routing level
  - static middleware

- putting frontend and backend together

- CORS

  - CORS 브라우저의 룰 : 다른 origin으로 Fetch 불가

- How to deploy

- Serverless function

[INDEX](#index)
- - -

## 2024-11-13

- 데이터형, 기본형과 참조형의 차이점. 메모리에 어떻게 저장되는지 설명해보자.
- 데이터는 선언 후에 할당
- 메모리에 식별자를 저장(선언) - 값을 메모리에 저장 - 식별자와 값의 메모리를 연결(할당)
- 타입스크립트로 drag&drop 웹사이트 만들기 시작 - DOM 요소 선택 및 OOP 렌더링
- HTML template 태그
- document.importNode
- template.content 속성 / documentFragment 객체(DOM 컨텐츠를 포함하는 임시 컨테이너)
- insertAdjacentElement

[INDEX](#index)
- - - 

## 2024-11-14

- autobind 데코레이터 만들기
- 이벤트 핸들러, 콜백 함수의 this 바인딩
- 선언시점, 호출시점
- 일반함수, 화살표함수
- 이벤트 리스너, 비동기, 콜백큐, 이벤트 루프, 백그라운드,이벤트 객체
- 콜백함수 실행 순서
  - [ 이벤트 리스너가 백그라운드에 등록 - 이벤트 발생 - 이벤트 객체를 핸들러에 넘기고, 콜백큐로 이동 - 스택이 다 비면 콜스택으로 이동 - 실행 ]

[INDEX](#index)
- - - 

## 2024-11-15

- autobind 데코레이터는 어떻게 동작할까?
  - [ 클래스 정의 시점에 디스크립터에 getter 함수 세팅, 수정된 디스크립터 반환 - 메서드가 호출되면 수정된 디스크립터의 get 함수 실행 - 수정된 메서드 반환 - 수정된 메서드 실행 ]
- 데코레이터는 자바스크립트의 메타프로그래밍을 지원하기 위한 기법으로, 자바스크립트의 프로퍼티 디스크립터를 통해 객체의 동작을 수정하거나 확장할 수 있다.
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

[INDEX](#index)
- - - 

## 2024-11-16

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

[INDEX](#index)
- - - 

## 2024-11-17

- 프로젝트 목록 렌더링 하기
- 싱글톤으로 애플리케이션 상태 관리하기
  - prjState 상태관리 클래스 생성
    - private static 키워드로 싱글톤 인스턴스 생성
    - addListener 메서드를 만들어서 list가 변경될 때 listener 함수를 추가
    - addProject 메서드로 프로젝트 객체를 만들고, projects 배열에 추가 - 리스터 함수 배열을 호출해서 프로젝트 배열을 전달
  - ProjectList 클래스에서 입력을 받을 수 있도록 하고, 받은 입력을 addProject를 실행해서 prjState 클래스를 호출
  - ProjectList가 생성될 때, prjState.addListener를 추가한다.

[INDEX](#index)
- - - 

## 2024-11-18

- 클래스, 커스텀 타입으로 교체하기
- enum status 자료형 추가
- eventListener에서 필터링을 통해서 active / finished 따른 렌더링 나누기 / 열거형으로 프로젝트 필터링 하기(projectList 클래스에서 수행)
- 중복 렌더링 방지
- 클래스 필드 키워드 public / private / protected / readonly / static / abstract
- 디스크립터란? value는 누가 가지고 있나?

[INDEX](#index)

- - - 

## 2024-11-19

- 운영체제의 역사(ms-dos / unix)
- 운영체제 자원 관리자
- class 타입을 만들때 enum 타입을 활용해서 필터링하기.
- 상속 & 제네릭으로 중복 제거하기
- 객체는 참조형, 복사해서 전달하는 것
- 퍼블릭 메서드는 관례상 프라이빗 메서드 위에
- super, protected 키워드

[INDEX](#index)
- - - 

## 2024-11-20

- 비트 > 스위치 > 1 = on, 0 = off
- 1비트 > 2가지의 경우의수
- 2진수 > 16진수 > 4비트 > 8 4 2 1
- 메모리주소, 색상표현(8비트 > 16진수 표현 2개로 표현 가능)

<br>

- 접근자 디스크립터와 getter의 차이점 / this.method Vs this.method();
- 메서드 데코레이터는 어떻게 실행되는가
- 인터페이스 Implements
- interface : 순수하게 청사진만을 제공 / 메서드 구현을 가질 수 없음 / 다중 구현이 가능
- abstract class : 추상 메서드와 일반 메서드를 모두 가질 수 있음 / 단일 상속만 가능
- abstract 메서드는 abstract class 내에서만 사용가능 / 구현을 하지 않고 자식 클래스에서 구현하도록 강제하는 메서드
- abstract 메서드는 인스턴스화 할 수 없음. 상속을 통해서 자식 클래스에서 구현해야 함.

[INDEX](#index)

## 2024-11-21

- 드래그이벤트에 데이터를 붙이고, 받아서 ui 업데이트 하기
- dragEvent api

## 2024-11-22

- 모듈 / 네임스페이스, esm
- 기본적으로는 전역 스코프, export로 노출시켜야 모듈로 인식

## 2024-11-23

- JSON.stringify는 객체를 JSON 형태의 문자열로 반환

## 2024-11-25

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
5. 인터페이스 일관성
6. 계층화
7. 캐시 가능

<br>

HTTP 메서드

- 클라이언트가 서버에게 무엇을 하기 원하는지에 대한 요청 방식(메서드)

Node.js 의 http 모듈

HTTP 프로토콜 (HyperText Transfer protocol)
클라이언트와 서버 간의 정보 교환을 위한 규약을 정의하며, 웹에서 데이터를 전송하는 방식에 대해 규명한다.
HTTP 프로토콜은 클라이언트가 서버에 요청(request)를 보내고, 서버는 이를 처러하여 응답(response)를 보내는 방식으로 동작한다. 이 과정에서 중요한 것은 Http 메서드와 헤더, 그리고 본문이다.

URL (Locator) 자원의 위치, 하나의 파일 위치
URI 식별자, 파일이 위한 곳에서 구분할 수 있도록 하는것. URL에 식별자가 붙으면 URI 라고 할 수 있다.

[INDEX](#index)
- - - 

## 2024-11-26

- Fetch 메서드
- async/await
- 이벤트 위임(버블링, 타깃, 캡처링) - 이벤트의 시작은 window 객체
- $0
- matches() / getAttribute() / Object.values() / Object.keys / map / join
- 상위 노드 찾는 함수 구현

## 2024-11-27

- imperative(명령형) - how / declarative(선언형) - what

[INDEX](#index)
- - -

## 2024-11-29

- 비동기와 콜백큐
- fetch 흐름
  1. fetch 호출 -> promise 반환
  2. 네트워크 요청은 백그라운드(Web Api)에서 처리
  3. 응답 완료시, 마이크로태스크 큐에 then() 콜백이 등록
  4. 이벤트 루프가 콜 스택을 비우고, then() 콜백 실행
  5. response.json() 호출 -> 새로운 promise 반환
  6. .then() 체이닝 반복

[INDEX](#index)
- - -

## 2024-12-08

- 환경변수(Environment Variable)란, 운영 체제에서 실행되는 프로그램이나 프로세스가 실행 환경에 대한 정보를 얻을 수 있도록 제공하는 동적인 값.
- 환경변수는 운영 체제와 응용 프로그램 간의 설정 정보 교환에 주로 사용된다.

  [특징]

  - 전역적: 환경변수는 한 프로세스에서 다른 프로세스로 전달될 수 있다.
  - 동적: 필요에 따라 값을 수정하거나 삭제할 수 있다.
  - 운영체제에 따라 환경변수의 구현 방식이 조금씩 다르다.

[INDEX](#index)
- - -

## 2024-12-12

- npm은 무엇이고, 어떻게 동작하는가?
- 터미널에서 npm 명령어를 입력하면 어떤 일들이 실행되는 걸까?
- [https://missing.csail.mit.edu/]
- nodeJs는 무엇이고, 어떻게 구성되어 있나?
- npm과 NodeJs는 어디에 존재할까?
- bin/sbin 파일
- Levenshtein - bit mask
- Did you mean.js 파일
- new Uint32Array()
- 0x10000 / 16진수 변환

[INDEX](#index)
- - -

## 2025-01-16

1. Redux
2. Reduxjs/toolkit
3. React-redux

### 데이터의 흐름!

createSlice - reduxjs/toolkit

- slice 객체 생성(name, initial value, reducers)
- reducer 함수 생성시 redux에서 불변성을 관리하기 때문에 바로 값을 업데이트해도 된다.(immer)

configureStore - reduxjs/toolkit

- store 생성, reducer 객체에 상태 등록

Provider compo - react-redux

- store prop으로 store 연결

useDispatch - react-redux

- 액션 생성 함수로 액션 객체 생성(store에 저장해둔, dispatch로 store로 액션 객체 전달)
- action.payload 활용

useSelector - react-redux

- store에서 필요한 state를 '바로' 호출

[INDEX](#index)
- - -

## 2025-01-17

### 리덕스로 사이드이펙트, 비동기 함수 사용하기.

- 액션 생성자 Thunk 함수 사용하기
- dispatch에 액션 객체가 아니라 함수를 주입하면 해당 함수를 미들웨어로 사용할 수 있다. 이 때 비동기 작업 등을 실행하고,  
  dispatch를 실행할 수 있다. 해당 함수에는 리덕스가 dispatch를 자동으로 넘겨준다.
- 비동기 작업을 실행할 액션을 useEffect를 이용해서 필요할 때에만 업데이트가 되도록 한다. 의존성에는 dispatch를 넣어준다.

### Firebase로 백엔드 구축하기

realtime database / cloud firestore

- 사용자 계정 관리: Firebase Authentication
- 실시간 데이터베이스: Firebase Realtime Database 또는 Cloud Firestore
- 푸시 알림: Firebase Cloud Messaging (FCM)
- 파일 저장: Firebase Storage
- 백엔드 로직: Cloud Functions for Firebase

### Hosting이란

- 인터넷에 콘텐츠를 제공하고 위한 서비스
- 서버: 웹사이트나 애플리케이션을 저장하고 관리하는 컴퓨터. 24시간 작동하여 사용자가 언제든지 콘텐츠에 접근할 수 있도록 함.
- 도메인: 사용자가 컨텐츠에 접근할 수 있는 주소(URL)
- 네트워크가: 서버를 통해 콘텐츠를 사용자에게 전송할 수 있는 네트워크 연결

[INDEX](#index)
- - -

## 2025-01-18

### React-router

- react-router-dom
- createBrouserRouter
- RouterProvider
- Link
- { path, element, children }
- NavLink
- useParams / useNavigate
- absolute/relative path

### module.css

- css 파일 로컬로 적용하기

[INDEX](#index)
- - -


