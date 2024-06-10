## 6월 10일(월)

### 디렉토리 구조를 JSON 파일로 만들기

노드를 이용해서 디렉토리 구조를 JSON 파일로 만들 수 있다.

노드의 fs 모듈과 Path 모듈을 이용해서 로컬 디렉토리를 읽고, 해당 디렉토리의 하위 파일들을 파악한다.

먼저 fs모듈과 path 모듈을 불러온다.

```js
const fs = require('fs'); // 파일 시스템 모듈
const path = require('path'); // 경로 모듈
```

```js
function dirToJson(dirPath) {
  const stats = fs.statSync(dirPath);

  const info = {
    path: dirPath,
    name: path.basename(dirPath),
  };
  // info 객체 생성.

  if (stats.isDirectory()) {
    info.type = 'directory';;
    info.children = fs
      .readdirSync(dirPath)
      .map((child) => dirToJson(path.join(dirPath, child)));
    // fs.readdirSync 함수를 이용해서 'dirPath' 디렉토리의 모든 파일과 디렉토리 이름을 동기적으로 읽는다.
       그런 다음, 각 이름에 대해 dirToJson 함수를 재귀적으로 호출하여 info.children 배열에 추가한다.
  } else {
    info.type = 'file';
    return info;
  }
  // 'stats'가 디렉토리가 아닌 경우(즉, 파일인 경우) 'info' 객체에 'type' 속성을 추가하고 'file'로 설정한다.
  // 최종적으로 'info' 객체를 반환한다.
```
명령줄 인자를 처리하는 속성인 'process.argv'를 사용하여 두 번째 요소, node의 입력값(주소)을 디렉토리 주소로 사용하거나,
기본값으로는 현재 디렉토리 위치를 시작점으로 설정한다.

```js
const directoryPath = process.argv[2] || '.';
const dirJson = dirToJson(directoryPath);
const res = JSON.stringify(dirJson, null, 2);

fs.writeFileSync('output.json', res);
```
JSON 파일을 만들고 싶은 디렉토리 주소를 입력 후 파일을 실행하면 json 파일을 생성할 수 있다.
