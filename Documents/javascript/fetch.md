### fetch

- fetch 흐름
  1. fetch 호출 -> promise 반환
  2. 네트워크 요청은 백그라운드(Web Api)에서 처리
  3. 응답 완료시, 마이크로태스크 큐에 then() 콜백이 등록
  4. 이벤트 루프가 콜 스택을 비우고, then() 콜백 실행
  5. response.json() 호출 -> 새로운 promise 반환
  6. .then() 체이닝 반복
