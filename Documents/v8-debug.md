# v8-debug 엔진으로 JS 컴파일 과정 이해하기


### 프로그래밍 언어의 컴파일 과정 

Parsing -> Ast compiling  -> Code Optimization -> interperting to Machine Code

parsing 과정에서 스크립트의 전체 정보를 파악하게 되며, 코드의 scope와 변수의 정보(식별자, 메모리의 위치 등), 함수의 호출 등을 파악한 후 데이터로 만든다.
이 데이터를 바탕으로 AST를 생성하게 된다. 그리고 이 때 만들어진 AST와 데이터를 바탕으로 바이트 코드를 생성함으로써 스크립트의 실행 준비를 마치게 된다.
이후 함수가 실행되게 되면, 해당 바이트 코드를 컴파일하여(인터프리팅) 컴퓨터가 명령을 수행할 수 있도록 머신코드로 변환하게 된다. 컴퓨터(CPU)는 변환된 머신코드를
하나씩 수행하게 된다(굉장히 빠른 속도로) 이를 통해 브라우저에서 프로그래머가 원하는 동작을 확인할 수 있게 된다.

v8-debug 엔진을 활용하면 scope, bytecode, ast를 확인할 수 있다.

직접 확인해 볼 코드는 아래와 같다.


```javascript
var n1 = 'number one thing';

function fn(){
	let a = 0;
	if (a===0) {
		let b = 'foo';
		return a;
	}
	let res = n1 + '111';
	let next2 = 'constant100000';
	let next3 = 'constant200000';
	let next4 = 'constant300000';
	next2 = 500000;
	let num = 123098234982734;
	var a1 = [1,2,3];
	var a2 = [1,2,3];
	let obj = {a:1, b:2};
	const next = next2;
	console.log(next);
}

function fn2(){
	n1 = '495844930';
	console.log(n1);
}

function SC(){
	const value2 = 101.101;
	return value2;
}

let k = SC();

let x = 100;
let y = 200;

fn2();
fn();
```

먼저 scope의 내용은 아래와 같다.

```javascript
Inner function scope:
function fn () { // (0x7fed33048ee0) (41, 370)
  // NormalFunction
  // 2 heap slots
  // local vars:
  LET next2;  // (0x7fed3304b4b0) never assigned
  LET num;  // (0x7fed3304b720) never assigned
  LET next3;  // (0x7fed3304b4f8) never assigned
  LET next4;  // (0x7fed3304b540) never assigned
  VAR a1;  // (0x7fed3304b768) never assigned
  CONST next;  // (0x7fed3304b988) never assigned
  LET res;  // (0x7fed3304b450) never assigned
  LET a;  // (0x7fed3304b248) never assigned
  VAR a2;  // (0x7fed3304b7b0) never assigned
  LET obj;  // (0x7fed3304b7f8) never assigned

  block { // (0x7fed3304b290) (69, 102)
    // 2 heap slots
    // local vars:
    LET b;  // (0x7fed3304b3f0) never assigned
  }
}
Inner function scope:
function fn2 () { // (0x7fed330490d0) (384, 426)
  // NormalFunction
  // 2 heap slots
}
Inner function scope:
function SC () { // (0x7fed330492c0) (439, 486)
  // NormalFunction
  // 2 heap slots
  // local vars:
  CONST value2;  // (0x7fed3304b230) never assigned
}
Global scope:
global { // (0x7fed33048c30) (0, 545)
  // will be compiled
  // NormalFunction
  // 1 stack slots
  // 6 heap slots
  // temporary vars:
  TEMPORARY .result;  // (0x7fed330499b0) local[0]
  // local vars:
  LET k;  // (0x7fed330494e0) context[3]
  VAR fn2;  // (0x7fed33049290)
  VAR n1;  // (0x7fed33048e50)
  VAR SC;  // (0x7fed33049480)
  LET y;  // (0x7fed33049808) context[5]
  VAR fn;  // (0x7fed330490a0)
  LET x;  // (0x7fed33049748) context[4]

  function SC () { // (0x7fed330492c0) (439, 486)
    // lazily parsed
    // NormalFunction
    // 2 heap slots
  }

  function fn2 () { // (0x7fed330490d0) (384, 426)
    // lazily parsed
    // NormalFunction
    // 2 heap slots
  }

  function fn () { // (0x7fed33048ee0) (41, 370)
    // lazily parsed
    // NormalFunction
    // 2 heap slots
  }
}
```
위에 출력된 내용을 확인하면 변수들의 메모리주소, 스택과 힙의 할당, 변수들의 할당 과정등을 확인할 수 있다. 확인해볼 것은 Global scope의 경우 고정으로 한 개의 stack slot이 할당되지만, 다른 scope의 경우 많은 수의 stack slot이 할당되는 경우가 있었다. 이 부분은 확인해봐야 할 것 같다. 그리고 Global context의 ast와 바이트 코드를 확인해보면, 아래와 같다. 

