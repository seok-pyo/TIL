### Server

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

- Handling different endpoints

노드를 이용해서 웹서버 구축하기
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