```javascript
[generating bytecode for function: ]
--- AST ---
FUNC at 0
. KIND 0
. LITERAL ID 0
. SUSPEND COUNT 0
. NAME ""
. INFERRED NAME ""
. DECLS
. . VARIABLE (0x7fed33048e50) (mode = VAR, assigned = true) "n1"
. . FUNCTION "fn" = function fn
. . FUNCTION "fn2" = function fn2
. . FUNCTION "SC" = function SC
. . VARIABLE (0x7fed330494e0) (mode = LET, assigned = true) "k"
. . VARIABLE (0x7fed33049748) (mode = LET, assigned = true) "x"
. . VARIABLE (0x7fed33049808) (mode = LET, assigned = true) "y"
. BLOCK NOCOMPLETIONS at -1
. . EXPRESSION STATEMENT at 9
. . . kInit at 9
. . . . VAR PROXY unallocated (0x7fed33048e50) (mode = VAR, assigned = true) "n1"
. . . . LITERAL "number one thing"
. BLOCK NOCOMPLETIONS at -1
. . EXPRESSION STATEMENT at 496
. . . kInit at 496
. . . . VAR PROXY context[3] (0x7fed330494e0) (mode = LET, assigned = true) "k"
. . . . CALL
. . . . . VAR PROXY unallocated (0x7fed33049480) (mode = VAR, assigned = true) "SC"
. BLOCK NOCOMPLETIONS at -1
. . EXPRESSION STATEMENT at 512
. . . kInit at 512
. . . . VAR PROXY context[4] (0x7fed33049748) (mode = LET, assigned = true) "x"
. . . . LITERAL 100
. BLOCK NOCOMPLETIONS at -1
. . EXPRESSION STATEMENT at 525
. . . kInit at 525
. . . . VAR PROXY context[5] (0x7fed33049808) (mode = LET, assigned = true) "y"
. . . . LITERAL 200
. EXPRESSION STATEMENT at 531
. . CALL
. . . VAR PROXY unallocated (0x7fed33049290) (mode = VAR, assigned = true) "fn2"
. EXPRESSION STATEMENT at 538
. . kAssign at -1
. . . VAR PROXY local[0] (0x7fed330499b0) (mode = TEMPORARY, assigned = true) ".result"
. . . CALL
. . . . VAR PROXY unallocated (0x7fed330490a0) (mode = VAR, assigned = true) "fn"
. RETURN at -1
. . VAR PROXY local[0] (0x7fed330499b0) (mode = TEMPORARY, assigned = true) ".result"
```
```javascript
[generated bytecode for function:  (0x10bd00298aed <SharedFunctionInfo>)]
Bytecode length: 51
Parameter count 1
Register count 3
Frame size 24
         0x2e2a00040058 @    0 : 13 00             LdaConstant [0]
         0x2e2a0004005a @    2 : c9                Star1
         0x2e2a0004005b @    3 : 19 fe f7          Mov <closure>, r2
         0x2e2a0004005e @    6 : 68 60 01 f8 02    CallRuntime [DeclareGlobals], r1-r2
         0x2e2a00040063 @   11 : 13 01             LdaConstant [1]
         0x2e2a00040065 @   13 : 23 02 00          StaGlobal [2], [0]
         0x2e2a00040068 @   16 : 21 03 02          LdaGlobal [3], [2]
         0x2e2a0004006b @   19 : c9                Star1
         0x2e2a0004006c @   20 : 64 f8 04          CallUndefinedReceiver0 r1, [4]
         0x2e2a0004006f @   23 : 27 03             StaCurrentScriptContextSlot [3]
         0x2e2a00040071 @   25 : 0d 64             LdaSmi [100]
         0x2e2a00040073 @   27 : 27 04             StaCurrentScriptContextSlot [4]
         0x2e2a00040075 @   29 : 00 0d c8 00       LdaSmi.Wide [200]
         0x2e2a00040079 @   33 : 27 05             StaCurrentScriptContextSlot [5]
         0x2e2a0004007b @   35 : 21 04 06          LdaGlobal [4], [6]
         0x2e2a0004007e @   38 : c9                Star1
         0x2e2a0004007f @   39 : 64 f8 08          CallUndefinedReceiver0 r1, [8]
         0x2e2a00040082 @   42 : 21 05 0a          LdaGlobal [5], [10]
         0x2e2a00040085 @   45 : c9                Star1
         0x2e2a00040086 @   46 : 64 f8 0c          CallUndefinedReceiver0 r1, [12]
         0x2e2a00040089 @   49 : ca                Star0
         0x2e2a0004008a @   50 : af                Return
Constant pool (size = 6)
0x2e2a00040011: [TrustedFixedArray]
 - map: 0x10bd00000595 <Map(TRUSTED_FIXED_ARRAY_TYPE)>
 - length: 6
           0: 0x10bd00298b55 <FixedArray[7]>
           1: 0x10bd002989e9 <String[16]: #number one thing>
           2: 0x10bd002989d9 <String[2]: #n1>
           3: 0x10bd00298ab1 <String[2]: #SC>
           4: 0x10bd00298aa1 <String[3]: #fn2>
           5: 0x10bd00298a05 <String[2]: #fn>
Handler Table (size = 0)
Source Position Table (size = 0)
```






